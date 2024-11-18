const numbers = [19, 23, 4, 16, 28, 13, 31, 8, 29, 14, 6, 35, 2, 11, 17, 5, 9, 27, 12, 30,];
let primearr = []

for(let i=0; i<numbers.length; i++){
    let count = 0;
    for(let j=1; j<=numbers[i]; j++){
        if(numbers[i]%j==0){
            count++;
        }
    }
    if(count==2){
        primearr.push(numbers[i])
    }
}
// console.log(primearr)

let min = primearr[0];
let max = primearr[0];
let sum = 0;

for(let i=0; i<primearr.length; i++){
    if(primearr[i]<min){
        min = primearr[i]
    }else if(primearr[i]>max){
        max = primearr[i]
    }
    sum+=primearr[i];
}
console.log("Maximum prime array is ",max)
console.log("Minimum prime array is ",min)
console.log("Sum of prime array is ",sum)