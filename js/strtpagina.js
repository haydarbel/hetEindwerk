function strtpagina() {
  let url = 'http://localhost:3000/Products';
  let req = new XMLHttpRequest();
  req.open("GET", url, true);
  req.send();
  req.onload = function () {
    let Products = JSON.parse(req.responseText);
    console.log(Products[1].src1);
    for (let i = 0; i < 4; i++) {
      let pic = document.getElementById(`multiImg${i}`);
      pic.src = `${Products[i].src1}`;
      let title = document.getElementById(`multiText${i}`);
      title.innerHTML = `${Products[i].Title}`;
    }
  };
}
