import fastify from 'fastify'
import { createConnection } from 'typeorm'
import { Book } from './entities/books'

const server = fastify({logger: true})
server.register(require("./routs/books"))


createConnection({ 
  type: "mongodb",
  host: "localhost",
  port: 27017,
  database: "Books",
  // username: "root",
  // password: "password",
  logging: true,
  synchronize: true,
  entities: [Book]
});



server.listen({ port: 8080 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Started server at ${address}`);
});