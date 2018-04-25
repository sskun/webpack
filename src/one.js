//数组的去重
//方法一
var arr = [11,21,2,3,4,5,6,7,1,2,34,90,5,6,7];
var newArr = [];
arr.forEach((v)=>{
  if(newArr.indexOf(v)==-1){
     newArr.push(v)
    }
  })
console.log(newArr);

var arr2 = [11,21,2,3,4,5,6,7,1,2,34,90,5,6,7];
var newArr2=[];
for(var i = 0;i<arr2.length;i++){
  var flag = true;
  for(var j=0;j<arr2.length;j++){
    if(arr2[i]==newArr2[j]){
      flag=false;
    }
  }
  if(flag){
    newArr2.push(arr2[i]);
  }
}
console.log(newArr2)
//冒泡排序方法一
var arr1 = [2,2,3,4,5,6,71,4,23,4];
function sortNumber(a,b){
return a-b
}
console.log(arr1.sort(sortNumber))

//冒泡排序方法二：
for(var i =0;i<newArr.length;i++){
  var flag = true;
  for(var j = 0;j<newArr.length;j++){
    if(newArr[j]>newArr[j+1]){
      var temp = newArr[j];
      newArr[j]=newArr[j+1];
      newArr[j+1]=temp;
      flag = false;
    }
  }
  if(flag){
    break;
  }
}
console.log(newArr)
