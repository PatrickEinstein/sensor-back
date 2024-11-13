import { Server } from "socket.io";
let io = null; // Declare io as nullable
export const IO = (server) => {
    if (!io) {
        io = new Server(server, {
            cors: {
                origin: "*",
                methods: ["GET", "POST", "PUT"],
            },
        });
        // SOCKET CONNECTION
        io.on("connection", (socket) => {
            socket.on("join_room", (room) => {
                socket.join(room);
                console.log(`User ${socket.id} joined room ${room}...`);
            });
            socket.on("disconnect", () => {
                console.log(`User ${socket.id} disconnected`);
            });
        });
        console.log("Socket.io server initialized"); // Debug log
    }
    return io;
};
