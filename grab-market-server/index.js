var http = require("http");
var hostname = "127.0.0.1";
var port = 8080;

http.createServer((req, res) => {
  const path = req.url;
  const method = req.method;
  if (path === "/products") {
    if (method === "GET") {
      res.writeHead(200, { "Content-Type": "application/json" }); //writeHead 배열을 보낼때, json 방식으로 보낼때
      const products = JSON.stringify([
        {
          //현재end함수의 첫번째 인자에는 string인자가 들어가야하는데 배열형태다 고로써준다.
          name: "농구공",
          price: 5000,
        },
      ]);
      res.end(products);
    } else if (method === "POST") {
      res.end("생성되었습니다.");
    }
  }
  res.end("Good Bye");
});
