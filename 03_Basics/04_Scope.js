//Nested Scope , Closure(DOM)

//Some more basics on Scope

 function one (){
    const username  ="madan"
    function two()
    {
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);
    two();
 }
 one();

 // IN nested functions child is able to access parent variables

 if(true){
    const username= "madan"
    if(username === "madan")
    {
        const website = "youtube"
        console.log(username+ website)
    }
    // console.log(website);
 }
//  console.log(username);





//++++++++++++++++++++++++++++++++

function addone(num){
return num +1;
}
addone(5);
console.log(addone(5));
// console.log(addTwo(4));

const addTwo = function(num){
    return num+2;
}
console.log(addTwo(4));

//if you keep "addtwo" above function declaration it will result in error