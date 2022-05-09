//Paragraph function
var paragraph = document.createElement('P');
paragraph.textContent = 'Johnny Suh is talented, brilliant, incredible, amazing, showstopping, and spectacular!'
//Event listener function
var div = document.createElement('DIV'); 
div.style.height = '100vh';
document.body.appendChild(paragraph); //Before div so para. can appear first at top 
document.body.appendChild(div); 
div.addEventListener('mousemove', function(event) {
    console.log(event); 
    var x = event.clientX;
    var y = event.clientY; 
    div.textContent = x + ', ' + y; 
    div.style.backgroundColor = 'rgb(' + x + ', ' + y + ', 100)'
}); 
