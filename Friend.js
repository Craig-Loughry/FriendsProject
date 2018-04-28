"use strict";
exports.__esModule = true;
var Friend = /** @class */ (function () {
    function Friend(inName, inAge, inEmail, inBestFriend) {
        this.name = inName;
        this.age = inAge;
        this.email = inEmail;
        this.BestFriend = inBestFriend;
    }
    Friend.prototype.about = function () {
        return "Friend:  name=" + this.name + ",\n                          age=" + this.age + ",\n                          email=" + this.email + ",\n                          BestFriend=" + this.BestFriend;
    };
    return Friend;
}());
exports.Friend = Friend;
