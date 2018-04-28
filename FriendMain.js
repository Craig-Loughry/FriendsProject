"use strict";
exports.__esModule = true;
var Friend_1 = require("./Friend");
var f1 = new Friend_1.Friend("Ann", 27, "ann@gmail.com", true);
var f2 = new Friend_1.Friend("Bill", 31, "bill@gmail.com", false);
var fArray = [f1, f2];
for (var _i = 0, fArray_1 = fArray; _i < fArray_1.length; _i++) {
    var f = fArray_1[_i];
    console.log(f.about());
}
