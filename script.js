


function runSimulation(){

    console.log("a click event has been heard");
    var chairLimit =  document.getElementById("chairCount").value;
    var milliSeconds = document.getElementById("delay").value;
    console.log(chairLimit, milliSeconds);
     let timerId = setInterval(() => console.log('tick'), milliSeconds);

     setTimeout(() => { clearInterval(timerId); console.log('stop'); }, 5000);
}

function singleStep (){
    var chairs =  document.getElementById("chairCount").value;
    var milliSeconds = document.getElementById("delay").value;
    console.log(chairs, milliSeconds);

    for (var charNum = 0; chairsRemaining = 1; charNum ++){

    }

} 

function reset (){

    console.log("a reset click event has been heard");
    var chairs =  document.getElementById("chairCount").value;
    var milliSeconds = document.getElementById("delay").value;
    console.log(chairs, milliSeconds);
}