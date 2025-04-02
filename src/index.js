import { app } from './app.js';

app.listen(8504, () => {
    console.log("Server is running on port 8504");
    console.log('WebSocket', 'WebSocket server is ready');
});
