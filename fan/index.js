
let slow = document.getElementById('slow');
let medium = document.getElementById('medium');
let fast = document.getElementById('fast');


function setActive(a, b) {
   let slows = document.getElementById('slow');
   let mediums = document.getElementById('medium');
   let fasts = document.getElementById('fast');
   let fan = document.getElementById('fan');




   slows.classList.remove('ball');
   mediums.classList.remove('ball');
   fasts.classList.remove('ball');
   fan.classList.remove('fast', 'slow', 'medium');

   a.classList.add('ball');
   fan.classList.add(b)
}

