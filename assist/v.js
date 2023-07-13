const btn=document.getElementById('btn');

const SpeechRecognition=window.SpeechRecognition || window.webkitSpeechRecognition;
const recognition= new SpeechRecognition();

recognition.onstart=function()
{
    console.log('You Can Speak Now!!!');
}

recognition.onresult=function(event)
{
    var text=event.results[0][0].transcript;
    console.log(text);
    document.getElementById('result').innerHTML=text;
    read(text);
}

function read(text)
{
    var speech=new SpeechSynthesisUtterance();
    speech.text=text;
    if(text.includes('time'))
    speech.text='It is'+new Date().getHours()+""+new Date().getMinutes()+"right now"
    else if(text.includes('my birthday'))
    speech.text='Do you think you\re famous! How would I Know your Birthday!';
    else if(text.includes('love me'))
    speech.text='Sorry But I Think We Are Better Being Friends Sorry For Any Inconvenience';
    else if(text.includes('what is your name'))
    speech.text='My name is BR Your Personal Assistant';
    else if(text.includes('what is AI'))
    speech.text='Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.';
    else if(text.includes('full form of AI'))
    speech.text='Artificial intelligence';
    else if(text.includes('AI type'))
    speech.text='AI types: reactive, limited memory, theory of mind, and self-aware.';
    else if(text.includes('what is iot'))
    speech.text='The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.';
    else if(text.includes('purpose of iot'))
    speech.text='The goal behind the Internet of things is to have devices that self report in real-time, improving efficiency and bringing important information to the surface more quickly than a system depending on human intervention.';
    else if(text.includes('what is NLP'))
    speech.text='Natural Language Processing (NLP) Natural language processing strives to build machines that understand and respond to text or voice data—and respond with text or speech of their own—in much the same way humans do.';
    else if(text.includes('full form of NLP'))
    speech.text='Natural Language Processing';
    else if(text.includes('example of NLP'))
    speech.text='Arguably the best-known example of NLP, smart assistants such as Siri, Alexa and Cortana';
    else if(text.includes('what is API'))
    speech.text='An application programming interface is a way for two or more computer programs to communicate with each other.';
    else if(text.includes('full form of API'))
    speech.text='application programming interface';
    window.speechSynthesis.speak(speech);


}