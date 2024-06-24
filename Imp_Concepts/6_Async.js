const p1 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },10000);
});
const p2 = new Promise((resolve,reject)=> {
    setTimeout(()=>{
        resolve("Promise Resolved Value!!");
    },5000);
});

//await can be only used inside async function

async function handlePromise(){
    console.log("Hello World");

    const val = await p1;
    console.log("Namsaste JS");
    console.log(val);
  
    const val2 = await p2;
    console.log("Namsaste JS");
    console.log(val2);

}
handlePromise();

//Strange thing is time taken is not 15 seconds but only 10seconds