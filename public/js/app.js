const myform = document.querySelector('#myform1');
const inputvalue = document.querySelector('#searchdata1')

function uppercase(str)
{
  var array1 = str.split(' ');
  var newarray1 = [];
    
  for(var x = 0; x < array1.length; x++){
      newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
  }
  return newarray1.join(' ');
}


myform.addEventListener('submit',(e)=>{
    e.preventDefault();
    const state = inputvalue.value;
    const newstate = uppercase(state)
    const address = '/state/'+ newstate
    location.assign(address);
})


// for district

// const myform2 = document.querySelector('#myform2');
// const inputvalue2 = document.querySelector('#searchdata2')
// const statename = document.querySelector('#statename');
// // console.log(statename.textContent);
// function uppercase(str)
// {
//   var array1 = str.split(' ');
//   var newarray1 = [];
    
//   for(var x = 0; x < array1.length; x++){
//       newarray1.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
//   }
//   return newarray1.join(' ');
// }


// myform2.addEventListener('submit',(e)=>{
//     e.preventDefault();
//     const searchedstate = statename.textContent;
//     // console.log(searchedstate);
//     const city = inputvalue2.value;
//     const newcity = uppercase(city)
    
//     const address = '/district/'+searchedstate+'/'+ newcity
//     // console.log(address);
//     location.assign(address);
// })
