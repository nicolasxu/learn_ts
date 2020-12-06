interface Pet {}

interface Fish extends Pet {
    swim: () => void,
    eat: () => void
}
interface Bird extends Pet {
    fly: () => void,
    eat: () => void
}

function getSmallPet(pet?: Pet): Pet {
    return pet
}

function move(pet: Fish | Bird) {
    if ("swim" in pet) {  // in operator here
      return pet.swim();
    }
    return pet.fly();
  }

