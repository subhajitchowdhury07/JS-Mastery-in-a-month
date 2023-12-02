const Marvel_heros=[ "ironman", "Hulk", " Dr_strange "];
const Dc_heros= [ "SuperMan", "BatMan", " flash "];

console.log(Marvel_heros.concat(Dc_heros));   // Using concatinate u can concate only 2 arrays

const new_heros= [...Marvel_heros, ...Dc_heros]  // [...] That is the Spread operator.That is userd to help concatinate more than 2 arrays
console.log(new_heros)

console.log(typeof new_heros);

const arr2 = [23,4,5,8,[ 6, 7, ], 9, [ 2,4,[ 5,7,[ 98,24]]]]

console.log(arr2.flat(Infinity))


console.log(Array.isArray("subha"));
console.log(Array.from("Subha"));
console.log(Array.of("Subha",arr2));
console.log(Array.from({name: " subha"}));