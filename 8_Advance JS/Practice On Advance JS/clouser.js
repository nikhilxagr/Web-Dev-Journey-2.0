function outer(){
    let count = 0;
    return function (){
        count++;
        return count;
    }
}
let increement = outer();

console.log(increement());
console.log(increement());
console.log(increement());  