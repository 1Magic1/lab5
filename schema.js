import { GraphQLObjectType, GraphQLSchema, GraphQLList, GraphQLInt } from 'graphql/type';

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        sum: {
            type: GraphQLInt,
            args: {
                numbers: { type: new GraphQLList(GraphQLInt) }
            },
            resolve(parentValue, args) {
                // Обчислюємо суму елементів масиву
                return args.numbers.reduce((acc, num) => acc + num, 0);
            }
        }
    }
});

export const schema = new GraphQLSchema({
    query: RootQuery
});
