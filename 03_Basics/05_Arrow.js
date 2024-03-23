const user = {
    username: " madan ",
    price : 999,
    WelcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
        console.log(`${user.username}, welcome to website`);
    console.log(this);
    }
}

// user.WelcomeMessage();
// user.username= "sam"
// user.WelcomeMessage()

// console.log(this); //gives null in IDE but not in browser window
// function chai(){
//     let username = "madan"
//     console.log(this);
//     // console.log(this.username);  //undefined
// }
// chai()// we get so much info here
//++++++++++++++++++++++++++++++++++++++++++++++++++++++


const chaii= function(){
    let username = "madan"
    // console.log(this.username);
    console.log(this);
    
}
chaii()//undefined for this.username and not empty for "this"



const chai = () =>{
    let username ="madan"
    // console.log(this.username);
    console.log(this)
}

chai()//undefined for this.username and empty for "this"


//arrow function
// const addTwo = (num1,num2)=> {
//     return num1+ num2
// }
const addTwo = (num1,num2)=> num1+ num2;
const addTwo1 = (num1,num2)=> (num1+ num2);
const addTwo3 = (num1,num2)=> ({username: "madan"});
const addTwo4 = (num1,num2)=> {username: "madan"};
//return for {}, no return for ()
console.log(addTwo(8,89))
console.log(addTwo1(8,89))
console.log(addTwo3(8,89))// returning object
console.log(addTwo4(8,89))//undefined , need brackets(paranthesis) to return object
