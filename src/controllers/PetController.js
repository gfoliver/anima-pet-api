class PetController {
    constructor(petRepository) {
        this.petRepository = petRepository;
    }

    async create(req, res) {
        const { name } = req.body;

        const pet = this.petRepository.create(name);

        res.json({
            status: true,
            data: pet
        })
    }

    async all(req, res) {
        const pets = this.petRepository.all();

        res.json({
            status: true,
            data: pets
        })
    }

    async adopt(req, res) {
        const { id } = req.body;

        const pet = this.petRepository.adopt(id);

        return res.json({
            status: !!pet,
            data: pet
        });
    }

    async delete(req, res) {
        const { id } = req.params;

        const deleted = this.petRepository.delete(id);

        return res.json({
            status: deleted
        });
    }
}

module.exports = PetController;