const passport = require('passport');

function isAuthenticated(req, res, next) {
  passport.authenticate('local-login', (err, user, info) => {
    if (err) {
      return next(err);
    }
    if (!user) {
      return res.status(401).json({ message: 'No estás autenticado.' });
    }
    req.logIn(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      next();
    });
  })(req, res, next);
}

module.exports = isAuthenticated;
