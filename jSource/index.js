  function name(data)
  {
    return new Promise((resolve,reject)=>{
     if(true)
     {
        setTimeout(()=>resolve(data),2000)
     }
    })
    .then(result => console.log(result))
  }
   name('adamsy')
