const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`<h1>Ship It! 🚀</h1><p>Version: 1.0.0</p><p>Deployed via Argo CD</p>`);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
