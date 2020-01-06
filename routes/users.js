var express = require('express');
var router = express.Router();

/**
 * GET user Information.
 * */
router.get('/', function(req, res, next) {
  res.json(
      {
          photo: 'https://i.ibb.co/nPzNsc5/a.png',
          fullName: 'Adrian Pedro Zelada Torrez',
          team: 'Research',
          birthdate: '1989/03/16'
      }
  )
});

module.exports = router;
