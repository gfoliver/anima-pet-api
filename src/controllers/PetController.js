const { v4: uuidv4 } = require('uuid');

let pets = [
    {id: uuidv4(), name: "Exemplo", adopted: false}
];

module.exports = {
    async create(req, res) {
        const { name } = req.body;

        const pet = {
            id: uuidv4(),
            name,
            adopted: false
        }

        pets.push(pet)

        res.json({
            status: true,
            data: pet
        })
    },

    async all(req, res) {
        res.json({
            status: true,
            data: pets
        })
    },

    async adopt(req, res) {
        const { id } = req.body;

        let pet = null;

        if (pets.find(p => p.id == id)){
            pet = pets.find(p => p.id == id);
            pet.adopted = true;
        }

        return res.json({
            status: !!pet,
            data: pet
        });
    }
}