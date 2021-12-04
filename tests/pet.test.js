const PetRepository = require('../src/repositories/PetRepository')

let petRepository;

beforeEach(() => {
    petRepository = new PetRepository();
});

test('Criar Pet', () => {
    const pet = petRepository.create('TESTE');
    expect(pet).toHaveProperty('id');
    expect(pet).toHaveProperty('name', 'TESTE');
});

test('Deletar Pet', () => {
    const pet = petRepository.create('TESTE');

    expect(petRepository.all()).toEqual(expect.arrayContaining([pet]));

    petRepository.delete(pet.id);

    expect(petRepository.all()).toEqual(expect.not.arrayContaining([pet]));
});

test('Adotar Pet', () => {
    let pet = petRepository.all()[0];

    expect(pet.adopted).toBe(false);

    petRepository.adopt(pet.id);

    pet = petRepository.all()[0];

    expect(pet.adopted).toBe(true);
});