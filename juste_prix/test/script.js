//const intervalID = setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2');
console.log("coucou");

function myCallback(a, b)
{
 // Your code here
 // Parameters are purely optional.
 console.log(a);
 console.log(b);
}

function myCallback2()
{
    setInterval(myCallback, 500, 'Parameter 1', 'Parameter 2')
}


document.getElementById("test").addEventListener("click", myCallback2)