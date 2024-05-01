const express = require('express');
const app1 = express();
app1.get('/', (req, res) => {
  res.send('Hello, World!');
 });
const PORT = 3050;
app1.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
