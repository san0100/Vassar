const conversationElement = document.getElementById('conversation');
const messagesContainer = document.querySelector('.conversation');

const messages = [
    { text: "Greetings, esteemed Dean of Admissions! 🎓✨ I am delighted to share that I've stumbled upon someone truly magical within the realm of applicants.", speaker: "womp-womp" },
    { text: "Ah, my esteemed colleague! 🌟 Your discovery intrigues me. Tell me more about this magical find from our realm of applicants.", speaker: "dean" },
    { text: "Ah, wise Dean, it was no easy feat to unearth this gem. Yet, amidst the countless applications, the spark of this particular applicant stood out—a shimmering brilliance that set them apart.", speaker: "womp-womp" },
    { text: "Impressive work, Womp-Womp! Your discerning eye has proven invaluable. Illuminate for me the details of this applicant's extraordinary spark and what makes them a fitting addition to the enchanting halls of Vassar College.", speaker: "dean" },
    { text: "Ah, esteemed Dean, behold an extraordinary wizard! This applicant faced numerous challenges in their journey, yet emerged triumphant. Through sheer determination, they not only conquered adversities but also self-taught the magical art of coding, weaving spells with lines of code. A truly enchanting addition to Vassar College.", speaker: "womp-womp" },
    { text: "Marvelous news, Womp-Womp! Yet, I must inquire about the academic prowess and test scores of this exceptional wizard. Do their magical feats extend into the academic realm as well? 🧙‍♂️✉️", speaker: "dean" },
    { text: "Dear Dean, our exceptional wizard opted for test-optional and encountered a hurdle with a low GPA. Yet, after thorough research, I unearthed a different tale. Despite a brief academic setback, teachers from the past affirm this wizard's brilliance. Issues aside, their true potential shines, hidden beneath the surface.", speaker: "womp-womp" },
    { text: "Wise Dean, while I appreciate the magical potential, the question lingers: Can this wizard endure our rigorous academic curriculum despite the earlier challenges?", speaker: "dean" },
    { text: "Fear not, esteemed Dean! This remarkable wizard not only taught themselves programming but delved into extensive topics like cybersecurity. They've embarked on independent projects, conducted research, and displayed a myriad of talents. Rest assured, their magical prowess extends far beyond the classroom. You need not worry about their ability to navigate our rigorous academic realm. 📚🔮", speaker: "womp-womp" },
    { text: "Marvelous news, Womp-Womp! I am heartened to learn of this wizard's extraordinary talents and the breadth of their magical endeavors. It seems their capabilities are not only promising but exceed expectations. I shall eagerly await their arrival at Vassar College, where I believe their unique brilliance will flourish within our academic community. 🌙🧑‍🤝‍🧑", speaker: "dean" },
    { text: "Ah, esteemed Dean, your trust is well-placed. This wizard's journey promises to be a tapestry of magical achievements and unparalleled brilliance. I sense Vassar College will soon be graced with the enchanting presence of a student whose magic extends far beyond the ordinary. A truly extraordinary addition to our esteemed institution.", speaker: "womp-womp" },
    { text: "A magical journey indeed! Vassar College, where curiosity is the wand, and knowledge is the spell. Our wizard will thrive in this mystical realm. 🌟", speaker: "dean" },
    { text: "Dean, this student is not only magically brilliant but also a nice person. They help others, and, in a rather sarcastic way, they even feed me nuts! Now, that's a kind of magic we could all use.", speaker: "womp-womp" },
    { text: "Ah, truly a remarkable combination of talent and kindness! Welcome this extraordinary individual to our community. I shall instruct the admission committee to draft the acceptance letter with excitement.", speaker: "dean" },
    { text: "By the way, what's the name of this amazing wizard?", speaker: "dean" },
    { text: "His name is Sanil Dulal.", speaker: "womp-womp" },
    { text: "Also, Should I tell this news to Sanil Dulal right now? He will be so happy!", speaker: "womp-womp" },
    { text: "Hold on, Womp-Womp! Patience is a virtue. The acceptance letter should be sent in mid-March. Let's keep the magic alive until then!", speaker: "dean" },
    { text: "Exciting times ahead, Womp-Womp! Our magical journey with Sanil Dulal is about to begin. Let's eagerly anticipate the day when Vassar College welcomes this extraordinary wizard into its enchanting halls. Until then, may the magic of acceptance be ever in our favor! 🌟✉️", speaker: "dean" },

];



let index = 0;

function displayMessage() {
    if (index < messages.length) {
        const message = messages[index];

        if (message.speaker === "womp-womp" || message.speaker === "dean") {
            showMessageWithTyping(message);
        } else {
            showMessage(message);
        }
    }
}

function showMessage(message) {
    const messageElement = createMessageElement(message);

    messagesContainer.appendChild(messageElement);

 
    animateMessages();


    messagesContainer.scrollTop = messagesContainer.scrollHeight;

   
    setTimeout(() => {
        index++;
        displayMessage();
    }, 18000);
}

function showMessageWithTyping(message) {
    const messageElement = createMessageElement(message);


    messagesContainer.appendChild(messageElement);

 
    animateMessages();

    
    messagesContainer.scrollTop = messagesContainer.scrollHeight;

    setTimeout(() => {
        simulateTyping(() => {
          
         
            index++;
            displayMessage();
        });
    }, 2000); 
}

function animateMessages() {
    const messageElements = document.querySelectorAll('.message');
    messageElements.forEach((message, index) => {
        message.style.transition = 'transform 0.5s';
        message.style.transform = `translateY(0)`; 
    });
}

function simulateTyping(callback) {
    const typingIndicator = document.createElement('div');
    typingIndicator.classList.add('typing-indicator');
    typingIndicator.textContent = 'Typing...';
    messagesContainer.appendChild(typingIndicator);

    setTimeout(() => {
        typingIndicator.remove();
        callback();
    }, 13000); 
}

function createMessageElement(message) {
    const messageElement = document.createElement('div');
    messageElement.classList.add('message');
    messageElement.textContent = message.text;

    const avatar = document.createElement('div');
    avatar.classList.add('avatar', message.speaker === 'womp-womp' ? 'sent' : 'received');
    avatar.id = message.speaker + '-avatar';
    messageElement.appendChild(avatar);

    return messageElement;
}


displayMessage();
