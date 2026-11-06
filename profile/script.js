//select the button and the message paragraph
const button=document.getElementById('clickBtn');
const message=document.getElementById('message');
//Add an event listener for the click event
button.addEventListener('click',function() {
    message.textContent="Hello!Thanks for visiting my profile";
    
});