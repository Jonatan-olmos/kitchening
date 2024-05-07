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
    searchAdmin : (req,res) =>{
       const {keyword } = req.query

       const result = products.filter((product) => {
        return product.name.toLowerCase().includes(keyword.toLowerCase()) 
        || product.address.toLowerCase().includes(keyword.toLowerCase())
        || product.category.toLowerCase().includes(keyword.toLowerCase())

       });

       return res.render('users/dasboard',{
            products : result,
            keyword 
        })
    },


}