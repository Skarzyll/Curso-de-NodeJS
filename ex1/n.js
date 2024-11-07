const Express = require('express')
const { engine } = require('express-handlebars')
const bodyParser = require('body-parser')

const app = Express()

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', function(req, res){
    res.render('form')
})

app.post('/form' , (req , res) => {
    console.log(`title: ${req.body.title}, content: ${req.body.content}`);
    Post.create({
        title: req.body.title,
        content: req.body.content
    })
    res.send('form recebido')
})

app.listen(9090, function(){
    console.log('server http://localhost:9090')
})