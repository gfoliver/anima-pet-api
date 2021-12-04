const { v4: uuidv4 } = require('uuid');

class PetRepository {
    constructor() {
        this.pets = [
            {id: uuidv4(), name: "Exemplo", adopted: false}
        ];
    }

    create(name) {
        const pet = {
            id: uuidv4(),
            name,
            adopted: false
        }

        this.pets.push(pet);

        return pet;
    }

    all() {
        return this.pets;
    }

    adopt(id) {
        let pet = null;

        if (this.pets.find(p => p.id == id)){
            pet = this.pets.find(p => p.id == id);
            pet.adopted = true;
        }

        return pet;
    }

    delete(id) {
        const index = this.pets.findIndex(p => p.id == id);

        if (index != -1) {
            this.pets.splice(index, 1);
            return true;
        }
        
        return false;
    }
}

module.exports = PetRepository;