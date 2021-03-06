module.exports = function (seneca) {

  const router = require('express').Router()
  const auth = require('../modules/auth')

  router.get('/', function (req, res) {
    res.render('register', {
      title: 'Register',
      isRegistering: true
    })
  })

  router.post('/', function (req, res, next) {

    seneca.act('role:user,cmd:add', {
      name: req.body.name,
      username: req.body.username,
      password: req.body.password,
      passwordMatch: req.body.passwordMatch,
      isAdm: req.body.isAdm != undefined && req.body.isAdm === 'on' ? true : false
    }, (err, user) => {

      if (err) {
        if (err.details.message == 'Password mismatch')
          res.render('register', {
            passwordMismatch: true
          })
        else
          res.render('error', err)
      }
      req.session.loggedUser = user
      res.redirect('/')
    })
  })

  return router
}
