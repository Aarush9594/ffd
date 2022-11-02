var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()

function start_button(){   
    document.getElementById("camera").innerHTML = ""

    recognition.start() 
}

recognition.onresult=function(event){
    console.log(event)
    content = event.results[0][0].transcript
    document.getElementById("text_box").innerHTML = content
    if (content=="take my selfie") {
      console.log("taking selfie")
      speak()
    }
} 

function speak(){
    var synth = window.speechSynthesis;
    var speak_data = "taking selfie in 5 seconds 5.. 4.. 3.. 2.. 1.. click"
    var utter_this = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utter_this)
    Webcam.attach('#camera')
    setTimeout(function(){
      take_snapshot()
      save()
    },5000)
    }

    Webcam.set({
        width: 300,
        height: 250,
        image_format: "png",
        png_quality: 100000
      });

      function take_snapshot(){
        Webcam.snap(function(data_uri){
          document.getElementById("result").innerHTML = "<img  id='capture_image'  src = '"+data_uri+"'> "             
        })
      }

      take_snapshot()

      function save(){
        var link = document.getElementById("link")
        console.log(link)
        image = document.getElementById("capture_image").src
        link.href=image
        link.click()
      }
