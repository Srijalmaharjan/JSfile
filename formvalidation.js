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
    else if(input.length <3){
        displaymsg('first name should be more than 3 characters','fnameMsg','red')
        return false
    }
    else{
        displaymsg('first name is valid','fnameMsg','green')
    }


}