// const pokemon = require('./data.js');

const game = {
    party: [],
    gyms: [
      { location: "Pewter City", completed: false, difficulty: 1 },
      { location: "Cerulean City", completed: false, difficulty: 2 },
      { location: "Vermilion City", completed: false, difficulty: 3 },
      { location: "Celadon City", completed: false, difficulty: 4 },
      { location: "Fuchsia City", completed: false, difficulty: 5 },
      { location: "Saffron City", completed: false, difficulty: 6 },
      { location: "Cinnabar Island", completed: false, difficulty: 7 },
      { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
    ],
  }
  

// ## Exercise 1 ##
// console.dir(pokemon, { maxArrayLength: null }) // Displays every item in the array. Commnented out to avoid clash.

// 1 *** Invokes built-in console.log()function. Array Indexing with Dot Notation .name method. ***
console.log('Exercise 1 Result','Using Array Indexing', pokemon[58].name); // [Log] Arcanine.
  // Not ideal due to zero-indexing and relying on arithmetic sequence. Pokemon 59 is actually not searched.
  // Accessing only the 59th element in the Pokemon array. Not Pokemon 59 as such.

// 2 *** Function Declaration ***
function findPokemon59() {
  const found = pokemon.find(p => p.number === 59);
  if (found) {
    console.log('Exercise 1 Result','Using Function Declaration',found.name);
  } else {
    console.log("Pokemon not found");
  }
}
  // Call the function
  findPokemon59(); // [Log] Arcanine.

// 3 *** Function Expression ***
const findPokemon_59 = function() { //_rename to avoid clash with earlier example.
  const found = pokemon.find(p => p.number === 59);
  if (found) {
    console.log('Exercise 1 Result','Using Function Expression',found.name);
  } else {
    console.log("Pokemon not found");
  }
};
  // Call the function
  findPokemon_59(); // [Log] Arcanine.

// 4 *** Anonyomous Function Expression .forEach method ***
pokemon.forEach(function(pokemon){
  if(pokemon.number === 59) {
    console.log("Exercise 1 Result",'Using .forEach',pokemon.name) // [Log] Arcanine.
  }
})

// 5 *** Arrow Function ***
const findPokemon__59 = () => { //__rename to avoid clash with earlier example.
    const found = pokemon.find(p => p.number === 59);
    if (found) {
      console.log('Exercise 1 Result','Using Arrrow Function',found.name);
    } else {
      console.log("Pokemon not found");
    }
  };
  // Call the function
  findPokemon__59(); // [Log] Arcanine.

// 6 *** Arrow Function as a Callback using Array.prototype.find() ***
const match = pokemon.find(p => p.number === 59);
if (match){
 console.log('Exericse 1 Result','Using Arrow Function Callback',match.name); // [Log] Arcanine.
}

// ## Exercise 2 ##  

console.log('Exercise 2 Result', game) // console.log to display logged output in browser.
// [Log] {party: [], gyms: Array, items: [{name: "potion", quantity: 4}, {name: "pokeball", quantity: 8}, {name: "rare candy", quantity: 99}]} (app.js, line 33)


/* 
## Exercise 3## 
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?
Solve Exercise 3 here:
*/
  // Assigning a medium difficulty level to the game.
game.difficulty = "Med"; 
  // console.log to display logged output in browser.
console.log ('Exercise 3 Result',game.difficulty)


/*
## Exercise 4 ##
1. Select a starter Pokemon from the `pokemon` array. Remember, a starter Pokemon's `starter` property is true.
2. Add this Pokemon to the `game.party` array. Which array method will you use to add them?
Solve Exercise 4 here:
*/
  // Finding the starter Pokemon 'Pikachu' from the pokemon array.
const starterPokemon = pokemon.find(p => p.name === 'Pikachu' && p.starter === true);
  // Add Pikachu to the game.party array using push() method.
game.party.push(starterPokemon);
  // Checking log result. Using [0].name to display output in first/one line.
console.log('Exercise 4 Result',game.party[0].name)


/*
## Exercise 5 ## ## quanCheck ## Didn't state starter only or not??? 
1. Choose three more Pokemon from the `pokemon` array and add them to your party. 
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?
Solve Exercise 5 here:
*/

  // Finding the specific Pokemon from the array based on their name. Picked starter Pokemons.
const bulbasaur = pokemon.find(p => p.name === 'Bulbasaur');
const charmander = pokemon.find(p => p.name === 'Charmander');
const squirtle = pokemon.find(p => p.name === 'Squirtle');
  // Added these Pokemon to the game party using push(), which allows multiple elements.
game.party.push(bulbasaur, charmander, squirtle);
  // Using .map() method to transform the party array into an array containing only the names of each Pokemon. Excluding displaying all their attributes.
console.log('Exercise 5 Result', game.party.map(p => p.name))


/*
## Exercise 6 ##
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.
Solve Exercise 6 here:
*/
  // forEach() method iterates over each element in the array. Goes through every gym in the game.gyms.
  // condition check for each gym, the code checks difficulty < 3. If so sets gym.completed to true.
game.gyms.forEach(gym => {
  if (gym.difficulty < 3) {
    gym.completed = true;
  }
});

console.log ('Exercise 6 Result',game.gyms)


/*
## Exercise 7 ##
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?
Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu
More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 
Solve Exercise 7 here:
*/
  // Defining the evolutionary map. Current number -> evolved number.
  // The object evolutionMap holds the key-value pairs that directly maps a starter Pokemon number. to its evolved Pokemon number.
const evolutionMap = {
  1: 2, // Bulbasaur -> Ivysaur
  4: 5, // Charmander -> Charmeleon
  7: 8, // Squirtle -> Wartortle
  25: 26 // Pikachu -> Raichu
};
    // .forEach()loop iterates over each Pokemon in game.party. Current Pokemonn checked if number exists in evolutionMap.
game.party.forEach((starter, index) => {
    // Check if this Pokemon is in the evolution map.
  if (evolutionMap[starter.number]) {
    // Finding the evolved form in the pokemon array.
const evolveNumber = evolutionMap[starter.number];
    // .find() method using evolveNumber from evolutionMap, locates teh evolved Pokemon object in the Pokemon array.
const evolvePokemon = pokemon.find(p => p.number === evolveNumber);
    // Replacing the starter Pokemon with its evolved form using .splice().
  if (evolvePokemon) {
    game.party.splice(index, 1, evolvePokemon);
  }
  }
});
    // Verifying ouput.
console.log('Exercise 7 Result',game.party)


/*
## Exercise 8 ##  ## quanCheck ## Starter or Evolved Pokemon in party??? Next exercise implies this one is evolved Pokemon.
1. Print the name of each Pokémon in your party. 
2. Consider using a loop or an array method to access each Pokémon's name.
Solve Exercise 8 here:
*/
  // forEach() method loops over each element in the game.party array. For every Pokemon object in the array, it executes the provided callback function.
game.party.forEach(pokemon => {
  // .name to access and print name of the Pokemon. This prints & outputs over four lines.
  // console.log('Exericse 8 Result',pokemon.name);

  // OR using array.map() and array.join() concatenates names into single string with comma & space separating each name.
  let partyNames = game.party.map(pokemon => pokemon.name).join(', ');
  // Calling single console log, outputs partyNames only a single time. 
  console.log('Exercise 8 Result',partyNames)
})


/*
## Exercise 9 ##
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.
Solve Exercise 9 here:
*/
  // const starterPokemon = pokemon.filter(p => p.starter); // Clash with Exercise 4, Commented out to avoid SyntaxError: Cannot declare a const variable twice: 'starterPokemon'.
  // .fitler() - selects only starter Pokemon, 
  // .map() transforms each starter object into just its name, 
  // .join() combines names into one string with comma & space separating eacah name.
console.log('Exercise 9 Result',
  pokemon
    .filter(p => p.starter)
    .map(p => p.name)
    .join(', ')
);


/*
## Exercise 10 ##
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything
After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Solve Exercise 10 here:
*/
  // Added the catchPokemon method to the game object.
game.catchPokemon = function(pokemonObj) {
  // .push() method used push into game.party array.
  this.party.push(pokemonObj);
};
  // Chosen a Pokemon 'Eevee' from the pokemon data. 
const eevee = pokemon.find(p => p.name === 'Eevee');

  // Called the method to catch the chosen Pokemon.
game.catchPokemon(eevee); // ## quanCheck ## Why isn't 'eevee' not case sensitive?

  // Verifying that chosen Pokemon 'Eevee is now in the party.
  // Using console logging using array.map() and array.join()concatenates names into single string with comma & space separating each name.
console.log('Exercise 10 Result',game.party.map(pokemon => pokemon.name).join(', '))


/*
## Exercise 11 ##
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?
Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
Solve Exercise 11 here:
*/
game.catchPokemon = function(pokemonObj) {
    // Add given Pokemon to the party
  this.party.push(pokemonObj);
  
    // Find the pokeball item in game.items array
    // Using the array.find() method to get object with name 'pokeball'.
    // This will return the first object that matches the condition.
  const pokeballItem = this.items.find(item => item.name === 'pokeball');

    // If pokeball item exists, decrement its quantity by 1.
  if (pokeballItem) {
    pokeballItem.quantity -= 1;
  }
};
    // 
// const charmander = pokemon.find(p => p.name === 'Charmander'); Clash with Exercise 5, Commented out to avoid SyntaxError: Cannot declare a const variable twice

game.catchPokemon(charmander);

console.log('Exercise 11 Result',game.items); // Verifying that the quantity of pokeballs has been decremented by 1. 
    // [Log] [{name: "potion", quantity: 4}, {name: "pokeball", quantity: 7}, {name: "rare candy", quantity: 99}] (3) (app.js, line 225)
    /*  Original games.items array
     items: [
      { name: "potion", quantity: 4 },
      { name: "pokeball", quantity: 8 },
      { name: "rare candy", quantity: 99 },
       */

/*
## Exercise 12 ##
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 12 here:
*/
    // .forEach() method goes through every gym object in the game.gyms array.
game.gyms.forEach(gym => {
    // Conditional check for every gym. Check difficulty < 6.
  if (gym.difficulty < 6) {
    // Updated gym's completed property to true.
    gym.completed = true;
  }
});

console.log ('Exercise 12 Result',game.gyms)

/*
## Exercise 13 ##
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.
This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.
For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.
Solve Exercise 13 here:
*/

game.gymStatus = function() {
  // Create tally object with initial counts.
  const gymTally = {completed: 0, incomplete: 0};
  // Iterate through each gym in the array.
  this.gyms.forEach (gym => {
    // If gym is completed, increment the completed count.
    if (gym.completed) {
      gymTally.completed++;
    }
    else {
      // Otherwise increment incomplete count.
      gymTally.incomplete++;
    }
  });
  // Log the tally
  console.log('Exercise 13 Result', gymTally)
};
// Call the method to view the final tally.
game.gymStatus()


/*
## Exercise 14 ##
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.
This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.
Solve Exercise 14 here:
*/
  // partyCount method to game object.
game.partyCount = function (){
  // Return the number of Pokemon in the party. Length property.
  return this.party.length;
};
  // Call game.partyCount(), returning the number of Pokemon currently in the party.
console.log('Exercise 14 Result', 'Number of Pokeman in party:', game.partyCount())


/*
## Exercise 15 ## 
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).
Solve Exercise 15 here:
*/
    // Ineration approach, uses a loop .forEach(). Iterate through game.gyms array & completd those with a difficulty < 8.
game.gyms.forEach (gym => {
    // Conditional check.
  if (gym.difficulty < 8) {
    // Set completed to true.
    gym.completed = true;
  }
});

console.log('Exercise 15 Result','Updated gyms (difficulty < 8):', game.gyms)

/*
## Exercise 16 ##
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.
Solve Exercise 16 here:
*/

console.log('Exercise 16 Result','Full game object:', game)

// LEVEL UP //

/*
## Exercise 17## 
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?
Solve Exercise 17 here:
*/
  // .sort() method accepts a compare function tht determines the order of elements.
game.party.sort((a, b) => b.hp - a.hp)                                                  // ## quanCheck ##
console.log('Exercise 17 Result', 'Sorted party by HP:', game.party)

/*
## Exercise 18 ## 
Add a new property to the `game` object called `collection` and initialize its value to an empty array.
Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.
Again, for this exercise, it's okay to have a negative number of pokeballs.
After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.
Solve Exercise 18 here:
*/
game.collection = []                         

game.catchPokemon = function(pokemonObj) {
    // Find the pokeball item in game.items array
    // Using the array.find() method to get object with name 'pokeball'.
    // This will return the first object that matches the condition.
    const pokeballItem = this.items.find(item => item.name === 'pokeball');

    // If pokeball item exists, decrement its quantity by 1.
  if (pokeballItem) {
    pokeballItem.quantity -= 1;
  }

  if (this.party.length < 6) {
    this.party.push(pokemonObj);
    console.log('${pokemonObj.name} added to party.');
  } else {
    this.collection.push(pokemonObj);
    console.log('${pokemonObj.name} added to collection.');
  }
};

console.log('Exercise 18 Results', 'Updated items:', game.items);
console.log('Exercise 18 Results','Current party', game.party.map(p => p.name));
console.log('Exercise 18 Results','Current collection', game.collection.map(p => p.name));

/*
## Exercise 19 ## 
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 
Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.
Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.
Solve Exercise 19 here:
*/
game.catchPokemon = function(pokemonObj) {
  // Find the pokeball item in game.items array
  // Using the array.find() method to get object with name 'pokeball'.
  // This will return the first object that matches the condition.
  const pokeballItem = this.items.find(item => item.name === 'pokeball');

  // If pokeball item exists, decrement its quantity by 1.
if (!pokeballItem || pokeballItem.quantity <= 0) {
  console.log(`Not enough pokeballs to catch ${pokemonObj.name}`); // template literal interpolation only works with backticks (`).
  return; // Exit the function early.
}
    // If there is at least one pokeball, decrement the quantity by 1.
    pokeballItem.quantity -= 1;

    // check if party already has < 6 Pokemon.
if(this.party.length < 6) {
    // If yes, add the Pokemon to the party.
    this.party.push(pokemonObj);
    console.log(`${pokemonObj.name} added to party.`); //template literal interpolation only works with backticks (`).
} else {
    // If not, add the Pokemon to the collection.
    this.collection.push(pokemonObj);
    console.log(`${pokemonObj.name} add to collection.`); //template literal interpolation only works with backticks (`).
}
};
  // console.log with .map() showing Pokemon in game.party & game.collection
  console.log('Exercise 19 Result','Pokemon in Party:', game.party.map(p => p.name).join(", "));
  console.log('Exercise 19 Result','Pokemon in Collection:', game.collection.map(p => p.name).join(", "));

/*
## Exercise 20 ##
Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify is so that you can just pass in the name of a Pokemon instead of an entire object, and the method will look up the Pokemon from the data set for you.
The string passed in should be allowed to be any case (for example, if the string 'PiKacHU' is passed to the function, it should match to 'Pikachu' in the data set). 
If there is not a match, then return a string noting that the selected Pokemon does not exist. Ensure you do not decrement the pokeball count if an invalid Pokemon name is passed in, and also ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.
Solve Exercise 20 here:
*/

game.catchPokemon = function(pokemonName){
  // Normalize the input name to lowercase
  const normalizedInput = pokemonName.toLowerCase();

  // Look up the Pokemon object from the dataset (assumed global `pokemon` array)
  const pokemonObj = pokemon.find(p => p.name.toLowerCase() === normalizedInput);

   // If no matching Pokemon is found, return an error message.
  if (!pokemonObj) {
    const message = `The selected Pokemon "${pokemonName}" does not exist.`;
    console.log(message);
    return message;
  }

  // Locate the pokeball item
  const pokeballItem = this.items.find(item => item.name === 'pokeball');
  
  // Check that we have at least one pokeball
  if (!pokeballItem || pokeballItem.quantity <= 0) {
    console.log(`Not enough pokeballs to catch ${pokemonObj.name}`);
    return;
  }
  
  // Decrement the pokeball quantity
  pokeballItem.quantity -= 1;
  
  // Add the Pokemon to the party if there is room (max 6)
  if (this.party.length < 6) {
    this.party.push(pokemonObj);
    console.log(`${pokemonObj.name} added to party.`);
  } else {
    // Otherwise, add to the collection.
    this.collection.push(pokemonObj);
    console.log('Exercise 20 Result',`${pokemonObj.name} added to collection.`);
  }
};
    // Calling the function to test it:
    game.catchPokemon('PiKacHU');

    // console.log with .map() showing Pokemon in game.party & game.collection
    console.log('Exercise 20 Result','Pokemon in Party:', game.party.map(p => p.name).join(", "));
    console.log('Exercise 20 Result','Pokemon in Collection:', game.collection.map(p => p.name).join(", "));


/*
## Exercise 21 ## 
Dynamically construct an object with the existing `pokemon` data sorted by the different pokemon types. The object will have this structure:
{
  grass: [
    { number: 1, name: 'Bulbasaur', type: 'grass', hp: 45, starter: true },
    { number: 2, name: 'Ivysaur', type: 'grass', hp: 60, starter: false },
    { number: 3, name: 'Venusaur', type: 'grass', hp: 80, starter: false },
    * more grass type Pokemon objects...
  ],
  fire: [
    { number: 4, name: 'Charmander', type: 'fire', hp: 39, starter: true },
    * more fire type Pokemon objects...
  ],
  water: [
    * water type Pokemon objects...
  ],
  * etc... until there is an array for every Pokemon type!
}
Log the object when it's constructed.
Solve Exercise 21 here:
*/
const pokemonByType = pokemon.reduce((acc, curr) => {
  // Get the type and convert it to lowercase for consistency.
  const type = curr.type.toLowerCase();
  
  // If the key for this type doesn't exist yet, initialize it with an empty array.
  if (!acc[type]) {
    acc[type] = [];
  }
  
  // Add the current Pokemon to its respective type array.
  acc[type].push(curr);
  
  return acc;
}, {});

// Log the constructed object to the console.
console.log('Exercise 21 Result', 'Pokemon grouped by type:', pokemonByType);




