"use strict";

var data = [1, 2, 3, 4, 5, 6, 7, 8, 123, 123, 12];
var rowSize = 6;
var arr = [];
var toMatrix = function toMatrix(data, rowSize) {
    for (var i = 0; i <= data.length - 1; i += rowSize) {
        arr.push(data.slice(i, i + rowSize));
    }
};

toMatrix(data, rowSize);

console.log(arr);
console.log(arr.length);

var _iteratorNormalCompletion = true;
var _didIteratorError = false;
var _iteratorError = undefined;

try {
    for (var _iterator = arr[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var i = _step.value;

        console.log(i);
    }
} catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
} finally {
    try {
        if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
        }
    } finally {
        if (_didIteratorError) {
            throw _iteratorError;
        }
    }
}