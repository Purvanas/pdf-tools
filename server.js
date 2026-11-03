const express = require("express");
const path = require("path");
const fs = require("fs");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 4000;
const HOST = process.env.HOST || "127.0.0.1";
const ERRORS_TOKEN = process.env.ERRORS_TOKEN || "";

function secretMatches(received, expected) {
  if (typeof received !== "string" || typeof expected !== "string" || !expected) return false;
  const actual = Buffer.from(received);
  const wanted = Buffer.from(expected);
  return actual.length === wanted.length && crypto.timingSafeEqual(actual, wanted);
}

app.disable("x-powered-by");
app.set("trust proxy", 1);
app.use((req, res, next) => {
  res.set("X-Content-Type-Options", "nosniff");
  res.set("Referrer-Policy", "strict-origin-when-cross-origin");
  next();
});

app.use(express.json({ limit: "16kb" }));
app.use(express.static(path.join(__dirname, "public")));

// ===== STATS =====
const STATS_FILE = path.join(__dirname, "stats.json");
let stats = { merges: 0, signs: 0, splits: 0, rotations: 0, compressions: 0 };
if (fs.existsSync(STATS_FILE)) {
  try { stats = { ...stats, ...JSON.parse(fs.readFileSync(STATS_FILE, "utf-8")) }; } catch {}
}
function saveJson(file, value) {
  const temporary = `${file}.${process.pid}.tmp`;
  fs.writeFileSync(temporary, JSON.stringify(value, null, 2), { mode: 0o600 });
  fs.chmodSync(temporary, 0o600);
  fs.renameSync(temporary, file);
}
function saveStats() { saveJson(STATS_FILE, stats); }

app.post("/api/stat/:action", (req, res) => {
  const action = req.params.action;
  if (stats[action] !== undefined) { stats[action]++; saveStats(); }
  res.json({ ok: true });
});

app.get("/api/stats", (req, res) => { res.json(stats); });

// ===== ERROR LOGGING =====
const ERRORS_FILE = path.join(__dirname, "errors.json");
let errorLogs = [];
if (fs.existsSync(ERRORS_FILE)) {
  try { errorLogs = JSON.parse(fs.readFileSync(ERRORS_FILE, "utf-8")); } catch {}
}

function logError(type, error, extra) {
  const entry = { time: new Date().toISOString(), type, error: typeof error === "string" ? error.substring(0, 500) : String(error).substring(0, 500), ...extra };
  errorLogs.push(entry);
  if (errorLogs.length > 500) errorLogs = errorLogs.slice(-500);
  try { saveJson(ERRORS_FILE, errorLogs); } catch {}
}

app.post("/api/report-bug", (req, res) => {
  const { error, comment, activityLog, userAgent } = req.body || {};
  const cleanLog = Array.isArray(activityLog)
    ? activityLog.slice(-30).map((item) => {
      if (item && typeof item === "object" && !Array.isArray(item)) {
        return {
          t: String(item.t || "").slice(0, 40),
          a: String(item.a || "").slice(0, 80),
          d: String(item.d || "").slice(0, 300),
        };
      }
      return String(item).slice(0, 300);
    })
    : [];
  logError("user-report", error || "No error", {
    comment: String(comment || "").substring(0, 500),
    activityLog: cleanLog,
    userAgent: String(userAgent || req.headers["user-agent"] || "").substring(0, 300),
  });
  res.json({ ok: true });
});

app.get("/api/errors", (req, res) => {
  if (!ERRORS_TOKEN || !secretMatches(req.headers.authorization, `Bearer ${ERRORS_TOKEN}`)) {
    return res.status(404).json({ error: "Not found" });
  }
  res.set("Cache-Control", "no-store");
  res.json(errorLogs.slice(-100).reverse());
});

// ===== 404 CATCH-ALL =====
app.use((req, res) => {
  res.status(404).json({ error: "Not found" });
});

// ===== GLOBAL ERROR HANDLER =====
app.use((err, req, res, next) => {
  console.error("[ERROR]", err.message);
  if (err.type === "entity.too.large") return res.status(413).json({ error: "Requête trop volumineuse" });
  if (err.type === "entity.parse.failed") return res.status(400).json({ error: "JSON invalide" });
  res.status(500).json({ error: "Erreur interne du serveur" });
});


if (require.main === module) {
  app.listen(PORT, HOST, () => {
    console.log(`PDF Tools running on http://${HOST}:${PORT}`);
  });
}

module.exports = { app, secretMatches };
