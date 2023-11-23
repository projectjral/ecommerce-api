import http from "http";
import app from "./app/app.js";



// Create the server
const PORT = process.env.PORT || 8000
const server = http.createServer(app)
const io = new WebSocket.Server({ noServer: true });
global.io = new WebSocket.Server({ noServer: true });
server.listen(PORT, console.log(`Server started on port: ${PORT}`))