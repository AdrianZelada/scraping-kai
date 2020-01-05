var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(
      {
          photo: 'https://i.ibb.co/nPzNsc5/a.png',
          fullName: 'Adrian Pedro Zelada Torrez',
          team: 'Research',
          birthDate: '1989/03/16'
      }
  )
});

module.exports = router;
