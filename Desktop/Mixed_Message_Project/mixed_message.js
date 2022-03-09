/* This script will give the person what kind of food they should eat for breakfast, 
what kind of workout they should do, and what time they should go to bed */


const breakfast_foods = ['Pancakes', 'Waffles', 'Scrambled eggs', 'Nothing', 'Sausage and Eggs']
const workout_splits = ['Push', 'Pull', 'Legs', 'Cardio','Full Body']
const sleep_time = ['9:00', '9:30', '10:00', '10:30', '11:00', '11:30', '12:00']


const chooseFromList = (arr) => {
    const randNum = Math.floor(Math.random() * arr.length);
    return arr[randNum]
}


const dailyRoutine = (breakfastList, workoutList, sleepList) => {
    const breakfast = chooseFromList(breakfastList);
    const workout = chooseFromList(workoutList);
    const time = chooseFromList(sleepList);

    console.log(`Today, you need to eat ${breakfast} for breakfast, do a ${workout} workout, and go to bed at ${time} PM... Good luck and have a great day!`);
}

dailyRoutine(breakfast_foods, workout_splits, sleep_time);


