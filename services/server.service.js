const express = require('express');
const app = express();
const cors=require('cors');
const apiRouter = require('../routes');

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use('/api', apiRouter);


//======================couche graphQl=========================
// const { ApolloServer, gql } = require('apollo-server-express');
// const ProductSchema = require('../graphQl/schemas/product');
// const UserSchema = require('../graphQl/schemas/user');
// const OrderSchema = require('../graphQl/schemas/order');

// const productResolvers = require('../graphQl/resolvers/product');
// const userResolvers = require('../graphQl/resolvers/user');
// const orderResolvers = require('../graphQl/resolvers/order');

// const graphQlServer = new ApolloServer({
//   typeDefs: [ProductSchema,UserSchema,OrderSchema],
//   resolvers:[productResolvers,userResolvers,orderResolvers]
// });
// graphQlServer.applyMiddleware({ app, path: '/graphql' })
//==============================================================

//===================WEBHOOKS MIDDELWARE========================
// app.use(function (req, res, next) {
//     if (req.originalUrl === '/api/webhooks/stripe') {
//       next();
//     } else {
//       express.json()(req, res, next);
//     }
//   });
//==============================================================


exports.start = () => {   
    app.listen(process.env.PORT, (err)=>{
        if (err) {
            console.log(err);
        }
        console.log("BACKEND is running 🔥 at port : "+process.env.PORT);
    });
}