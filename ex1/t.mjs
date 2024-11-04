import { Sequelize } from "sequelize";

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

const User = sequelize.define({
    nome: {
        type: Sequelize.TEXT
    }
})