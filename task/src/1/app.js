
const data = [1,2,3,4,5,6,7,8,123,123,12];
const rowSize = 6;
let arr = [];
let toMatrix = (data, rowSize) => {
    for (let i=0; i<=data.length-1; i+=rowSize){
        arr.push(data.slice(i,i+rowSize));
    }
};




toMatrix(data,rowSize);

console.log(arr);
console.log(arr.length);

for(let i of arr) {
    console.log(i);
}