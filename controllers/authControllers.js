const jwt = require('jsonwebtoken');
const login_fun = require('../public/login')


//create token

const maxAge = 3*25*60*60; //3 days
const createToken = (id) => {
  return jwt.sign({ id }, 'authorizedBeakonToken', {
  expiresIn: maxAge
  });
}
// handle errors
const handleErrors = (err) => {
  console.log(err.message, err.code);
  let errors = { email: '', password: '' };

  //incorrect email
  if (err.message === 'incorrect email'){
    errors.email = 'that email is not registered'
  }

    //incorrect password
    if (err.message === 'incorrect password'){
      errors.password = 'the password is incorrect'
    }

  // duplicate email error
  if (err.code === 11000) {
    errors.email = 'that email is already registered';
    return errors;
  }

  // validation errors
  if (err.message.includes('user validation failed')) {
    // console.log(err);
    Object.values(err.errors).forEach(({ properties }) => {
      // console.log(val);
      // console.log(properties);
      errors[properties.path] = properties.message;
    });
  }

  return errors;
}

module.exports.login_get = (req, res) => {
  res.render("login");
};

module.exports.login_post = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await login_fun(email, password);
    const token = createToken(user._id);
    res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    res.status(200).json({ user: user._id });
  } catch (err) {
    const errors = handleErrors(err);
    res.status(400).json({ errors });
  }
};

module.exports.logout_get = (req,res) =>{
  res.cookie('jwt', '', {maxAge: 1})
  res.redirect('/')
}
