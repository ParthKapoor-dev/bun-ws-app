// import { ServerWebSocket } from "bun";
const server = Bun.serve({
    fetch(request , server) {
        if(server.upgrade(request)){
            return;
        }

        return new Response('Working Nice');
    },
    websocket : {
        open(ws) {
            console.log("Connection Opened");
        },
        close(ws){
            console.log('connection closed');
        },
        message( ws , message){
            console.log(`incoming message : ${message}`);
        }
    }
});

console.log(`Listening on port ${server.port}`);