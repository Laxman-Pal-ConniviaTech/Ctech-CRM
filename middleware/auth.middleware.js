exports.isLogin = (req, res , next)=>{
    if(!req.session.cust){
      return  res.redirect("/")
    }
    console.log("Middle");
    next()

}