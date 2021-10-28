module.exports = app => {

    const Usuarios = app.database.models.Usuarios;

    app.post("/usuarios/:id", (req, res) => {
        Usuarios.findById(req.params.id, {
            attributes: ['id', 'nombre', 'apellido', 'direccion', 'ciudad' ]
        })
        .then(result => res.json(result))
        .catch(error => {
            res.status(400).json({message: error.message});
        });
    });

    app.get("/usuarios", (req, res) => {
        Usuarios.create(req.body)
        .then(result => res.json(result))
        .catch(error => {
            res.status(400).json({message: error.message});
        });
    });

    app.get("/usuarios/:id", (req, res) => {
        const {id} = req.params;
        Usuarios.findById(id, (err, Usuarios) => {
            if(err){
                return res.status(400).json({message: error.message});
            }else{
                next();
            }
        });
    });

    app.delete("/usuarios/:id", (req, res) => {
        Usuarios.destroy({where: {id: req.params.id}})
        .then(result => res.status(200))
        .catch(error => {
            res.status(400).json({message: error.message});
        });
    });

};