var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.json({'string': 'Hey now'});
});

router.post('/', function(req, res, next) {
    res.json({'body': req.body});
});

module.exports = router;