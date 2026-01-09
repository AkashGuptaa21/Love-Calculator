const form =document.querySelector('form')

form.addEventListener('submit',(e)=>{

    e.preventDefault() // stops form submission

    const boy= document.getElementById('boy')
    const girl= document.getElementById('girl')

     // boy.value will give input of boyname

     const l1= boy.value.length //length of boyname
     const l2= girl.value.length

     const result = Math.pow(l1+l2,3)%101  //ans bw 0-100 

     document.querySelector('h2').textContent=`Result: ${result}%`

     form.reset() //reset value inside form 

})

















