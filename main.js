Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("Camera");
Webcam.attach(camera);

function capture_image(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'">';
    })

}
console.log("ml5 version:",ml5.version)

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/IdRUj3l7_/model.json',modelloaded)

function modelloaded(){
    console.log("modelloaded")
}

function speak(){
    var synth=window.speechSynthesis;
    speech_data_1="The first prediction is " + prediction1;
    var utterThis= new SpeechSynthesisUtterance(speech_data_1);
    synth.speak(utterThis);

}
