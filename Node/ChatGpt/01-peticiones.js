import express from "express";

const app = express();

app.use(express.static("public"));
app.use(express.json());

const PORT = process.env.PORT || 8080

const users = [
  {
    "_id": "1",
    "email": "mariana@prueba.com",
    "password": "$00000",
    "document": "1111111155",
    "name": "MARIANAS",
    "rol": "ADMIN",
    "ficha": "343433",
    "phone": "34343434",
    "state": "1",
    "createdAt": "2022-06-23T01:45:51.854Z",
    "__v": 0,
    "photo": "http://res.cloudinary.com/dyocmaqis/image/upload/v1656466235/nwc8wd0t7pvxcfi8grpr.png"
},
{
    "_id": "2",
    "email": "nany@prueba.com",
    "password": "1234567",
    "document": "11111111",
    "name": "NANY",
    "rol": "APRENDIZ",
    "ficha": "343433",
    "phone": "34343434",
    "state": "1",
    "__v": 0
}
]

app.get("/user", (req, res) => {
  res.send(users);
})

app.get("/user/:id", (req, res) => {
  const user = users.find((user) => user._id === req.params.id);
  if(!user) res.status(404).send("The user with the given ID was not found");
  res.send(user);
})

app.post("/user", (req, res) => {
  const user = req.body;
  user._id = `${users.length + 1}`;
  users.push(user);
  res.send(`User with the name ${user.name} added to the database`);
})

app.put("/user/:id", (req, res) => {
  const user = users.find((user) => user._id === req.params.id);
  if(!user) res.status(404).send("The user with the given ID was not found");
  user.name = req.body.name;
  res.send(`User with the name ${user.name} has been updated`);
})

app.delete("/user/:id", (req, res) => {
  const user = users.find((user) => user._id === req.params.id);
  if(!user) res.status(404).send("The user with the given ID was not found");
  user.state = "0";
  res.send(`User with the name ${user.name} has been deleted`);
})

app.listen(PORT, () => {
  console.log("Example app listening on port 3000!");
})