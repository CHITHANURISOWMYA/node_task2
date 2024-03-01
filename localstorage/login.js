
const express = require("express");
const { LocalStorage } = require("node-localstorage");

const localStorage = new LocalStorage("./localstorage");
const app = express();

app.use(express.json());

app.post("/log", (req, res) => {
  let data = JSON.parse(localStorage.getItem("task3")) || [];
  const { username, password } = req.body;

  if (data) {
    var validations = data.find((val) => val.username == username && val.password == password);

    if (validations) {
      res.send("User already exists");
    } else {
      data.push(req.body);
      localStorage.setItem("task3", JSON.stringify(data, null, 3));
      res.send("Registration successful");
    }
  } else {
    res.status(500).send("Internal Server Error: Unable to retrieve data from local storage");
  }
});

const PORT = 3003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
