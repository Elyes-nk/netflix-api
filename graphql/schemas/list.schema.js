const { gql } = require('apollo-server-express');

module.exports = gql`
    type List{
        title: String
        type: String
        genre: String
        content: Array
    }
    extend type Query {
        getLists:List
        getList(id:ID):List
    }
    extend type Mutation{
        createList(
            title:String, 
            type:String, 
            genre:String, 
            content:Array, 
            ):List
        updateList(
            id:ID!,
            title:String, 
            type:String, 
            genre:String, 
            content:Array,           
            ):List!
        deleteList(id:ID!):String
    }
`