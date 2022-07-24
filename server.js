const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/customers", (req, res) => {
  res.send([
    {
      "id": 1,
      "image": "http://placeimg.com/64/64/1",
      "name": "bracket1",
      "birthday": "650729",
      "gender": "male",
      "job": "business"
    },
    {
      "id": 2,
      "image": "http://placeimg.com/64/64/2",
      "name": "bracket2",
      "birthday": "750729",
      "gender": "famale",
      "job": "student"
    },
    {
      "id": 3,
      "image": "http://placeimg.com/64/64/3",
      "name": "bracket3",
      "birthday": "850729",
      "gender": "male",
      "job": "nojob"
    }
  ])
});

app.listen(port, () => console.log(`Listening on port ${port}`));