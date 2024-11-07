const { Sequelize, sequelize, DataTypes } = require('./server')

const Post = sequelize.define('posts', {
    title: {
        type: DataTypes.STRING
    },
    content: {
        type: DataTypes.TEXT
    }
    
})

//Post.sync({force: true})

module.exports = Post