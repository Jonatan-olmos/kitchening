module.exports ={
    index :(req, res) =>{
        return res.render('index')
    },
    cart :(req, res) =>{
        return res.render('carrito')
    },
    contact :(req, res) =>{
        return res.render('contact')
    },
}