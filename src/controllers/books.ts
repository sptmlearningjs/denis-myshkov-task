import { Book } from '../entities/books'
const { v4:uuidv4 } = require('uuid')

const getBooks = (req, reply) => {
  Book.find().then((data) => {
    reply
    .code(200)
    .header('Content-Type', 'application/json; charset=utf-8')
    .send(data)
  });
}

const postBook = (req, reply) =>{
  const name = req.body.name
  const description = req.body.description
  const year = req.body.year
  const author = req.body.author
  const book = {
    id: uuidv4(),
    name,
    description,
    year,
    author
  }
  Book.insert(book)

  reply.code(201).send(book)
} 


module.exports = { getBooks, postBook }