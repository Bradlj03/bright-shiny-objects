// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘

//////////////////////////////////////////////////////////////
function createUser(firstName, lastName, age){
    let fullName = {
        firstName: firstName, 
        lastName: lastName
    }
    return fullName;
}
//////////////////////////////////////////////////////////////////////
//setAge

//Accepts two parameters, a user object and an age
//Adds a new age field to the user
//Returns the user object
//(1) set to paramenters for the function which can be taken from the statement above user and age
//(2) and a new parament to the two that was created above. to accomplish this, just take user and add .age (which is like push)

function setAge(user, age){   //// First create the function. T
    user.age = age
    return user;
};
 let user = {               
     firstName: "Jason", //// I You have to have the name you want in qoutation
     lastName: "Bradley"
 } 

let userA = setAge(user, 50)///To call the object put in what you called it in the function
console.log(setAge(user, 50));


 ///////////////////////////////////////////////////////////

 //incrementAge

//Accepts a user object
//Increments the age field by one
//Returns the user object
// **** the age parameter is coming from the problem above****
//(1) I am only looking for 1 object this time
//(2) Since I am incementimg the age of the user by one... take user.age and add++ which increases it by one

function incrementAge(user){
    user.age++
    return user
}
console.log(incrementAge(userA,));

/////////////////////////////////////////////////////////////////////////////
//addTodo

//Accepts two parameters, an array of to-do items
//and a new to-do item
//Adds the new-todo item to the array
//Returns the array of to-do items

//(1) create a function
//(2) add two parameters to the function 1. todo and newTodo
//(3) Since you are adding new todos to the oringinal array you must push. 
//(4) return todos.



function addTodo(todos, newTodo){
    todos.push(newTodo)
    return todos;
}


///////////////////////////////////////////////////////////////////////////

//addGrades

//first create a funtion that: Accepts two parameters, a student object and an array of grades
//Create a push to Add each new grade to the student's grades array
//Returns the student object.
//This can be accomlished by creating a for loop. 

const addGrades = (student, newGrades) => {
    for (let i = 0; i < newGrades.length; i++) {
      student.grades.push(newGrades[i])
    }
    return student
  }
 
/////////////////////////////////////////////////////////////////////

//addSong

//Accepts two parameters, a playlist object and a song object
//Updates the duration of the playlist
//Adds the song to the playlist's songs
//Returns the playlist object

//(1) Create a function with two perameters playlist and song

const addSong = (playlist, newSong) => {
    playlist.duration += newSong.duration
    playlist.songs.push(newSong)
    return playlist 
  }
/////////////////////////////////////////////////////////////////

//updateReportCard

//Accepts two parameters, a report card and a 
//new grade (a number between 0 and 100)
//Updates the report card's lowest grade, highest grade, and average grade
//Adds the new grade to the report card's grades


const updateReportCard = (reportCard, newGrade) => {
    reportCard.grades.push(newGrade)
    reportCard.lowestGrade = Math.min(...reportCard.grades)
    reportCard.highestGrade = Math.max(...reportCard.grades)
 
    let sum = 0;
    for (let i = 0; i < reportCard.grades.length; i++) {
      sum += reportCard.grades[i]
    }
    reportCard.averageGrade = sum / reportCard.grades.length
 
    return reportCard;
 
  };
/////////////////////////////////////////////////////////////////
//Accepts a car object
//Sets the needsMaitenance field to false
//Returns the car object



const fixCar = (car) => {
    car.needsMaintenance = false
    return car
  }









// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
