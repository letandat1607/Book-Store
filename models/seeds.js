const User = require("./user");
const Cart = require("./cart");

let usersData = [
  { "id": "1", "userName": "A", "password": "123" },
  { "id": "2", "userName": "B", "password": "123" },
  { "id": "3", "userName": "C", "password": "123" },
  { "id": "4", "userName": "D", "password": "123" },
  { "id": "5", "userName": "E", "password": "123" },
  { "id": "6", "userName": "F", "password": "123" },
  { "id": "7", "userName": "G", "password": "123" },
  { "id": "8", "userName": "H", "password": "123" },
  { "id": "9", "userName": "I", "password": "123" }
]

usersData.forEach(u => new User(u.id, u.userName, u.password));

module.exports = {User,Cart};