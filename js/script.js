
//Account Aanmaken 
document.getElementById("signUp").addEventListener('click',function (){
  // debugger
let sEmail=document.getElementById('modalLRInput12');
let sWachtwoord=document.getElementById('modalLRInput13');
let sHerWachtwoord=document.getElementById('modalLRInput14');
let url='http://localhost:3000/gebruikers'
let newGebruiker={
  login: sEmail.value,
  wachtwoord:sWachtwoord.value,
}
if((newGebruiker.login.length!==0 && newGebruiker.wachtwoord.length!==0)&& newGebruiker.wachtwoord ===sHerWachtwoord.value){
   const xhr = new XMLHttpRequest();
   xhr.open('POST', url, true);
   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
   xhr.onreadystatechange = ()=> {
     if (xhr.readyState === 4 && xhr.status === 201){
       let serverResponse = JSON.parse(xhr.response);
       console.log(serverResponse)
     }
   };
   xhr.send(JSON.stringify(newGebruiker));
  }
  sEmail.value=''
});


//Validation 
document.getElementById('logIn').addEventListener('click',function(){
  let sEmail=document.getElementById('modalLRInput10');
  let sWachtwoord=document.getElementById('modalLRInput11');
  let url='http://localhost:3000/gebruikers'
  req=new XMLHttpRequest();
  req.open("GET",url,true);
  req.send();
  req.onload=function(){
  let gebruikers=JSON.parse(req.responseText);
  if(gebruikers.find(item=>{
     return item.login==sEmail.value && item.wachtwoord==sWachtwoord.value  
  })){
    sEmail.value='';
    sWachtwoord.value='';
    logInhtml();
  }else{
    sEmail.value='';
    sWachtwoord.value='';
    alert('Eerst moet u een account maken!')
  }
  }
  });

  



  function logInhtml() {
    var logul = document.getElementById("loginul");
    logul.innerHTML = ` <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">Ihsan
    </a>
    <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
      <a id="afmelden" class="dropdown-item" onclick="afmeldenn()">Afmelden</a>
      </div>
      </li>`
   }
   
   
   function afmeldenn() {
   var logull = document.getElementById("loginul");
     logull.innerHTML= `
     <li class="nav-item">
           <a class="nav-link waves-effect waves-light" data-toggle="modal" data-target="#modalLRForm">
            Log-in
           </a>
         </li>
     `;
   
   }
   
