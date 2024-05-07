const {leerJSON} =require("../data")
const products = leerJSON('products')

module.exports ={
    index :(req, res) =>{
       
        //return res.send(products)
        return res.render('index',{
            products
        })
    },
    cart :(req, res) =>{
        return res.render('carrito')
    },
    contact :(req, res) =>{
        return res.render('contact')
    },
    admin:(req, res) =>{

        return res.render('users/dasboard',{
            products
        })
    },
   
}