function wakeDog(dogName, dogBreed) {
    // console.log(`Wake ${dogName} the ${dogBreed}`);
    return `Wake ${dogName} the ${dogBreed}`
}


function leashDog(dogName, dogBreed) {

    return `Leash ${dogName} the ${dogBreed}`
}

function walkToPark(dogName, dogBreed) {

    return `Walk to the park with ${dogName} the ${dogBreed}`
}

function throwFrisbee(dogName, dogBreed) {

    return `Throw the frisbee for ${dogName} the ${dogBreed}`
}


function walkHome(dogName, dogBreed) {

    return `Walk home with ${dogName} the ${dogBreed}`
}

function unleashDog(dogName, dogBreed) {
    return `Unleash ${dogName} the ${dogBreed}`
}



let routine = [wakeDog, leashDog, walkToPark, walkToPark, throwFrisbee, walkHome, unleashDog]


function exerciseDog(dogName, dogBreed) {
    let result = []
    for (let fun of routine) {
        result.push(fun(dogName, dogBreed))
    }
    return result
}