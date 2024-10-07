// server/server.js
import express from 'express';
import bodyParser from 'body-parser';
import fs from 'fs';
import path from 'path';
import cors from 'cors';
import { fileURLToPath } from 'url';

const app = express();
const PORT = 3001;

// Get the directory name
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(bodyParser.json());
app.use(cors());

app.post('/login', (req, res) => {
  const { email, password } = req.body;
  const filePath = path.join(__dirname, '../datas/data.json');

  fs.readFile(filePath, (err, content) => {
    if (err) throw err;
    const jsonData = JSON.parse(content);

    // Check if email and password match
    const user = jsonData.find((user) => user.email === email && user.password === password);
    if (user) {
      return res.status(200).send('Login successful');
    } else {
      return res.status(401).send('Invalid email or password');
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});