
//Account Aanmaken 
document.getElementById("signUp").addEventListener('click',function (){
let sEmail=document.getElementById('modalLRInput12');
let sGebruikersNaam=document.getElementById('modalLRInput13');
let sWachtwoord=document.getElementById('modalLRInput14');
let sHerWachtwoord=document.getElementById('modalLRInput15');
let url='http://localhost:3000/gebruikers'
let newGebruiker={
  login: sEmail.value,
  gebruikersnaam:sGebruikersNaam.value,
  wachtwoord:sWachtwoord.value,
}
if((newGebruiker.login.length!==0 && newGebruiker.wachtwoord.length!==0)&& newGebruiker.wachtwoord ===sHerWachtwoord.value){
   const xhr = new XMLHttpRequest();
   xhr.open('POST', url, true);
   xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');
   xhr.onreadystatechange = () => {
     if (xhr.readyState === 4 && xhr.status === 201){
       let serverResponse = JSON.parse(xhr.response);
       console.log(serverResponse)
     }
   };
   xhr.send(JSON.stringify(newGebruiker));
  }
  sEmail.value='';
  sGebruikersNaam='';
  sWachtwoord='';
  sHerWachtwoord='';
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
    let cGebruiker=gebruikers.find(item=>{
    return item.login===sEmail.value})
    localStorage.setItem("cGebruiker", JSON.stringify(cGebruiker));
    sEmail.value='';
    sWachtwoord.value='';
    logInhtml()
  }else{
    sEmail.value='';
    sWachtwoord.value='';
    alert('Eerst moet u een account maken!')
  }
  }
  });

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
     logull.innerHTML= `
     <li class="nav-item">
           <a class="nav-link waves-effect waves-light" data-toggle="modal" data-target="#modalLRForm">
            Log-in
           </a>
         </li>
     `;
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

 
// Zet de producten in de dames.html
function productCategoryDames() {
  let url='http://localhost:3000/Products'
   let req=new XMLHttpRequest();
   req.open("GET",url,true);
   req.send();
   req.onload=function(){
     var damesarray = [];
   let Products=JSON.parse(req.responseText);
   for(i=0;i<Products.length;i++){
    if(Products[i].Categorie == 'Dames'){
     damesarray.push(Products[i])
    }
}
for(i=0;i<damesarray.length;i++) {
  var damedivs = document.getElementsByClassName('Category-dames-product')[i];
  damedivs.innerHTML = `
  <div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="${damesarray[i].src1}"
      alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <!-- Title -->
    <h5 class="card-title">${damesarray[i].Title}</h5>
    <!-- Text -->
    <p class="card-text"><b>Prijs:</b>${damesarray[i].prijs}</p>
    <!-- Button -->
    <a href="#" class="btn btn-warning">Button</a>

  </div>

</div>
  `;
}
}
}

// Zet de producten in de mannen.html
function productCategoryMannen() {
  let url='http://localhost:3000/Products'
   let req=new XMLHttpRequest();
   req.open("GET",url,true);
   req.send();
   req.onload=function(){
     var mannenarray = [];
   let Products=JSON.parse(req.responseText);
   for(i=0;i<Products.length;i++){
    if(Products[i].Categorie == 'Mannen') {
      mannenarray.push(Products[i])
    }
}
for(i=0;i<mannenarray.length;i++) {
  var mannendivs = document.getElementsByClassName('Category-mannen-product')[i];
  mannendivs.innerHTML = `
  <div  class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="${mannenarray[i].src1}"
      alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body flex-fill">

    <!-- Title -->
    <h5 class="card-title">${mannenarray[i].Title}</h5>
    <!-- Text -->
    <p class="card-text"><b>Prijs:</b>${mannenarray[i].prijs}</p>
    <!-- Button -->
    <a id="mannenbutton" href="#" class="btn btn-warning">Button</a>

  </div>

</div>
  `;
}
}
}


// Zet de producten in de solden.html
function productCategorySolden() {
  let url='http://localhost:3000/Products'
   let req=new XMLHttpRequest();
   req.open("GET",url,true);
   req.send();
   req.onload=function(){
     var soldenarray = [];
   let Products=JSON.parse(req.responseText);
   for(i=0;i<Products.length;i++){
   if(Products[i].Categorie == 'Solden'){
      soldenarray.push(Products[i])
    }
}
for(i=0;i<soldenarray.length;i++) {
  var soldendivs = document.getElementsByClassName('Category-solden-product')[i];
  soldendivs.innerHTML = `
  <div class="card">

  <!-- Card image -->
  <div class="view overlay">
    <img class="card-img-top" src="${soldenarray[i].src1}"
      alt="Card image cap">
    <a href="#!">
      <div class="mask rgba-white-slight"></div>
    </a>
  </div>

  <!-- Card content -->
  <div class="card-body">

    <!-- Title -->
    <h5 class="card-title">${soldenarray[i].Title}</h5>
    <!-- Text -->
    <p class="card-text"><b>Prijs:</b>${soldenarray[i].prijs}</p>
    <!-- Button -->
    <a href="#" class="btn btn-warning">Button</a>

  </div>

</div>
  `;
}
}
}
