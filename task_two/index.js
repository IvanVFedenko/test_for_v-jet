let form = document.getElementById("form")
let input = document.getElementById("input")
let clearLocal = document.getElementById("clearLocal")

form.addEventListener('submit', (event) => {
  event.preventDefault();
  if (!input.value) {
    return
  };
  localStorage.setItem('num23', input.value);
  input.value = null;
  manage(input);
});

form.addEventListener('submit', () => {
  let item = localStorage.getItem('num23');
  let red = `<p style="color: red;">${item}</p>`;
  let green = `<p style="color: green;">${item}</p>`;
  if(item) {
    form.insertAdjacentHTML('beforebegin', item % 2 === 0 ? red : green);
  }
});

clearLocal.addEventListener('click', () => {
  delete localStorage.num23;
  window.location.reload();
});

 let manage = (input) => {
 let bt = document.getElementById('buttonSet');
  if (input.value.length === 0) {
    bt.disabled = true;
  }
  else {
    bt.disabled = false;
  }
}; 





