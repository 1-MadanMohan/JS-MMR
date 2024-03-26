//Immediately Invoked Function Expressions

// function chai()
// {
//     console.log(`DB connected`);
// }
// chai();


(function chai()
{
    console.log(`DB connected`);
})();

// (defintion)(execution)
//To get rid of pollution by global scope

(()=> {
    console.log(`DB CONNECTED TWO`);
})()
//Error if no semicolan at 13


