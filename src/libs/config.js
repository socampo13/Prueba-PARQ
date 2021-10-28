module.exports = {
    database: 'usuarios',
    nombre: '',
    apellido: '',
    direccion: '',
    ciudad: '',
    longitud: '',
    latitud: '',
    estadogeo: '',
    params: {
        dialect: 'sqlite',
        storage: 'usuarios.sqlite',
        define: {
            underscored: true
        },
        operatorAliases: false
    }
};