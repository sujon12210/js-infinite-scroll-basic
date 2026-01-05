const container = document.getElementById('container');
let count = 1;

function addItems(){
  for(let i = 0; i < 5; i++){
    const div = document.createElement('div');
    div.className = 'item';
    div.innerText = 'Item ' + count++;
    container.appendChild(div);
  }
}

window.addEventListener('scroll', ()=>{
  if(window.innerHeight + window.scrollY >= document.body.offsetHeight - 10){
    addItems();
  }
});

addItems();
