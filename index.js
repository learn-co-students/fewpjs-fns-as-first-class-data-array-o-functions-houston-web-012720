function wakeDog(name, breed) {
  var string = `Wake ${name} the ${breed}`;
  console.log(string);
  return string;
}

function leashDog(name, breed) {
  var string = `Leash ${name} the ${breed}`;
  console.log(string);
  return string;
}

function walkToPark(name, breed) {
  var string = `Walk to the park with ${name} the ${breed}`;
  console.log(string);
  return string;
}

function throwFrisbee(name, breed) {
  var string = `Throw the frisbee for ${name} the ${breed}`;
  console.log(string);
  return string;
}

function walkHome(name, breed) {
  var string = `Walk home with ${name} the ${breed}`;
  console.log(string);
  return string;
}

function unleashDog(name, breed) {
  var string = `Unleash ${name} the ${breed}`;
  console.log(string);
  return string;
}

var routine = [
  wakeDog,
  leashDog,
  walkToPark,
  throwFrisbee,
  walkHome,
  unleashDog
];

function exerciseDog(dogName, dogBreed) {
  var messages = []
  for (const i in routine) {
    messages.push(routine[i](dogName, dogBreed));
  };
  return messages;
};
