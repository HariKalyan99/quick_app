// import http from 'http';

// const serverInfo = {
//     server: 'NODE HTTP SERVER',
//     date: new Date().toDateString(),
//     time: new Date().toTimeString()
// }

// const server = http.createServer((request, response) => {
//     if(request.method === "GET"){
//         if(request.url === "/"){
//             response.write("<h1> Welcome to the node http server</h1>");
//             response.end();
//         }else if(request.url === "/server"){
//             response.writeHead(200, {'Content-Type': 'application/json'});
//             response.write(JSON.stringify(serverInfo));
//             response.end()
//         }
//     }else if(request.method === "POST"){
//         let body = "";
//         if(request.url === "/add/post"){
//             request.on("error", (err) => {
//                 console.log(err)
//             }).on("data", (chunk) => {
//                 body+=chunk;
//             }).on("end", () => {
//                 body = JSON.parse(body);
//                 response.writeHead(200, {'Content-Type': 'application/json'});
//                 response.write(JSON.stringify(body));
//                 response.end();
//             })
//         }
//     }
// })

// server.listen(8081, () => {
//     console.log(`Listening on the port: ${8081}`)
// })


// *****************************************NODE HTTP SERVER************************************


import express from 'express';
import dotenv from 'dotenv';
import connectToMongo from './db/connectToMongo.js';
import authRoutes from './routes/auth.routes.js';
import postRoutes from './routes/post.routes.js';

dotenv.config();

const app = express();

app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);



app.listen(process.env.PORT, () => {
    console.log(`Listening on the port ${process.env.PORT}`);
    connectToMongo();
})