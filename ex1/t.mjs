import Sequelize from "sequelize";

const sequelize = new Sequelize('seqtest', 'root', '26340521', {
    host: 'localhost',
    dialect: 'mysql'
})

try {
    await sequelize.authenticate()
    console.log('conectado');
    
} catch (e) {
    await sequelize.close()
    console.log(e);
}

const Post = sequelize.define('posts', {
    title: {
        type: Sequelize.STRING
    },
    content: {
        type: Sequelize.TEXT
    }
    
})

//Post.sync({force: true})

/* Post.create({
    title: 'Meu aniversario',
    content: 'Parabens pra mim!'
}) */

const User = sequelize.define('users',{
    name: {
        type: Sequelize.TEXT
    },
    lastName: {
        type: Sequelize.TEXT
    },
    age: {
        type: Sequelize.INTEGER
    },
    email: {
        type: Sequelize.STRING
    }
})

//User.sync({force: true})

User.create({
    name: 'Caio',
    lastName: 'Domingos',
    age: 20,
    email: 'caiocc@gmail.com'
})