const Sequelize = require('sequelize');
const path = require('path');
const fs = require('fs');

let database = null;

module.exports = app => {
    if(!database){
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.id,
            config.nombre,
            config.apellido,
            config.direccion,
            config.ciudad,
            config.longitud,
            config.latitud,
            config.estadogeo,
            config.params
        );
        database = {
            sequelize,
            Sequelize,
            models: {}
        };
        const dir = path.join(__dirname, 'models');
        fs.readdirSync(dir).forEach(filename => {
            const modelDir = path.join(dir, filename);
            const model = sequelize.import(modelDir);
            database.models[model.name] = model;
        });

        Object.keys(database.models).forEach(key => {
            database.models[key].associate(database.models);
        });
    }

    return database;
}