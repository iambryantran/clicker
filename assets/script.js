var counterEl = document.getElementById('counter');
var buttonEl = document.getElementById('button');

buttonEl.addEventListener('click', function() {
    var count = (parseInt(localStorage.getItem('count')) + 1);
    localStorage.setItem('count', count.toString());
    counterEl.innerHTML = count;
});
