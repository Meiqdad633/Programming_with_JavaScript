// Task 1
var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']
function logDairy(){
    for(prop of dairy){
        console.log(prop)
    }
}
logDairy();


// Task 2

const animal = {

    canJump: true
    
};
    
const bird = Object.create(animal);
    
bird.canFly = true;
    
bird.hasFeathers = true;
    
    
function birdCan(){
        for(prop of Object.entries(bird)){
        console.log(`${prop[0]}: ${prop[1]}`)
    }

}
birdCan();



// Task 3

function animalCan(){
    for (prop of Object.entries(bird)){
        console.log(`${prop[0]}: ${prop[1]}`)
    }
    for (prop of Object.entries(animal)){
        console.log(`${prop[0]}: ${prop[1]}`)
    }

}

animalCan();
