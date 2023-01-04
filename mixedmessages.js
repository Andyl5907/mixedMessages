
// establish workouts
const workouts = ['Legs', 'Push', 'Pull', 'Cardio']   

//establish exercises for each workouts
let legs = ['Squats', 'Lunges', 'Box Jumps', 'Leg Press', 'Leg Extension'] // legs exercises
let push = ['Chest Press', 'Shoulder Press', 'Tricep Extension', 'Flys', 'Press Up']
let pull = ['Bicep Curl', 'Lat Pull Down', 'Deadlifts', 'Bent Over Row', 'Sit Down Row']
let cardio = ['Run', 'Swim', 'Circuits']

const getWorkout = () => {
    const randWorkout = Math.floor(Math.random() * 4)
    const workout = workouts[randWorkout];
    return workout
}

const getLegs = () => {
    const randLegs1 = Math.floor(Math.random() * 5);
    const randLegs2 = Math.floor(Math.random() * 5);
    const legExs = legs[randLegs1] + ', ' + legs[randLegs2];
    if (randLegs1 !== randLegs2){
        return legExs 
    }
    else {
        const randLegs1 = Math.floor(Math.random() * 5);
        const randLegs2 = Math.floor(Math.random() * 5);
        const legExs = legs[randLegs1] + ', ' + legs[randLegs2];
        return legExs
    }

}

const getPush = () => {
    const randPush1 = Math.floor(Math.random() * 5);
    const randPush2 = Math.floor(Math.random() * 5);
    const pushExs = push[randPush1] + ', ' + push[randPush2];
    if (randPush1 !== randPush2){
        return pushExs 
    }
    else {
        const randPush1 = Math.floor(Math.random() * 5);
        const randPush2 = Math.floor(Math.random() * 5);
        const pushExs = push[randPush1] + ', ' + push[randPush2];
        return pushExs
    }
}


const getPull = () => {
    const randPull1 = Math.floor(Math.random() * 5);
    const randPull2 = Math.floor(Math.random() * 5);
    const pullExs = pull[randPull1] + ', ' + pull[randPull2];
    if (randPull1 !== randPull2){
        return pullExs 
    }
    else {
        const randPull1 = Math.floor(Math.random() * 5);
        const randPull2 = Math.floor(Math.random() * 5);
        const pullExs = pull[randPull1] + ', ' + pull[randPull2]; 
        return pullExs
    }
}



const getCardio = () => {
    const randCardio = Math.floor(Math.random() * 3);
    const cardioEx = cardio[randCardio];
    return cardioEx
}




const getDailyRoutine = () => {
    if (getWorkout() === workouts[0]){
        return `Complete ${getLegs()} and ${getCardio()}`
    }
    else if (getWorkout() === workouts[1]){
        return `Complete ${getPush()} and ${getCardio()}`
    }
    else if (getWorkout() === workouts[2]){
        return `Complete ${getPull()} and ${getLegs()}`
    }
    else {
        return `Complete ${getCardio()}`
    }

}

console.log(getDailyRoutine()) 