import express from 'express';
import http from 'http';
import cors from 'cors';
import path from 'path';
import { Server } from 'socket.io';
import bodyParser from 'body-parser';

const app = express();
const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    }
});

const PORT = 9000;

// Middleware
app.use(cors({ origin: '*' }));
app.use(bodyParser.json());
app.use(express.static('dist'));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.delete('/deleteCredentials/:id', (req, res) => {
    const itemId = parseInt(req.params.id, 10); 
    // ... rest of the logic
    res.json({ message: `Item with ID: ${itemId} has been deleted.` });
});

// Socket.io events
io.on('connection', (socket) => {
    console.log('A user connected', socket.id);
    socket.emit('yourId', socket.id);

    socket.on('clientMessage', (message, callback) => {
        console.log('Message from client:', message);

        // Handle the message...
        if (typeof callback === 'function') {
            callback({ success: true });
        }

        // Broadcast the message to all other clients
        socket.broadcast.emit('newMessage', message);
    });

    socket.on('joinGame', () => {
        console.log('Button clicked, joining game room');
        
        const roomId = 'someUniqueRoomId';
        socket.join(roomId);
        
        io.to(roomId).emit('joinedRoom', roomId);
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
