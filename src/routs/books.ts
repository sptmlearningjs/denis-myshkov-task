import { Book } from '../entities/books'
const { getBooks, postBook } = require('../controllers/books')

//Options for get all books
const getBooksOpts = {
  schema: {
    response: {
      200: {
        type: "array",
        items: {
          type: "object",
          properties: {
            id: {type: "string"},
            name: {type: "string"},
            description: {type: "string"},
            year: {type: "string"},
            author: {type: "string"},
          }
        }
      }
    }
  },
  handler: getBooks
}

const postBookOpts = {
  schema: {
    body: {
      type: 'object',
      required: ['name', 'description', 'year', 'author'],
      properties: {
        name: { type: 'string' },
        description: {type: "string"},
        year: {type: "string"},
        author: {type: "string"},
      },
    },
    response: {
      201: {
        type: "object",
        properties: {
          id: {type: "string"},
          name: {type: "string"},
          description: {type: "string"},
          year: {type: "string"},
          author: {type: "string"},
          }
        }
      }
    },
    handler: postBook
  }

function bookRoutes (fastify, options, done) {

  fastify.get('/', getBooksOpts);
  
  fastify.post('/', postBookOpts);

  done()
}

module.exports = bookRoutes