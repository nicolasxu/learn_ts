
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




let pet = getSmallPet();
let fishPet = pet as Fish; // treat pet as Fish
let birdPet = pet as Bird;

if (fishPet.swim) {
  fishPet.swim();
} else if (birdPet.fly) {
  birdPet.fly();
}
