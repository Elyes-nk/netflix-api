const { gql } = require('apollo-server-express');

module.exports = gql`
    type Movie{
        title:String
        desc:String
        img:String
        imgTitle:String
        trailer:String
        video:String
        year:String
        limit:Number
        genre:String
        isSeries:Boolean
    }
    type Query{
        getMovies:[Movie]
        getMovie(id:ID!):Movie
    }
    type Mutation{
        createMovie(
            title:String, 
            desc:String, 
            img:String, 
            imgTitle:String, 
            imgSm:String, 
            trailer:Int,
            video:String,
            year:String,
            limit:String,
            genre:Array,
            isSeries:String
            ):Movie
        updateMovie(
            id:ID!,
            title:String, 
            desc:String, 
            img:String, 
            imgTitle:String, 
            imgSm:String, 
            trailer:Int,
            video:String,
            year:String,
            limit:String,
            genre:[ID],
            isSeries:String          
            ):Movie!
        deleteMovie(id:ID!):String
    }
`