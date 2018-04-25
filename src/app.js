 import './one.css';  
var imgUrl = require("../image/7.png"),
    imgTempl = '<img src="'+imgUrl+'" />';
document.body.innerHTML = imgTempl;
var apple = require('./apple.js');
var btn = document.getElementById("btn")

function readyPromise(options){

var p = new Promise(function(resolve,reject){
  // 做一些异步的操作
  setTimeout(function(){
     console.log("执行完成");
     resolve("age=16");
   },2000)
 })
 return p; 
}
readyPromise().then(function(data){
  console.log(data)
});

console.log("msg");
 class Point{
   constructor(x,y){
     this.x = x;
     this.y = y;
   }
   toString(){
    console.log("promise");
   }
 }

 var p = new Point();
 p.toString();

apple.del();
