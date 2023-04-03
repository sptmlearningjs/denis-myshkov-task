import { BooksController } from "../controllers/books";

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
      },
      404: {
        type: "object",
        properties: { error: { type: "string"} }
      }
    }
  },
  handler: BooksController.getBooks
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
        },
      404: {
        properties: { error: { type: "string"} }
      }
    }
  },
  handler: BooksController.addBook
  }

async function bookRoutes (fastify: any, options: any, done: any) {

  fastify.get('/', getBooksOpts);

  fastify.post('/', postBookOpts);

  done();
}

export { bookRoutes };
