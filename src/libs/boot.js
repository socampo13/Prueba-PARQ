module.exports = app => {
    app.database.sequelize.sync().done(() => {
        app.listen(app.get('port'), () => {
            console.log('Servidor corriendo en el puerto', app.get('port'));
        });
    });
};