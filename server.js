

const { ApolloServer } = require('apollo-server');
const typeDefs = require('./schema');

const casual = require('casual');


const resolvers = {
  Query: {
    personsForHomeAll(parent, args, context, info) {
      return staticData
    },
    personsForHome(parent, args, context, info) {
      const { types, search } = args;
      console.log(types, search)
      let data = staticData;
      if (search) {
        data = data.filter((v) => v.name.toLowerCase().includes(search.toLowerCase()))
      }
      if (types) {
        data = data.filter((v) => types.includes(v.type))
      }
      console.log(data.length)
      return data
    },

    generatePersons(parent, args, context, info) {
      const { num } = args;
      let newA = new Array(num).fill({}).map((v, i) => {
        var newObj = {};
        newObj["id"] = i
        return newObj;
      });
      return [...newA]
    }
  }
}
const mocks = {
  Query: () => ({
    personsForHome: () => [...new Array(20)],
    personsForHomeAll: () => [...new Array(20)],
    generatePersons: () => [...new Array(1)],

  }),
  Person: () => ({
    id: casual.id,
    name: casual.name,
    type: casual.random_element(['Java', 'Kotlin', 'C++', "JavaScript"]),
    date: casual.random_element(['12/June/1996', '21/March/2015',
      '12/May/1996', "12/June/1960"])
  }),

};

const server = new ApolloServer({
  typeDefs,
  resolvers,
  //csrfPrevention: true,
  //cache: "bounded",
  mocks  //: true
  , mockEntireSchema: false

});
server.listen().then(() => {
  console.log(`
    🚀  Server is running!
    🔉  Listening on port 4000
    📭  Query at https://studio.apollographql.com/dev
  `);
});

/*
server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`
    🚀  Server is ready at ${url}
    📭  Query at https://studio.apollographql.com/dev
  `);
});
*/

const staticData = [
  {
    "id": "00",
    "name": "Miss Joaquin Ledner",
    "type": "Java",
    "date": "12/May/1996"
  },
  {
    "id": "01",
    "name": "Mrs. Shanie Hudson",
    "type": "Kotlin",
    "date": "12/May/1996"
  },
  {
    "id": "02",
    "name": "Dr. Wilhelm Lebsack",
    "type": "Java",
    "date": "12/May/1996"
  },
  {
    "id": "03",
    "name": "Mr. Stuart Schuster",
    "type": "JavaScript",
    "date": "12/May/1996"
  },
  {
    "id": "04",
    "name": "Ms. Mazie Waelchi",
    "type": "Kotlin",
    "date": "12/June/1960"
  },
  {
    "id": "05",
    "name": "Miss Laurence Jones",
    "type": "C++",
    "date": "12/June/1996"
  },
  {
    "id": "06",
    "name": "Ms. Mavis Rosenbaum",
    "type": "C++",
    "date": "21/March/2015"
  },
  {
    "id": "07",
    "name": "Ms. Rylan Hagenes",
    "type": "JavaScript",
    "date": "12/June/1960"
  },
  {
    "id": "08",
    "name": "Miss Patricia Larson",
    "type": "Java",
    "date": "12/June/1996"
  },
  {
    "id": "09",
    "name": "Miss Kayden Russel",
    "type": "C++",
    "date": "12/June/1996"
  },
  {
    "id": "10",
    "name": "Dr. Marjory Hand",
    "type": "Kotlin",
    "date": "12/June/1960"
  },
  {
    "id": "11",
    "name": "Miss Gregory Dietrich",
    "type": "C++",
    "date": "12/June/1996"
  },
  {
    "id": "12",
    "name": "Dr. Devante Murazik",
    "type": "Java",
    "date": "12/May/1996"
  },
  {
    "id": "13",
    "name": "Mrs. Consuelo King",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "14",
    "name": "Ms. Leonardo Beer",
    "type": "Kotlin",
    "date": "12/May/1996"
  },
  {
    "id": "15",
    "name": "Mrs. Margaret Smitham",
    "type": "C++",
    "date": "12/June/1996"
  },
  {
    "id": "16",
    "name": "Ms. Cecelia Ratke",
    "type": "Java",
    "date": "12/June/1996"
  },
  {
    "id": "17",
    "name": "Mrs. Dan Mraz",
    "type": "JavaScript",
    "date": "12/May/1996"
  },
  {
    "id": "18",
    "name": "Mr. Morgan Runolfsdottir",
    "type": "Kotlin",
    "date": "12/June/1960"
  },
  {
    "id": "19",
    "name": "Mrs. Favian Blick",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "20",
    "name": "Miss Tobin Schamberger",
    "type": "Kotlin",
    "date": "12/May/1996"
  },
  {
    "id": "21",
    "name": "Ms. Dedrick Morissette",
    "type": "JavaScript",
    "date": "12/May/1996"
  },
  {
    "id": "22",
    "name": "Miss Hettie Hand",
    "type": "Kotlin",
    "date": "21/March/2015"
  },
  {
    "id": "23",
    "name": "Ms. Maverick Wisoky",
    "type": "JavaScript",
    "date": "21/March/2015"
  },
  {
    "id": "24",
    "name": "Ms. Dillon Oberbrunner",
    "type": "C++",
    "date": "21/March/2015"
  },
  {
    "id": "25",
    "name": "Ms. Beryl Spinka",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "26",
    "name": "Mrs. Willard Bayer",
    "type": "Kotlin",
    "date": "12/June/1960"
  },
  {
    "id": "27",
    "name": "Mr. Mitchell Goyette",
    "type": "C++",
    "date": "21/March/2015"
  },
  {
    "id": "28",
    "name": "Miss Gabriella Davis",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "29",
    "name": "Mr. Garett Bosco",
    "type": "Kotlin",
    "date": "12/June/1960"
  },
  {
    "id": "30",
    "name": "Ms. Antonio Johnson",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "31",
    "name": "Miss Gust Grady",
    "type": "JavaScript",
    "date": "12/June/1996"
  },
  {
    "id": "32",
    "name": "Miss Zoey Schowalter",
    "type": "C++",
    "date": "21/March/2015"
  },
  {
    "id": "33",
    "name": "Mrs. Dion Wiegand",
    "type": "Kotlin",
    "date": "21/March/2015"
  },
  {
    "id": "34",
    "name": "Ms. Lavonne Turcotte",
    "type": "C++",
    "date": "21/March/2015"
  },
  {
    "id": "35",
    "name": "Mr. Winona Schmitt",
    "type": "Kotlin",
    "date": "12/May/1996"
  },
  {
    "id": "36",
    "name": "Miss Bertha Leuschke",
    "type": "JavaScript",
    "date": "21/March/2015"
  },
  {
    "id": "37",
    "name": "Miss Brendan Vandervort",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "38",
    "name": "Ms. Dwight Fahey",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "39",
    "name": "Ms. Catherine Nienow",
    "type": "Java",
    "date": "12/June/1996"
  },
  {
    "id": "40",
    "name": "Ms. Baron Dibbert",
    "type": "Kotlin",
    "date": "12/June/1960"
  },
  {
    "id": "41",
    "name": "Dr. Forest Lesch",
    "type": "Java",
    "date": "12/May/1996"
  },
  {
    "id": "42",
    "name": "Miss Frederick Smith",
    "type": "JavaScript",
    "date": "21/March/2015"
  },
  {
    "id": "43",
    "name": "Mrs. Annetta Zemlak",
    "type": "C++",
    "date": "12/May/1996"
  },
  {
    "id": "44",
    "name": "Mr. Bethany Johns",
    "type": "Kotlin",
    "date": "21/March/2015"
  },
  {
    "id": "45",
    "name": "Miss Gino Collier",
    "type": "Java",
    "date": "12/June/1960"
  },
  {
    "id": "46",
    "name": "Ms. Kole Windler",
    "type": "JavaScript",
    "date": "12/May/1996"
  },
  {
    "id": "47",
    "name": "Mrs. Rudy Will",
    "type": "JavaScript",
    "date": "12/June/1996"
  },
  {
    "id": "48",
    "name": "Mr. Astrid Beatty",
    "type": "Kotlin",
    "date": "21/March/2015"
  },
  {
    "id": "49000000000000000000000000000000",
    "name": "Ms. Bert Borer",
    "type": "C++",
    "date": "12/May/1996"
  }
]