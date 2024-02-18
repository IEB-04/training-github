// let Name : string = 'ehsan';
// let num : number = 123;
// let list : any[] = ['ehsan' , 2 , true]
// let tuple : [String , number] = ['ehsan' , 2]
let myElement = document.getElementById('es') as HTMLElement;
let sum = (x : number = 1 , y ?:number , ...numbers : number[])=> {
    let sumOfNumbers = numbers.reduce((a, b) => a + b, 0);
    if (y)
        return [x + y + sumOfNumbers , '🤡 کوشته شد '] ;
    return x + sumOfNumbers;
}
let result = sum(2, 3, 4, 43, 33, 319);
if (Array.isArray(result)) {
    myElement.innerHTML = result.join(', ');
} else {
    myElement.innerHTML = result.toString();
}
console.log(sum(2,3,4,43,33));
