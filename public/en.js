i18n.init({ en: {
  // Header
  '.header p': 'Free PDF tools \u2014 everything happens in your browser',

  // Tab buttons
  '.tab-btn:nth-child(1)': '\ud83d\udccb Merge',
  '.tab-btn:nth-child(2)': '\u270e Sign',
  '.tab-btn:nth-child(3)': '\u2702 Split',

  // Merge tool
  '#merge-drop .drop-label': 'Drop your PDF files here',
  '#merge-drop .drop-hint': 'or click to select \u2014 multiple files accepted',
  '#merge-btn': 'Merge PDFs',

  // Sign tool
  '#sign-pdf-drop .drop-label': 'Drop your PDF here',
  '#sign-pdf-drop .drop-hint': 'or click to select',
  '#sign-sig-drop .drop-label': 'Signature image (PNG / JPG)',
  '#sign-sig-drop .drop-hint': 'or draw your signature below',
  '.draw-sig-btns .btn-secondary:nth-child(1)': 'Clear',
  '.draw-sig-btns .btn-secondary:nth-child(2)': 'Use this signature',
  '#tab-sign > .btn-secondary': '\u270e Draw my signature',
  '.sign-controls label': 'Size:',
  '#sign-page-nav button:nth-child(1)': '\u25c0 Prev',
  '#sign-page-nav button:nth-child(3)': 'Next \u25b6',
  '#sign-btn': 'Download signed PDF',

  // Split tool
  '#split-drop .drop-label': 'Drop your PDF here',
  '#split-drop .drop-hint': 'or click to select',
  '#split-range': { placeholder: 'E.g.: 1-3, 5, 8-10' },
  '#split-range-hint': 'Separate pages or ranges with commas. E.g.: 1-3, 5, 8-10',
  '#split-btn': 'Extract pages',

  // Cross-links
  '.cross-link:nth-child(1)': '<span>\u2b07</span> Download a video',
  '.cross-link:nth-child(2)': '<span>\u2699</span> Convert a file',
  '.cross-link:nth-child(3)': '<span>\u25a6</span> QR Code Generator',
  '.cross-link:nth-child(4)': '<span>\u21ea</span> Share a file',

  // SEO content
  '.seo-content h2:first-child': 'Free online PDF tools',
  '.seo-content h3:nth-of-type(1)': 'Merge PDFs online for free',
  '.seo-content > p:nth-of-type(1)': 'Combine multiple PDF documents into a single file in seconds. Drag and drop your PDFs, reorder them as needed, and merge. Processing is instant and happens entirely in your browser \u2014 no files are sent to a server. Perfect for combining invoices, contracts, course notes, or reports into a single document.',

  '.seo-content h3:nth-of-type(2)': 'Sign a PDF online without software',
  '.seo-content > p:nth-of-type(2)': 'Add your signature to any PDF without installing software. Import a signature image (PNG or JPG) or draw it directly in the tool. Click on the PDF preview to place your signature where you want, adjust the size, and download the signed document. Everything happens locally: your signature and documents never leave your device.',

  '.seo-content h3:nth-of-type(3)': 'Split a PDF \u2014 extract pages',
  '.seo-content > p:nth-of-type(3)': 'Extract the pages you need from a PDF document. Upload your file, enter page numbers or page ranges (e.g. 1-3, 5, 8-10), and download a new PDF containing only the selected pages. Perfect for isolating a chapter, section, or form from a long document.',

  '.seo-content h3:nth-of-type(4)': 'Privacy \u2014 your files stay on your device',
  '.seo-content > p:nth-of-type(4)': 'Unlike most online PDF tools that upload your files to their servers, PDF Tools works 100% in your browser using pdf-lib and pdf.js libraries. Your documents are never transmitted to a server. The ideal tool for handling sensitive documents: contracts, payslips, identity documents, or any confidential file.',

  // FAQ
  '.faq h2': 'Frequently asked questions',
  '.faq details:nth-child(2) summary': 'How do I merge PDFs online?',
  '.faq details:nth-child(2) p': 'Drag and drop your PDF files into the drop zone in the "Merge" tab. Reorder them if needed by dragging the items, then click "Merge PDFs". The combined PDF downloads automatically. All processing happens in your browser.',
  '.faq details:nth-child(3) summary': 'Are my files sent to a server?',
  '.faq details:nth-child(3) p': 'No. All processing is done locally in your browser using pdf-lib and pdf.js. No files are uploaded to a server. Your documents stay on your device, even sensitive ones.',
  '.faq details:nth-child(4) summary': 'How do I sign a PDF online for free?',
  '.faq details:nth-child(4) p': 'Open the "Sign" tab, upload your PDF and your signature image (PNG or JPG), or draw your signature. Click on the PDF preview to place your signature, adjust the size with the slider, then download the signed PDF.',
  '.faq details:nth-child(5) summary': 'Can I extract certain pages from a PDF?',
  '.faq details:nth-child(5) p': 'Yes. In the "Split" tab, upload your PDF then enter the page numbers to extract (e.g. 1-3, 5, 8-10). A preview shows which pages will be included. Click "Extract pages" to download the new PDF.',
  '.faq details:nth-child(6) summary': 'What signature formats are accepted?',
  '.faq details:nth-child(6) p': 'PNG and JPG images are accepted. For best results, use a signature on a transparent background (PNG). You can also draw your signature directly in the tool using the built-in drawing canvas.',
  '.faq details:nth-child(7) summary': 'Is there a size or page count limit?',
  '.faq details:nth-child(7) p': 'There is no strict limit imposed by the tool. Processing depends on the memory available in your browser. Files with several hundred pages work without issues on most modern devices.',

  // Footer
  '.footer': 'pdf.purvanas.fr \u2014 Free PDF tools, open source, 100% client-side',

  // Bottom bar
  '.bottom-btn-bug': '\ud83d\udc1b Report a bug',
  '.bottom-btn-kofi': '\u2615 Support',

  // Bug modal
  '.bug-modal h3': '\ud83d\udc1b Report an issue',
  '#bug-description': { placeholder: 'Describe what is not working...' },
  '.bug-modal-info': 'Your report will automatically include an anonymous activity log to help us reproduce the issue.',
  '.bug-modal button': 'Send report',

  // Legal footer
  '#legal-links a:nth-child(1)': 'Legal notice',
  '#legal-links a:nth-child(2)': 'Privacy policy',

  // Legal modal
  '#legal-modal h2': 'Legal notice',
  '#legal-modal h3:nth-of-type(1)': 'Service description',
  '#legal-modal h3:nth-of-type(2)': 'Liability',
  '#legal-modal h3:nth-of-type(3)': 'Intellectual property',
  '#legal-modal button': 'Close',

  // Privacy modal
  '#privacy-modal h2': 'Privacy policy',
  '#privacy-modal h3:nth-of-type(1)': 'Data collected',
  '#privacy-modal h3:nth-of-type(2)': 'Analytics',
  '#privacy-modal h3:nth-of-type(3)': 'Advertising',
  '#privacy-modal h3:nth-of-type(4)': 'Processed files',
  '#privacy-modal h3:nth-of-type(5)': 'Server logs',
  '#privacy-modal h3:nth-of-type(6)': 'Contact',
  '#privacy-modal button': 'Close',
}});
