
let data = [1,2,3,4,5,6,7,8];
let rowSize = 4;

function toMatrix(data, rowSize) {
    let result = [];
    let i=0;
    for (i; i<data.length;){
        let arr = [];
        for (var j=0;j<rowSize;j++){
            if (data[i]) arr.push(data[i++]);
        }
        result.push(arr);
    }
    return result;
};
// let res = toMatrix(data, rowSize);
// console.info(res);
let str = toMatrix(data, rowSize);
let style = ['padding: 0.5rem;',
    'background: linear-gradient( #36a1d9, #176FD9);',
    'font: 1rem/2 Georgia;',
    'color: white;'].join('');

console.log ( '%c%s', style, str );
console.log ( str );