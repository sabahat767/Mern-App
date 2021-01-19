const express = require('express')
const Post = require('../../models/posts')
const router = express.Router()

router.get('/', async (req, res) => {
    // get posts from posts
    const posts = await Post.find();
    res.json({
        success: true,
        status: 200, //ok
        data: posts
    })

})
router.post('/add', async (req, res) => {
    console.log(".......", req.body)//req user k inputs hain 
    try {
        const post = await Post.create(req.body)
        res.json({
            success: true,
            status: 201,
            dbid: post._id
        })

    } catch (error) {
        res.json({
            success: false,
            status: 400,
            error
            
        })

    }


})
router.get('/:id', async (req, res) => {
    //get single post
    const post = await Post.findById(req.params.id);
    res.json({
        success: true,
        status: 200, //ok
        data: post
    })

})
router.put('/:id', (req, res) => {
    console.log('update')

})
router.delete('/:id', async (req, res) => {
    // console.log("CALLED")
    try {
        const post = await Post.findByIdAndDelete(req.params.id);
   res.json({
       success: true,
       status: 200, //ok
       msg: 'post is deleted successfully'
   })
  
   } catch (error) {
       console.log(error)
   }
})
module.exports = router
//req=> wo jo client sid s input ata
//res=> wo jo developer/server side s response dia jata client ki req ka