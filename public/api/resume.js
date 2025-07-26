const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  // Replace the filePath and Content-Disposition to redirect to Google Drive
  res.writeHead(302, { Location: 'https://drive.google.com/file/d/1eIX--9353PdKj2ZsiN99KTOb61HXkyVe/view?usp=sharing' });
  res.end();
}; 