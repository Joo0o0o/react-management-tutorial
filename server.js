const fs = require("fs");

const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync("./database.json");
const conf = JSON.parse(data);
const mysql = require("mysql");

//이미지 업로드에 필요
const multer = require("multer");
const upload = multer({ dest: "./upload" });

const connection = mysql.createConnection({
  host: conf.host,
  user: conf.user,
  password: conf.password,
  port: conf.port,
  database: conf.database,
});

connection.connect();
// 데이터 불러오기
app.get("/api/customers", (req, res) => {
  connection.query("SELECT * FROM customer", (err, rows, fields) => {
    res.send(rows);
  });
});

//접근가능하게해줌
app.use("/image", express.static("./upload"));
// 주소, express를 통한 접근
app.post("/api/customers", upload.single("image"), (req, res) => {
  let sql = "INSERT INTO customer VALUES (null, ?, ?, ?, ?, ?)";
  let image = "/image/" + req.file.filename; // multer가 파일이름 안겹치게 만들어줌
  let name = req.body.name;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  console.log(name);
  let params = [image, name, birthday, gender, job];
  connection.query(sql, params, (err, rows, fields) => {
    res.send(rows);
    console.log(err);
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));
