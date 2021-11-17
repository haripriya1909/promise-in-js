let fs=require("fs");
//async code
console.log("before");
fs.readFile("f1.txt", function (err,data)
{
    console.log(data);
});
let promise=fs.promises.readFile("f1.txt");
// console.log(promise);
//fullfilled
promise.then(function(data)
{
    console.log(""+data);
});
promise.catch(function(err)
{
    console.log((err));
});
console.log("after");

