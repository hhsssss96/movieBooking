let userID = document.querySelector('#user-id')
let pw = document.querySelector('#password')
let pw2 = document.querySelector("password2")

let checkId = () =>{
    alert(userID.value)
}
let checkPw = () =>{
    alert(pw.value)
}
let checkPw = () =>{
    alert(pw2.value)
}


userID.onchange = checkId;
pw.onchange = checkPw;
pw2.onchange = checkPw2;
// userID.addEventListener('change', checkId)
// userID.addEventListener('change', checkPw)
// userID.addEventListener('change', checkPw2)
