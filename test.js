var getTest = function(){
 
return new Promise(function(resolve,reject){
    setTimeout(function(){
      var a = 2;
      resolve(a);
    },500);
  })
.then(function(data){
  console.log(data);
  return new Promise(function(resolve,reject){
       setTimeout(function(){
         resolve(data+10)
        },500)
  })
})
.then(function(data1){
  console.log(data1)  
    return new Promise(function(resolve,reject){
       setTimeout(function(){
         resolve(data1+10)
        },500)
  })
})
.then(function(data2){
  console.log(data2)
})

}
