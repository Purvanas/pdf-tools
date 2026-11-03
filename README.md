# PDF Tools

**[Démo en ligne](https://pdf.purvanas.fr)** · [Contrôles GitHub](https://github.com/Purvanas/pdf-tools/actions)

Une boîte à outils PDF légère qui fusionne, signe et extrait des pages sans envoyer les documents à un serveur.

L'application est volontairement « buildless » : une page HTML, deux bibliothèques embarquées et un petit serveur Express pour les fichiers statiques, les compteurs agrégés et le signalement de bugs. Les PDF restent dans le navigateur ; `pdf-lib` réalise les modifications et PDF.js ne sert qu'au rendu des aperçus.

## Fonctions principales

- fusion de plusieurs PDF avec réorganisation par glisser-déposer ;
- signature dessinée ou importée, positionnable sur la page choisie ;
- extraction d'une sélection de pages (`1-3, 7, 10-12`) avec validation stricte ;
- aperçu borné pour que les très longs documents ne créent pas des milliers de nœuds dans la page ;
- traitement et téléchargement locaux, y compris pour les documents sensibles.

## Architecture et sécurité

Le navigateur charge les fichiers avec les API `File`/`ArrayBuffer`. Aucun contenu PDF ne traverse l'API du projet. L'option `isEvalSupported: false` applique le contournement officiel de CVE-2024-4367 dans PDF.js. L'application utilise le rendu canvas et n'instancie pas le gestionnaire de scripts du viewer PDF.js. L'option supplémentaire `enableScripting` n'est pas une garantie fournie par `getDocument` dans cette version. Le bundle 3.11.174 reste ancien : sa montée de version reste une évolution à prévoir.

Le serveur ne conserve que des compteurs agrégés et, si l'utilisateur l'envoie explicitement, un rapport de bug borné. La lecture de ces rapports est fermée tant que `ERRORS_TOKEN` n'est pas configuré, puis exige `Authorization: Bearer …`.

## Lancer le projet

Prérequis : Node.js 22 ou 24.

```bash
cp .env.example .env
npm ci
npm start
```

Le service écoute par défaut sur `http://127.0.0.1:4000`. Pour charger explicitement le fichier d'environnement sans npm :

```bash
node --env-file=.env server.js
```

En production, gardez l'écoute en loopback et publiez le service derrière un reverse proxy HTTPS. Les fichiers `stats.json` et `errors.json` sont des données d'exécution : ils ne doivent pas être versionnés.

## Limites assumées

- ce n'est pas un éditeur PDF complet (OCR, formulaires complexes, chiffrement et réparation ne sont pas couverts) ;
- les fichiers très volumineux restent limités par la mémoire disponible dans le navigateur ;
- la signature est une annotation visuelle, pas une signature électronique qualifiée.

## Licence

Le code propre au projet est distribué sous licence MIT. Les bundles tiers embarqués gardent leurs licences respectives ; voir [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md).
