const bcrypt = require('bcrypt');

module.exports = (router, queries) => {
  //Create a new user

  router.post('/signup', (req, res)=>{
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, 10);
    queries.addUser(user)
      .then(user=> {
        if(!user) {
          res.send({error: "error"})
          return;
        }
        req.session.userId = user.id;
        res.send(":)")
      })
      .catch(e => res.send(e));
  })

}