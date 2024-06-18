console.log("Start")
setTimeout(function cb() {
    console.log("Callback");
},5000);
console.log("End");

//more lines of code so to pass 10seconds

let StartDate = new Date().getTime();
let EndDate = StartDate;
 while(EndDate<StartDate+10000){
    EndDate = new Date().getTime();
 }

 console.log("while expires");


 //Explanation- Callback function goes into WebAPI envi. then pushed into Callback Queue(CbQ) and Event Loops constantly monniter the the Call Stack and CbQ, but Global Execution Context needs more than > 10 seconds to completed so setTimeout wait for callstack to get emptied. So SetTimeout wait in CbQ until GEC gets finished.