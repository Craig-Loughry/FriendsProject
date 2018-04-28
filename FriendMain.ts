import {Friend} from "./Friend";

let f1: Friend = new Friend("Ann", 27, "ann@gmail.com", true);
let f2: Friend = new Friend("Bill", 31, "bill@gmail.com", false);

let fArray:Friend[]= [f1, f2];

for(let f of fArray) {
    console.log(f.about());
}