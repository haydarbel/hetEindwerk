
//Account Aanmaken 
document.getElementById("signUp").addEventListener('click',function (){
<<<<<<< HEAD
  // debugger
let sEmail=document.getElementById('modalLRInput12');
let sWachtwoord=document.getElementById('modalLRInput13');
let sHerWachtwoord=document.getElementById('modalLRInput14');
let url='http://localhost:3000/gebruikers'
let newGebruiker={
  login: sEmail.value,
=======
let sEmail=document.getElementById('modalLRInput12');
let sGebruikersNaam=document.getElementById('modalLRInput13');
let sWachtwoord=document.getElementById('modalLRInput14');
let sHerWachtwoord=document.getElementById('modalLRInput15');
let url='http://localhost:3000/gebruikers'
let newGebruiker={
  login: sEmail.value,
  gebruikersnaam:sGebruikersNaam.value,
>>>>>>> 809d8d43d760349f7f3e2740856abcd6bcfce4ca
  wachtwoord:sWachtwoord.value,
}
if((newGebruiker.login.length!==0 && newGebruiker.wachtwoord.length!==0)&& newGebruiker.wachtwoord ===sHerWachtwoord.value){
   const xhr = new XMLHttpRequest();
   xhr.open('POST', url, true);
   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
<<<<<<< HEAD
   xhr.onreadystatechange = ()=> {
=======
   xhr.onreadystatechange = () => {
>>>>>>> 809d8d43d760349f7f3e2740856abcd6bcfce4ca
     if (xhr.readyState === 4 && xhr.status === 201){
       let serverResponse = JSON.parse(xhr.response);
       console.log(serverResponse)
     }
   };
   xhr.send(JSON.stringify(newGebruiker));
  }
<<<<<<< HEAD
  sEmail.value=''
=======
  sEmail.value='';
  sGebruikersNaam='';
  sWachtwoord='';
  sHerWachtwoord='';
>>>>>>> 809d8d43d760349f7f3e2740856abcd6bcfce4ca
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
<<<<<<< HEAD
    sEmail.value='';
    sWachtwoord.value='';
    logInhtml();
=======
    let cGebruiker=gebruikers.find(item=>{
    return item.login===sEmail.value})
    localStorage.setItem("cGebruiker", JSON.stringify(cGebruiker));
    sEmail.value='';
    sWachtwoord.value='';
    logInhtml()
>>>>>>> 809d8d43d760349f7f3e2740856abcd6bcfce4ca
  }else{
    sEmail.value='';
    sWachtwoord.value='';
    alert('Eerst moet u een account maken!')
  }
  }
  });

<<<<<<< HEAD
  



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
=======
//controleer als anngemeled is
  function logInhtml() {
    let cGebruiker=JSON.parse(localStorage.getItem("cGebruiker"));
    if (cGebruiker){
    var logul = document.getElementById("loginul");
    logul.innerHTML = ` <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" id="navbarDropdownMenuLink-333" data-toggle="dropdown"
      aria-haspopup="true" aria-expanded="false">${cGebruiker.gebruikersnaam}
      </a>
      <div class="dropdown-menu dropdown-default" aria-labelledby="navbarDropdownMenuLink-333">
        <a id="afmelden" class="dropdown-item" onclick="afmeldenn()">Afmelden</a>
        </div>
      </li>`
    }
   }
//Afmelden
   function afmeldenn() {
    localStorage.removeItem("cGebruiker");
    var logull = document.getElementById("loginul");
>>>>>>> 809d8d43d760349f7f3e2740856abcd6bcfce4ca
     logull.innerHTML= `
     <li class="nav-item">
           <a class="nav-link waves-effect waves-light" data-toggle="modal" data-target="#modalLRForm">
            Log-in
           </a>
         </li>
     `;
<<<<<<< HEAD
   
   }
   
=======
   }

// Zet products om start pagina
   function strtpagina(){
   let url='http://localhost:3000/Products'
   let req=new XMLHttpRequest();
   req.open("GET",url,true);
   req.send();
   req.onload=function(){
   let Products=JSON.parse(req.responseText);
   console.log(Products[1].src1);
   for(let i=0;i<4;i++){
    let pic=document.getElementById(`multiImg${i}`);
    pic.src=`${Products[i].src1}`;
    let title=document.getElementById(`multiText${i}`);
    title.innerHTML=`${Products[i].Title}`;
   }
   }
  }

 

>>>>>>> 809d8d43d760349f7f3e2740856abcd6bcfce4ca
