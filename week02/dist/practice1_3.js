"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);
    }
}
