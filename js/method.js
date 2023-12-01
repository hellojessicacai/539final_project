var button1 = document.querySelector('#button1');
var button2 = document.querySelector('#button2');
var button3 = document.querySelector('#button3');
var method1 = document.querySelector('#method1')
var method2 = document.querySelector('#method2')
var method3 = document.querySelector('#method3')
button1.addEventListener('click', function() {
    button1.style.boxShadow = "3px 3px 20px 3px white";
    button2.style.boxShadow = "none";
    button3.style.boxShadow = "none";
    if (method1.style.display !== 'block') {
        method1.style.display = 'block';
    }
    if (method2.style.display !== 'none') {
        method2.style.display = 'none';
    }
    if (method3.style.display !== 'none') {
        method3.style.display = 'none';
    }
})

button2.addEventListener('click', function() {
    button2.style.boxShadow = "3px 3px 20px 3px white";
    button1.style.boxShadow = "none";
    button3.style.boxShadow = "none";
    if (method2.style.display !== 'block') {
        method2.style.display = 'block';
    }
    if (method1.style.display !== 'none') {
        method1.style.display = 'none';
    }
    if (method3.style.display !== 'none') {
        method3.style.display = 'none';
    }
})

button3.addEventListener('click', function() {
    button3.style.boxShadow = "3px 3px 20px 3px white";
    button1.style.boxShadow = "none";
    button2.style.boxShadow = "none";
    if (method3.style.display !== 'block') {
        method3.style.display = 'block';
    }
    if (method1.style.display !== 'none') {
        method1.style.display = 'none';
    }
    if (method2.style.display !== 'none') {
        method2.style.display = 'none';
    }
})