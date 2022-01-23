const express = require('express');
const app = express();
const cors=require('cors');
const apiRouter = require('../routes');

require("dotenv").config();

//===========================================WEBHOOKS MIDDELWARE========================================================
// app.use('/api/webhooks/stripe', express.raw({type: "*/*"}))
//======================================================================================================================
app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);


//==================================================couche graphQl=====================================================
const { ApolloServer, gql } = require('apollo-server-express');
const MovieSchema = require('../graphQl/schemas/movie.schema');
const ListSchema = require('../graphQl/schemas/list.schema');
const UserSchema = require('../graphQl/schemas/user.schema');

const MovieResolvers = require('../graphQl/resolvers/movie.resolver');
const ListResolvers = require('../graphQl/resolvers/list.resolver');
const UserResolvers = require('../graphQl/resolvers/user');

const graphQlServer = new ApolloServer({
  typeDefs: [MovieSchema,ListSchema,UserSchema],
  resolvers:[MovieResolvers,ListResolvers,UserResolvers]
});
graphQlServer.applyMiddleware({ app, path: '/graphql' })
//======================================================================================================================



//======================================================================================================================
exports.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("BACKEND is running 🔥 at port : "+process.env.PORT);
    });
}
//=======================================================================================================================