const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Get current timestamp
const now = new Date();

app.get('/', (req, res) => {
  res.send(`
    <h1>Ship It! 🚀</h1>
    <p>Version: 1.0.0</p>
    <p>Deployed via Argo CD</p>
    <p>Environment: ${process.env.NODE_ENV || 'development'}</p>
    <p>Current Time: ${now.toLocaleString()}</p>
    <p>Enjoy seamless CI/CD and GitOps deployments!</p>
    <footer style="margin-top: 20px; font-size: small; color: gray;">
      &copy; ${now.getFullYear()} Safe Ship App
    </footer>
  `);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
