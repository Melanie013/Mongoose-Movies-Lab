const router = require("express").Router();
const Celebrity = require('../models/Celebrity')




router.get('/celebrities', (req, res, next) => {
	// get all the books from the db
	Celebrity.find()
		.then(celebsFromDB => {
			console.log(celebsFromDB)
			res.render('celebrities', { celebrities: celebsFromDB })
		})
		.catch(err => {
			next(err)
		})
})



router.get('/celebrities/new', (req, res) => res.render('celebrities/new.hbs'));





router.get('/celebrities/:id', (req, res, next) => {
	// console.log('books id')
	const id = req.params.id
	// console.log(id)
	Celebrity.findById(id)
		.then(celebFromDB => {
			console.log(celebFromDB)
			res.render('celebrities/show', { celebrity: celebFromDB })
		})
		.catch(err => {
			next(err)
		})
});


router.post('/celebrities/new', (req, res, next) => {
	// create the celeb in the db
	const {name, occupation, catchPhrase} = req.body
	console.log(req.body) 

 
	Celebrity.create({name, occupation, catchPhrase})
    .then((newCeleb) => {
	
	res.redirect('/celebrities')

	console.log(`New celeb created: ${newCeleb.name}.`)

	})

    .catch(error => next(error));
});

	






module.exports = router;
