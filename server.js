import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// If your static files (like index.html) are in a directory named 'public'
app.use(express.static('.'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html'); // Adjust the path according to your directory structure
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});