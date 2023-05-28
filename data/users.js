import bcrypt from "bcryptjs";
const Users = [
  {
    name: "Mahesh Jangid",
    email: "mahesh1@gmail.com",
    password: bcrypt.hashSync("1234", 12),
  },
  {
    name: "Guru",
    email: "guru@gmail.com",
    password: bcrypt.hashSync("1234", 12),
  },
  {
    name: "Ravi",
    email: "ravi@gmail.com",
    password: bcrypt.hashSync("123456", 12),
  },
  {
    name: "Dev Ed",
    email: "deved@gmail.com",
    password: bcrypt.hashSync("dev12", 12),
  },
];
export default Users;
