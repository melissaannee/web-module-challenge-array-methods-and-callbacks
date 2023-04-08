const { fifaData } = require('./fifa.js')

// ⚽️ M  V P ⚽️ //

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 1: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Practice accessing data by console.log-ing the following pieces of data note. 

💡 HINT: You may want to filter the data first 😉*/

//(a) Home Team name for 2014 world cup final

//(b) Away Team name for 2014 world cup final

//(c) Home Team goals for 2014 world cup final

//(d) Away Team goals for 2014 world cup final

//(e) Winner of 2014 world cup final */


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 2: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use getFinals to do the following:
1. Receive an array as a parameter that will take the fifa data as its argument
2. Return an array of objects with the data of the teams that made it to the final stage

💡 HINT - you should be looking at the stage key inside of the objects
*/

function getFinals(array) {
    let finalists = array.filter((element) => {
        if (element.Stage === "Final") {
            return element
        }
    });
    return finalists
 }

// console.log(getFinals(fifaData))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 3: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function called getYears to do the following: 
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Return an array called years containing all of the years in the getFinals data set*/

/**
 * 1. Create a variable that will hold an empty array but will later hold the Finals years.
 * 2. Create another variable to get access to the Finals data using a callback function.
 * 3. Iterate through the finals array.
 *      a. Pushing to the years array.
 * 4. Return years array.
 */

function getYears(array, callback) {
    let years = [];
    let finals = callback(array);
    for (let i = 0; i < finals.length; i++) {
        years.push(finals[i].Year)
    }
    return years
}

// console.log(getYears(fifaData, getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 4: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher-order function getWinners to do the following:  
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Determines the winner (home or away) of each `finals` game. 
💡 HINT: Don't worry about ties for now (Please see the README file for info on ties for a stretch goal.)
4. Returns the names of all winning countries in an array called `winners` */ 

/**
 * 1. Create a variable that holds the finals array by using the callback function getFinals.
 * 2. Create a variable that will hold an empty array but will later hold an array of the winning countries,
 * 3. Iterate through the finals array.
 * 4. Create an if/else statement to deterimine the winning countries.
 *      a. Pushing the winning countries to the winningCountries array.
 * 5. Return the winningCountries array. 
 */

function getWinners(array, callback) {
    let finals = callback(array);
    let winners = [];
    for (let i = 0; i < finals.length; i ++) {
        if (finals[i]["Home Team Goals"] > finals[i]["Away Team Goals"]) {
            winners.push(finals[i]["Home Team Name"]);
        } else {
            winners.push(finals[i]["Away Team Name"]);
        }    
    }
    return winners
}

// console.log(getWinners(fifaData, getFinals))


/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 5: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 
Use the higher-order function getWinnersByYear to do the following:
1. Receive an array as the first parameter that will take fifaData as an argument
2. Receive a callback function as the second parameter that will take getFinals from task 2 as an argument
3. Receive a callback function as the third parameter that will take getYears from task 3 as an argument
4. Receive a callback function as the fourth parameter that will take getWinners from task 4 as an argument
5. Return an array of strings that say "In {year}, {country} won the world cup!" 

💡 HINT: the strings returned need to exactly match the string in step 4.
 */

/**
 * 1. Create a variable (countryWins) that will hold an empty array but will later hold an array of strings that will read "In {year}, {country} won the world cup!".
 * 2. Create a variable (finals) that holds the finals array by using a callback function (getFinals).
 * 3. Create a variable (years) that holds the years array by using the callback function (getYears). 
 * 4. Create a variable (winners) that holds the winners array by using the callback function (getWinners).
 * 5. Create a for loop that will iterate through the finals array.
 *      a. Create a variable that will hold the string "In {year}, {country} won the world cup!".
 *      b. Pushing the strings with the years and winners included to the empty array.
 * 6. Return the countryWins array.
 */

function getWinnersByYear(array, callback1, callback2, callback3) {
    let countryWins = [];
    let finals = callback1(array); // finals[]
    let years = callback2(array, callback1); // yearWon[]
    let winners = callback3(array, callback1); // winners[]
    for (let i = 0; i < finals.length; i++) {
        let str = `In ${years[i]}, ${winners[i]} won the world cup!`
        countryWins.push(str)
    }
    return countryWins
}

// console.log(getWinnersByYear(fifaData, getFinals, getYears, getWinners))

/* 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀 Task 6: 🚀🚀🚀🚀🚀🚀🚀🚀🚀🚀
Use the higher order function `getAverageGoals` to do the following: 
 1. Receive a callback function as a parameter that will take `getFinals` (from task 2) as an argument; ensure you pass in `fifaData` as its argument
 
 💡 HINT: Example of invocation: `getAverageGoals(getFinals(fifaData));`

 2. Calculate the AVERAGE number of the TOTAL home team goals AND TOTAL away team goals scored PER MATCH

 3. Round to the second decimal place and return the value
 
 💡 HINT: use .reduce, .toFixed (refer to MDN for syntax), and do this in 2 steps) 
 
*/

/**
 * 1. Create a variable (goals) that holds an empty array but will later hold the total points scored on both home and away teams per match in the finals.
 * 2. Create a variable (finals) to give access to the finals array.
 * 3. Iterate through the finals array and push the added goals for both home and away per match to the (goals) array.
 * 4. Use the reduce() method to add the total number of goals together.
 * 5. Create a variable (result) to hold the result and divide the total goals by the number of matches in the finals using goals.length.
 * 6. Return result.toFixed(2) to have the answer rounded to the second decimal place.
 */

function getAverageGoals(callback) { 
    let goals = [];
    let finals = callback;
    for (let i = 0; i < finals.length; i++) {
        goals.push(finals[i]["Home Team Goals"] + finals[i]["Away Team Goals"])
    }
    const sum = goals.reduce((prev, curr) => {
        return prev + curr
    }, 0);    
    let result = sum / goals.length
    return result.toFixed(2)
}

console.log(getAverageGoals(getFinals(fifaData)))


/// 🥅 STRETCH 🥅 ///

/* 💪💪💪💪💪 Stretch 1: 💪💪💪💪💪 
Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(/* code here */) {

    /* code here */

}



/* 💪💪💪💪💪 Stretch 2: 💪💪💪💪💪 
Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

}


/* 💪💪💪💪💪 Stretch 3: 💪💪💪💪💪
Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

}


/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
    console.log('its working');
    return 'bar';
}
foo();
module.exports = {
    foo,
    getFinals,
    getYears,
    getWinners,
    getWinnersByYear,
    getAverageGoals
}
