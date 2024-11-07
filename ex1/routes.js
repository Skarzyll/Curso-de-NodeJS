const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const { engine } = require('express-handlebars')
const Post = require('./post')

//config
app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

//body parser
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

//rotas
app.get('/' , (req , res)=>{

    res.render('form')

})

app.get('/posts' , (req , res)=>{

    res.render('posts')

})

app.post('/resform' , (req , res)=>{
    Post.create({
        title: req.body.title,
        content: req.body.content
    })
    .then(res.redirect('posts'))
    .catch(er => console.log(er))

    console.log(req.body.title, req.body.content);
    
})

app.listen(9090, () => console.log('http://localhost:9090'))
