function check () {

    var email=document.getElementById('email').value

    if(!(email.includes('@') && email.includes('.'))){
     
        document.getElementById('alert').style.display='block'
    }

}
function pass(){
    var password=document.getElementById("password").value
    if(password.length<8){
        document.getElementById('alert2').style.display='block'

    }
}
    


