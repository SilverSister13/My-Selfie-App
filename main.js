 var SpeechRecognition = window.webkitSpeechRecognition;
 var recognition = new SpeechRecognition();

 function start(){
     document.getElementById("text_box").innerHTML = "";
     recognition.start();
 }

 recognition.onresult = function run(event){
     console.log(event)
     var content = event.results[0][0].transcript;
     console.log(content)

     document.getElementById("text_box").innerHTML = content;

     if(content == "take my selfie"){

        console.log("taking selfie in...")
         speak();
     }
     
 }

 function speak(){
     var synth = window.speechSynthesis;
     speak_data = "taking selfie in 5 seconds"
     var utterThis = new SpeechSynthesisUtterance(speak_data);
     synth.speak(utterThis)

     Webcam.attach(camera)
     
     setTimeout(function(){
        snapshot();
        save();
     },5000)
 }

 

 Webcam.set({
    height: 260,
    width: 310,
    image_format: "jpeg",
    jpeg_quality: 90
});

 camera = document.getElementById("camera")

 function snapshot(){
     Webcam.snap(function(data_uri){
         document.getElementById("result").innerHTML = "<img id = 'image' src = '" + data_uri +"'>"
     })
 }

 function save(){
     link = document.getElementById("link")
     image = document.getElementById("image").src

     link.href = image
     link.click();
 }