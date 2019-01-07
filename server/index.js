const express = require('express');
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema');
const mongoose = require('mongoose');

const app = express();

var mongoDB = 'mongodb://localhost:27017/library';
mongoose.connect(mongoDB);
mongoose.connection.once('open', () => {
    console.log('Connected to Database')
})
app.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))



app.listen(3006, () => {
    console.log('app is listening');
})