//Two categorizations of Datatypes
// 1.Primitive
// String,Number,Boolean,null,undefined,,Symbol,BigInt

// 2.Non Primitive or Reference Type
// Array,Objects,Functions

//const,var,let
//Static or Dynamic ?


//Array

const Actors = ["Hunt","Bond","Wick"]
//Object
let myObj= {
    name: "MMR",
    age: 22,
}
//Function
const myFunction = function(){
    console.log("Hello")
}



//Stack(Primitive) and Heap(NOn Primitive)
let myChannel = "Gemini"
let anotherName = myChannel
anotherName = "NTV"
console.log(anotherName)



//Primtive have copies
//Non primitives may different references pointing to same object in heap so change in one results inn another

