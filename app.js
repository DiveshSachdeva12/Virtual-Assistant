const btn = document.getElementById("btn");
const siri = document.getElementById("voice"); 
const caption = document.getElementById("caption"); 
const spokenTextElement = document.createElement('p');

caption.style.display = "none";
siri.style.display = "none";
siri.appendChild(spokenTextElement);  

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  speechSynthesis.speak(utterance);
}

btn.addEventListener("click", () => {
caption.style.display = "block";
caption.style.color = "white";
caption.style.fontSize = "40px";
siri.style.display = "block";

setTimeout(() => {
  siri.style.display = "none";
  caption.style.display = "none";
  }, 6000);

  speak("Hello, I am Aura, your virtual assistant created by Divesh and Tanisha."); 

  const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
  recognition.lang = "en-US";
  recognition.start();

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    console.log(`You said: ${command}`);

    // Update spokenTextElement with recognized speech
    spokenTextElement.innerText = command;

    // Perform actions based on the command
    if (command.includes("open youtube")) {
      speak("Opening YouTube");
      window.open("https://www.youtube.com", "_blank");
    } 
    else if (command.includes("who are you ")) {
      speak("i am aura  , How can i help you ..!!");
    } 
    else if (command.includes("open facebook")) {
      speak("Opening Facebook");
      window.open("https://www.facebook.com", "_blank");
    } 
    else if (command.includes("open wikipedia")) {
      speak("Opening wikipedia");
      window.open("https://www.wikipedia.com", "_blank");
    } 
    else if (command.includes("open facebook")) {
      speak("Opening Facebook");
      window.open("https://www.facebook.com", "_blank");
    } 
    else if (command.includes("open twitter")) {
      speak("Opening Twitter");
      window.open("https://www.twitter.com", "_blank");
    }
    else if (command.includes("open instagram")) {
      speak("Opening Instagram");
      window.open("https://www.instagram.com", "_blank");
    } 
    else if (command.includes("open linkedin")) {
      speak("Opening LinkedIn");
      window.open("https://www.linkedin.com", "_blank");
    }
    else if (command.includes("play diljit dosanjh song")) {
      speak("Playing Diljit Dosanjh song on YouTube");
      window.open("https://youtu.be/dCmp56tSSmA?si=gLnJzIzeENQvT291", "_blank");
    }
    else if (command.includes("what's the time right now") || command.includes("what the time")) {
      const now = new Date();
      const timeString = now.toLocaleTimeString(); 
      speak(`The time right now is ${timeString}.`);
    } 
    else if (command.includes("when is diwali")) {
      speak("Diwali is on November 1, 2024.");
    } else if (command.includes("when is holi")) {
      speak("Holi is on March 25, 2024.");
    } else if (command.includes("when is dussehra")) {
      speak("Dussehra is on October 11, 2024.");

    }
    else if (command.includes("what's the day") || command.includes("what day is it")) {
      const now = new Date();
      const dayString = now.toLocaleDateString(undefined, { weekday: 'long' }); 
      speak(`Today is ${dayString}.`);
    }
    else if (command.includes("calculator")) {
      speak("Opening Calculator");
      window.open("https://www.calculator.net/", "_blank");
    } 
    else {
      speak("Command not recognized.");
    }
  };

  recognition.onerror = (event) => {
    console.error("Speak Correctly:", event.error);
  };
});
