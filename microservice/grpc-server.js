const grpc = require('grpc');
const grcpPort = process.env.GRPC_PORT || 50051;
const host = process.env.HOSTNAME || 'localhost';
const notesProto = grpc.load(`${__dirname}/proto/notes.proto`)
const notes = require('./notes')

const server = new grpc.Server();
server.addService(notesProto.NoteService.service, {
  list: (_, callback) => {
    console.info(`microservice grpc, url => http://${host}:${grcpPort}/notes`);
    callback(null, notes)
  },
})
server.bind(`0.0.0.0:${grcpPort}`, grpc.ServerCredentials.createInsecure())
console.log(`Grpc Server running at ${host}:${grcpPort}`)
server.start()