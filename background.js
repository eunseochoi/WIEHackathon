window.onload = function(){
  var checkPageButton = document.getElementById('checkPage');
    checkPageButton.addEventListener('click', function() {
      
      if (annyang) {
        // Let's define a command.
        var commands = {
          'hello': function() { alert('Hello world!'); }
        };
      
        // Add our commands to annyang
        annyang.addCommands(commands);
      
        // Start listening.
        annyang.start();
        window.alert("you are on the master branch")
      }
  
    }, false);
}


// $(document).ready(function(){
//     navigator.mediaDevices.getUserMedia({audio: true})
// });
