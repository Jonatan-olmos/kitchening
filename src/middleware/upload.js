const multer = require('multer')
const path = require('path') 
const storage = multer.diskStorage({
    destination : function (req,file,callback) {
        callback(null,'/public/images')
    
    },
    filename : (req,file,callback )=>{
        callback(null,`${date.now()}_products_${path.extname(file.originalname)}`)
    }

})
const upload = multer({
    storage
})

module.exports= upload