const p1 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },10000);
});
const p2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },12000);
});

//await can be only used inside async function

async function handlePromise(){
    console.log("Hello World");

    const val = await p1;
    console.log(" JS");
    console.log(val);
  
    const val2 = await p2;
    console.log(" JS 2");
    console.log(val2);

}
handlePromise();
// Javascript is synchronous,single threaded langugage
//Strange thing is time taken is not 15 seconds but only 10seconds
//Execution flow
// first hello world is logged
// val takes 10 seconds to resolve

//Call Stack is empty- initially
//p1,p2 async promises


//Representation of call stack


// again suspend at line 21
//starts from 18thh line
//after promise p1 resolves, handlePromise will again come into callstack and start executing from where it left
//handlePromise() get out of call stack (function execution suspends for that time)
//17th line there is await(js doesnot wait here as we think)
//15th line get logged
//handlePromise()
//CallStack

//js engine is not waiting for this promise to get resolved
// just functionns are suspending until it resolves
