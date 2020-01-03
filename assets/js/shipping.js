let cardDrop = document.getElementById('card-dropdown');
let activeDropdown;
cardDrop.addEventListener('click',function(){
  let node;
  for (let i = 0; i < this.childNodes.length-1; i++)
    node = this.childNodes[i];
    if (node.className === 'dropdown-select') {
      node.classList.add('visible');
       activeDropdown = node; 
    };
})

window.onclick = function(e) {
  console.log(e.target.tagName)
  console.log('dropdown');
  console.log(activeDropdown)
  if (e.target.tagName === 'LI' && activeDropdown){
    if (e.target.innerHTML === 'EXPRESS SHIPPING') {
      document.getElementById('credit-card-image').src = './assets/images/Express.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'EXPRESS SHIPPING';
    }
    else if (e.target.innerHTML === 'COURIER SHIPPING') {
         document.getElementById('credit-card-image').src = './assets/images/Courier.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'COURIER SHIPPING';      
    }
    else if (e.target.innerHTML === 'FREE SHIPPING') {
         document.getElementById('credit-card-image').src = './assets/images/Free.png';
          activeDropdown.classList.remove('visible');
      activeDropdown = null;
      e.target.innerHTML = document.getElementById('current-card').innerHTML;
      document.getElementById('current-card').innerHTML = 'FREE SHIPPING';
    }
  }
  else if (e.target.className !== 'dropdown-btn' && activeDropdown) {
    activeDropdown.classList.remove('visible');
    activeDropdown = null;
  }
}

function checkParams() {
  let name = $('#name').val();
  let email = $('#email').val();
  let phone = $('#phone').val();
  let address = $('#address').val();


  if(name.length != 0 && email.length != 0 && phone.length != 0 && address.length != 0) {
      $('#pay').removeAttr('disabled');
  } else {
      $('#pay').attr('disabled', 'disabled');
  }
}
