const span = document.querySelector("#result")
const btn = document.querySelector(".btn")
const btn1 = document.querySelector("#generate")
const pass_length = document.querySelector("#length")
const uppercase = document.querySelector("#uppercase")
const lowercase = document.querySelector("#lowercase")
const number = document.querySelector("#numbers")
const symbol = document.querySelector("#symbols")
let a = pass_length.value
let copy;
btn1.addEventListener("click",()=>{
  let uppercase_str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  let lowercase_str = "abcdefghijklmnopqrstuvwxyz";
  let number_str = "0123456789"
  let symbol_str = "~!@#$%^&*?/"
  a = pass_length.value
  let str = ""
  if(uppercase.checked){
    for(let i=1; i<=a; i++){
        let char = Math.floor(Math.random()*uppercase_str.length)
        str = str+uppercase_str.charAt(char)
    }
  }
  if(lowercase.checked){ 
    for(let i=1; i<=a; i++){
        let char = Math.floor(Math.random()*lowercase_str.length)
        str = str+lowercase_str.charAt(char)
    }
  }
  if(number.checked){
    for(let i=1; i<=a; i++){
        let char = Math.floor(Math.random()*number_str.length)
        str = str+number_str.charAt(char)
    }
  }
  if(symbol.checked){
    for(let i=1; i<=a; i++){
        let char = Math.floor(Math.random()*symbol_str.length)
        str = str+symbol_str.charAt(char)
    }
  }
//   console.log(str)
  let res = "";
  let arr = str.split("")
//   console.log(arr)
  a = Number(pass_length.value)
  let x = 0
  let y = a
//   console.log(x,y)
  for(let i=1; i<=a; i++){
    if(uppercase.checked){
        let upp_arr = arr.slice(x, y)
        res = res+upp_arr[Math.floor(Math.random()*upp_arr.length)]
        x = y
        y = y+a;
        // console.log(x,y)
        if(!lowercase.checked && !number.checked && !symbol.checked){
            x = 0
            y = a
        }
    
    } 
    if(lowercase.checked){
        let low_arr = arr.slice(x, y)
        res = res+low_arr[Math.floor(Math.random()*low_arr.length)]
        x = y
        y = y+a
        // console.log(x,y)
        if(!uppercase.checked && !number.checked && !symbol.checked){
            x = 0
            y = a
        }
        if(!number.checked && !symbol.checked){
            x = 0
            y = a
        }
        if(!uppercase.checked && !symbol.checked){
            x = 0
            y = a
        }
       
    }
    if(number.checked){
        let num_arr = arr.slice(x, y)
        res = res+num_arr[Math.floor(Math.random()*num_arr.length)]
        x = y
        y = y+a
        // console.log(x,y)
        if(!uppercase.checked && !lowercase.checked && !symbol.checked){
            x = 0
            y = a
        }
        if(!number.checked && !symbol.checked){
            x = 0
            y = a
        }
        if(!lowercase.checked && !symbol.checked){
            x=0;
            y=a;
        }
        if(!symbol.checked){
            x = 0;
            y = a
        }
    }
    if(symbol.checked){
        let sym_arr = arr.slice(x, y)
        res = res+sym_arr[Math.floor(Math.random()*sym_arr.length)]
        x = 0
        y = a
        // console.log(x,y)
        if(!uppercase.checked && !lowercase.checked && !number.checked){
            x = 0
            y = a
        }
    }
    
  }
  let pass = ""
    for(let i=0; i<=a-1; i++){
     pass = pass+res[i]
    }
  span.innerHTML = pass
  copy = pass
 })
 btn.addEventListener("click", async ()=>{
  await navigator.clipboard.writeText(copy)
    alert("Password copied to clipboard!")
 })
 