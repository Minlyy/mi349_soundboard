const sounds = ["China 4.wav","Crash B 2.wav","Hi Hat 10.wav","Ride Cymbal 4.wav","Splash 2.wav"]

var buttons = document.querySelectorAll('.sb-button');
for(var i = 0; i < buttons.length; i++)
{
    buttons[i].addEventListener('click', PlaySound);
}

function PlaySound(event)
{
    const audio = new Audio('Sounds/' + sounds[parseInt(event.target.id)]);
    audio.play();
}