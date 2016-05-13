function addPromise(a,b)
{
  return new new Promise(function(resolve, reject) {
    if(typeof a==='number' && typeof b==='number')
    {
     resolve(a+b);
    }
    else {
      reject("A and B need to be number");
    }
  });
}


addPromise(7,2).then(function(sum){
  console.log(sum);
},function(err)
{
  console.log(err);
})


addPromise("murali",2).then(function(sum){
  console.log("this should not display");
},function(err)
{
  console.log(err);
})
