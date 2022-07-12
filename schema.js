

const { gql } = require('apollo-server');
const typeDefs = gql`
 type Query{
   personsForHome(types:[String!] search:String ):[Person!]
   personsForHomeAll:[Person!]! 
    generatePersons(num:Int):[Person!]!  
 }, 
  type Person {
  id: ID
  name: String
  type:String
  date:String ! 
}
`;

module.exports = typeDefs;
/*
export const TRACKS = gql`
  type Location {
  id: ID
  name: String
  language:String
  description: String !
}
`;*/