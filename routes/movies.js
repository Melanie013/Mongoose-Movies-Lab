const router = require("express").Router();

const Celebrity = require("../models/Celebrity");
const Movie = require('../models/Movie')


router.get('/movies/new', (req, res) => res.render('movies/new.hbs'));

router.get('/movies/index', (req, res) => res.render('movies/index.hbs'));




router.post('/movies/new', (req, res, next) => {

	const {title, genre, plot} = req.body
	console.log(req.body) 

 
	Movie.create({title, genre, plot})
    .then((newMovie) => {
	
	res.redirect('/movies')

	console.log(`New movie created: ${newMovie.title}.`)

	})

    .catch(error => next(error));
});





router.get('/movies/:id', (req, res, next) => {

	const id = req.params.id

	Movie.findById(id)
		.then(movieFromDB => {
			console.log(movieFromDB)
			res.render('movies/new', { movie: movieFromDB })
		})
		.catch(err => {
			next(err)
		})
});


router.get('/movies', (req, res, next) => {

	Movie.find()
		.then(moviesFromDB => {
			console.log(moviesFromDB)
			res.render('movies/index', { movies: moviesFromDB })
		})
		.catch(err => {
			next(err)
		})
})


router.get('/movies/new.hbs',(req, res) => {
Celebrity.find()
		.then(celebritiesFromDB => {
			console.log(celebritiesFromDB)
			res.reder('movies/new.hbs', {cast: celebritiesFromDB})
		
		

		
		
		})
		.catch(err => {
			next(err)
		})

	})





module.exports = router;
