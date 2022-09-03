const Sequelize = require('sequelize');

/*datos para la coneccion con la base de datos previamente creada (base, user, pass)*/
const sequelize = new Sequelize('clase3', 'root', '', {
    host: 'localhost',
    dialect: 'mariadb'
});


/* establece la coneccion */
sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });


/*crea una clase que extiende de model, una clase de secualize que sirve para modelar la tabla*/
class User extends Sequelize.Model { }
User.init({
    firstName: Sequelize.STRING,
    lastName: Sequelize.STRING
}, { sequelize, modelName: 'users' }); 


/* crea usuario*/
sequelize.sync()
    .then(() => User.create({ 
        lastName: 'Connor'
    }))
    .then(result => {
        console.log(result.toJSON());
    });


// actualiza registro cambia el firstname donde el lastname es rodriguez
User.update({
    firstName: "John",
    lastName: "McClane"
}, {
    where: {
        lastName: 'Rodriguez'
    }
}).then(() => {
    console.log("Done");
});