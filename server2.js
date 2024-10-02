import express from 'express';
import { schema } from './schema'; 
import { graphqlHTTP } from 'express-graphql';
import bodyParser from 'body-parser';

const app = express();

// Використання body-parser для обробки запитів
app.use(bodyParser.json());

// Використання GraphQL-сервісу
app.use('/graphql', graphqlHTTP({
    schema: schema,
    graphiql: true,
}));

const port = 4002;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}/graphql`);
});
