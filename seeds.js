
const Celebrity = require('./models/Celebrity')

const mongoose = require('mongoose')
// mongoose.connect('mongodb://localhost/library')
mongoose.connect('mongodb://localhost/boilerplate')




const celebrityData = [
    {

        name: 'Lady Gaga',
        occupation: 'Singer',
        catchPhrase: 'You have to be unique, and different, and shine in your own way.'

    },


    {
        name: 'Ye' ,
        occupation: 'Rapper',
        catchPhrase: 'I feel like I am too busy writing history to read it.'

    },



    {

        name: 'Michelle Obama' ,
        occupation: 'Author',
        catchPhrase: 'At fifty-four, I am still in progress, and I hope that I always will be.'

    }

]

Celebrity.insertMany(celebrityData)
	.then(celebrityData => {
		console.log(`Success - added ${celebrityData.length} to the db`)
		mongoose.connection.close()
	})
	.catch(err => {
		console.log(err)
	})
