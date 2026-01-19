// const http = require('http');

// const server=http.createServer((req, res) => {
// //   res.writeHead(200, { 'Content-Type': 'text/plain' });
// //   res.end('Response is closed\n');
// // }
// // ).listen(3000, () => {
// //   console.log('Server is running on port 3000');
// // });

// switch (req.url) {
//     case "/":
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('<h1> Welcome to the Home Page\n');
//         break;
//     case "/about":
//         res.writeHead(200, { 'Content-Type': 'text/plain' });
//         res.end('<h1> Welcome to the About Page\n');
//         break;
//     default:
//         res.writeHead(404, { 'Content-Type': 'text/plain' });
//         res.end('<h1> 404 Page Not Found\n');
// }
// });

const http = require('http');

const server = http.createServer((req, res) => {
  switch (req.url) {
    case "/":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to home page ;).</h1>");
      break;

    case "/about":
      res.writeHead(200, { "Content-Type": "text/html" });
      res.end("<h1>Welcome to about page :).</h1>");
      break;

    default:
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({w
        error: "Page not found"
      }));
  }
});

server.listen(8000, () => {
  console.log("Server running at http://localhost:8000");
});