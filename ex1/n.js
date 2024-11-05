const Express = require('express')
const { engine } = require('express-handlebars')
const Sequelize = require('sequelize')

const app = Express()

app.engine('handlebars', engine({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

const sequelize = new Sequelize('seqtest', 'root', '26340521', {
    host: 'localhost',
    dialect: 'mysql'
})

app.get('/cad', function(req, res){
    res.render('form')
})

app.listen(9090, function(){
    console.log('server http://localhost:9090')
})