function displaymsg(msg,idname,colorname){
    document.getElementById(idname).innerHTML=msg
    document.getElementById(idname).style.color=colorname

}
function fnamevaliddate(){
    let input=document.getElementById('fname').value
    if (input==''){

        displaymsg('first name is mandatory','fnameMsg','red')
        return false
    }
    else if(!input.match(/^[a-zA-Z]+$/)){
        displaymsg('first name must contain alphabets','fnameMsg','red')
        return false
    }
    else if(input.length <3){
        displaymsg('first name should be more than 3 characters','fnameMsg','red')
        return false
    }
    else{
        displaymsg('first name is valid','fnameMsg','green')
    }


}
function lnamevaliddate(){
    let input=document.getElementById('lname').value
    if (input==''){

        displaymsg('last name is mandatory','lnameMsg','red')
        return false
    }
    else if(!input.match(/^[a-zA-Z]+$/)){
        displaymsg('last name must contain alphabets','lnameMsg','red')
        return false
    }
    
    else if(input.length <3){
        displaymsg('last name should be more than 3 characters','lnameMsg','red')
        return false
    }
    else{
        displaymsg('last name is valid','lnameMsg','green')
    }


}
function emailvaliddate(){
    let input=document.getElementById('email').value
    if (input==''){

        displaymsg('email is mandatory','emailMsg','red')
        return false
    }
    else if(!input.match(/^([a-zA-Z])[a-zA-Z0-9\-\.\_]+\@+([a-zA-Z])+\.+([a-z])/)){
        displaymsg('email must contain @gmail.com','emailMsg','red')
        return false
    }
    
   
    else{
        displaymsg('email is valid','emailMsg','green')
    }


}

function pwvaliddate(){
    let input=document.getElementById('password').value
    if (input==''){

        displaymsg('password is mandatory','passwordMsg','red')
        return false
    }
    else if(!input.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$*!?]).{8,}$/)){
        displaymsg('password must contain <li>onedigit</li> <li>uppercasealphabet</li> <li>lowercasealphabet</li> <li>specialcharacters</li>','passwordMsg','red')
        return false
    }
    
    else if(input.length <3){
        displaymsg('password should be more than 8 characters','passwordMsg','red')
        return false
    }
    else{
        displaymsg('password is valid','passwordMsg','green')
    }
}
function cpwvaliddate(){
    let password=document.getElementById('password').value
    let cpassword =document.getElementById('cpwd').value

    if (cpassword==''){

        displaymsg('confirm password is mandatory','cpwdMsg','red')
        return false
    }
    else if (password != cpassword){
        displaymsg('password and confirm password must be same','cpwdMsg','red')
        return false

    }
    else{
        displaymsg('all ok','cpwdMsg','green')
        return true
    }

}
function submitform(){
    if(fnamevaliddate()&& lnamevaliddate()&& emailvaliddate() && pwvaliddate() && cpwvaliddate()){
        return true
    }
    else {
        return false
    }
}