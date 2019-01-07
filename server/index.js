const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cors
app.use(cors());

var mongoDB = 'mongodb://localhost:27017/library';
mongoose.connect(mongoDB);
mongoose.connection.once('open', () => {
    console.log('Connected to Database')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))



app.listen(4000, () => {
    console.log('app is listening');
})