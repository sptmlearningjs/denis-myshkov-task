import { DataSource } from "typeorm";
import {Book} from "../entities/books";

const AppDataSource = new DataSource({
    type: "mongodb",
    host: "localhost",
    port: 27017,
    database: "Books",
    // username: "root",
    // password: "password",
    logging: true,
    synchronize: true,
    entities: [Book],
    useUnifiedTopology: true,
});

AppDataSource.initialize();

export { AppDataSource };
