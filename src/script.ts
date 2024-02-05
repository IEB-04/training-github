// let Name : string = 'ehsan';
// let num : number = 123;
// let list : any[] = ['ehsan' , 2 , true]
// let tuple : [String , number] = ['ehsan' , 2]

let sum = (x : number = 1 , y ?:number , ...numbers : number[])=> {

    if (y)
    return x + y;
    return x
}
console.log(sum(2,3,4,43,33));