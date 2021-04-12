const protoLoader = require('@grpc/proto-loader')
const grpc = require('grpc')

const PROTO_PATH = `${__dirname}/../microservice/proto/notes.proto`
const urlMicroserviceGrpc = process.env.NODEJS_SERVICEMESH_MICROSERVICE_GRPC;

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true
})

const pkg = grpc.loadPackageDefinition(packageDefinition)
const { NoteService } = pkg

const client = {
  noteService: new NoteService(urlMicroserviceGrpc, grpc.credentials.createInsecure())
}
    
module.exports = client