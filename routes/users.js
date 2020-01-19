var express = require('express');
var router = express.Router();

/**
 * GET user Information.
 * */
router.get('/', function(req, res, next) {
    console.log('users');
    let i = 0;
    let cl = setInterval(() => {
        console.groupBy('users', i);
        i++;
        if( i == 5) {
            clearInterval(cl);
        }
    }, 500);

  res.json(
      {
          photo: 'https://i.ibb.co/nPzNsc5/a.png',
          fullName: 'Adrian Pedro Zelada Torrez',
          team: 'Research',
          birthdate: '1989/03/16'
      }
  )
});

router.get('/end', function(req, res, next) {
    console.groupByEnd('users', 'fin');
    res.json({
        ok: 'end'
    })
})

router.get('/error', function(req, res, next) {
    const a =0 ;
    const b = a + d;
    res.json({
        ok: 'end'
    })
})


module.exports = router;
