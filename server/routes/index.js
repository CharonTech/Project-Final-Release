const router = require("express").Router();
const indexController = require('../controllers/index');




/* GET request for Home Page */
router.get("/", indexController.displayHomePage);

/* GET contact us page. */
router.get('/contact', function(req, res, next) {
    res.render('contact', { title: 'Contact us'});
  });

/* GET request for Register Page */
router.get("/register", indexController.displayRegisterPage);

/* POST request for Register Page */
router.post('/register', indexController.processRegisterPage);

/* GET request for Login Page */
router.get("/login", indexController.displayLoginPage);

/* POST request for Login Page */
router.post('/login', indexController.processLoginPage);

/* Perform logout */
router.get('/logout', indexController.PerformLogout);

module.exports = router;
