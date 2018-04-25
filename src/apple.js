

var apple = {
  name:["1","2","3"],
  del:function () {
    this.name.forEach((value) => {
      console.log(value);
    })
  }
}
module.exports = apple;