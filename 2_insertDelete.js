const Sequelize = require('sequelize');

/*datos para la conexion con la base de datos previamente creada (base, user, pass)*/
const sequelize = new Sequelize('clase3', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});

/* establece la conexion */
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


class User extends Sequelize.Model { }
User.init({
    firstName: Sequelize.STRING,	
    lastName: Sequelize.STRING
}, { sequelize, modelName: 'users' }); 


/* crea usuario*/
sequelize.sync()
    .then(() => User.create({
        firstName: 'John',
        lastName: 'Matrix'
    }))
    .then(result => {
        console.log(result.toJSON());
    });


//elimina usuario con lastname Connor
User.destroy({
    where: {
        lastName: "Connor"
    }
}).then(() => {
    console.log("Elimine Registro");
});