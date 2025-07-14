const fs = require('fs');
const path = require('path');

module.exports = (req, res) => {
  const filePath = path.join(process.cwd(), 'public', 'Rahul_Reddy_Gangapuram_Resume.pdf');
  
  res.setHeader('Content-Type', 'application/pdf');
  res.setHeader('Content-Disposition', 'attachment; filename="Rahul_Reddy_Gangapuram_Resume.pdf"');
  
  const fileStream = fs.createReadStream(filePath);
  fileStream.pipe(res);
}; 