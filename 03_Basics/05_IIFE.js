//Immediately Invoked Function Expressions

// function chai()
// {
//     console.log(`DB connected`);
// }
// chai();


(function chai()
{
    console.log(`DB connected me}`);
})();

;

// (defintion)(execution)
//To get rid of pollution by global scope

((name)=> {
    console.log(`DB CONNECTED TWO ${name}`);
})('sai')
//Error if no semicolan at 13


