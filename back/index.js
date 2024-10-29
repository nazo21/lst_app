


//const PORT = process.env.PORT || 8081;

//const express = require('express');
//const app = express();
const express = require('express');
const app = express();
const port = 3000;

//app.use(express.json());




app.get('/app.js', (req, res) => {
  res.send('Hello, Express!');
});

app.listen(port, () => {
  console.log(`Node.js HTTP server is running on port ${port}`);
});

