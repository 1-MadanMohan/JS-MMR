const marvel_heroes =["thor","hulk","tony"]
const dc_heroes = ["Wayne","Wonderw","flash"]
// marvel_heroes.push(dc_heroes)
// console.log(marvel_heroes);

// marvel_heroes.concat(dc_heroes)
// console.log(marvel_heroes);

// const allheroes = marvel_heroes.concat(dc_heroes)
// console.log(allheroes);

const all_new_heroes = [...marvel_heroes,...dc_heroes]//spread operator
console.log(all_new_heroes);


const another_array = [1,2,3,[4,5,6],[6,7,[8,9]]]
const real_another_array =another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Krishna"))
console.log(Array.from("krishna"));
console.log(Array.from({name:"krishna"}))//imp

let score1 =100;
let score2 = 200;
let score3 =300;
console.log(Array.of(score1,score2,score3))
