const { Router } = require('Express');
const router = Router();
const helados = require("../samples.json");

const _ = require('underscore');

router.get('/', (req, res) => {
    res.json(helados);
});

router.post("/", (req, res) => {
    const { marca, tipo, sabor } = req.body;
    if (marca && tipo && sabor) {
        const id = helados.length + 1;
        const newHelados = {id,...req.body};
        helados.push(newHelados);
        res.json(helados);
        res.status(200).json({error: "Recieved Status 200."});
    } else {
        res.status(500).json({Error: "There was an error 500."});
    }
});

router.delete("/:id", (req, res) => {
    const {id} = req.params;
    _.each(helados, (helado, i) => {
        if (helado.id === id) {
            helados.splice(i, 1);
        }
    });
    res.send(helados);
});

router.put("/:id", (req, res) => {
    const {id} = req.params;
    const {marca, tipo, sabor} = req.body;
    if (marca && tipo && sabor){
        _.each(helados, (helado, i) => {
            if(helado.id === id) {
                helado.marca = marca;
                helado.tipo = tipo;
                helado.sabor = sabor;
            }
        });
        res.json(helados);
    } else {
        res.status(500).json({Error: "There was an error 500."});
    }
});



module.exports = router;