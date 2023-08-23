function check(){
    var correct = 0;
    var question1 = document.quiz.question1.value;
    var question2 = document.quiz.question2.value;
    var question3 = document.quiz.question3.value;
    var question4 = document.quiz.question4.value;
    var question5 = document.quiz.question5.value;
    var question6 = document.quiz.question6.value;
    var question7 = document.quiz.question7.value;
    var question8 = document.quiz.question8.value;
    var question9 = document.quiz.question9.value;
    var question10 = document.quiz.question10.value;
    var question11 = document.quiz.question11.value;
    var question12 = document.quiz.question12.value;
    var question13 = document.quiz.question13.value;
    var question14 = document.quiz.question14.value;
    var question15 = document.quiz.question15.value;
   
    
    var div1 = document.getElementById("easy");
    var div2 = document.getElementById("Submitting");
    var div3 = document.getElementById("medium");
    var div4 = document.getElementById("hard");
    var head = document.getElementById("header");
    
    var score;
    var messages = ["Admin FB: Yan Sinh<br/>get card Metfone 1$  now<br\>*1204*214225986772787#",
        "ចុមប្រូរធ្វើបាន wow ល្អប្រូរនៅតិចទៀតចិតបានហើយ!",
        "មិនអាក្រក់​ទេ! អ្នកអាចចូលរួមកម្មវិធី Night's Watch!",
        "ធ្ងន់ធ្ងរ? អ្នកមិនដឹងអ្វីទេ ...",
        "ឯងនិយាយលេងទេ?! ចូល​មើល​ភាគ​ខ្លះ!",
        "ការចងចាំរបស់អ្នកងងឹតហើយពោរពេញដោយ ... កំហុស! ទៅ ហើយ​ធ្វើ​ការ​ឡើងវិញ​នូវ​អ្វី​ដែល​បាន​កើត​ឡើង​នៅ​ក្នុង​វគ្គ​មុន​!"];
    var pictures = ["https://c.tenor.com/6OAM535OZ-QAAAAC/hacker-mask.gif",
        "https://c.tenor.com/spSgkqK707kAAAAC/ok-all.gif",
        "https://media.giphy.com/media/3ohzdUi5U8LBb4GD4s/giphy.gif",
        "https://i.giphy.com/media/xUPGGowZAkTTHvsLOU/giphy.webp",
        "https://media.tenor.com/jJWcvhv7IfcAAAAM/oh-no.gif",
        "https://miro.medium.com/max/390/1*eKABkUzJKEc9oWoFf9qrpQ.gif"];
    
    //questions
    
    if (question1 == "1"){
        correct++;
    }
    
    if (question2 == "1"){
        correct++;
    }
    
    if (question3 == "1"){
        correct++;
    }
    
    if (question4 == "1"){
        correct++;
    }
    
    if (question5 == "1"){
        correct++;
    }
    
    if (question6 == "1"){
        correct++;
    }
    
    if (question7 == "1"){
        correct++;
    }
    
    if (question8 == "1"){
        correct++;
    }
    
    if (question9 == "1"){
        correct++;
    }
    
    if (question10 == "1"){
        correct++;
    }
    
    if (question11 == "1"){
        correct++;
    }
    
    if (question12 == "1"){
        correct++;
    }
    
    if (question13 == "1"){
        correct++;
    }
    
    if (question14 == "1"){
        correct++;
    }
    
    if (question15 == "1"){
        correct++;
    }
   
    
    
    
    
    //check the score
    
    if (correct <= 3) {
        score = 5;
    } else if (correct >=4 && correct <= 6){
        score = 4;
    } else if (correct >=7 && correct <= 9){
        score = 3;
    } else if (correct >=10 && correct <= 12){
        score = 2;
    } else if (correct >=13 && correct <= 14){
        score = 1;
    } else {
        score = 0;
    }
    
    
    
    document.getElementById("messages").innerHTML = messages[score];  
    document.getElementById("answers_correct").innerHTML = "អ្នកធ្វើត្រូវ " + correct +" សំណួរ ";  
    document.getElementById("picture").src = pictures[score];

    
    if( div2.style.display == "none" )
   {
      /*div1.style.display = "none";
      div2.style.display = "none";
      div3.style.display = "block";
      div4.style.display = "block"; */
   }
   else
   {
      div1.style.display = "none";
      div2.style.display = "block";
      div3.style.display = "none";
      div4.style.display = "none";
     
      head.style.display = "none";
      
   }
    
    
    
 
}
      
       
  var musicTracks = [
    "https://f.top4top.io/m_1206zylby1.mp3",
    "https://dl.dropbox.com/s/5jyylqps64nyoez/Legends%20never%20die.mp3?dl=0",
    "https://l.top4top.io/m_2781jvs9i1.mp3",
    "https://l.top4top.io/m_278833kt91.mp3",
    "https://dl.dropbox.com/s/1sw4ysdgmkb5dse/Salvation.mp3?dl=0" ,
  
  ];

  // Function to play a random track
  function playRandomTrack() {
    var randomIndex = Math.floor(Math.random() * musicTracks.length);
    var musicPlayer = document.getElementById("music");
    musicPlayer.src = musicTracks[randomIndex];
    musicPlayer.play();
  }

  // Call the function to play a random track on page load
  window.onload = playRandomTrack;
        
        
       // script.js
document.addEventListener("DOMContentLoaded", function() {
    const restartButton = document.getElementById("restart");

    restartButton.addEventListener("click", function() {
        // Reload the current webpage
        location.reload();
    });
});

         alert("Admin   SINH  \n ______   ______\n to Make Web By Codes \n HTML CSS JAVASCRIPT  PHP \n you go to learn HTML now to make a web \n E N D ");


