function getBotResponse(input) {
    //rock paper scissors
    if (input == "rock") 
    {
        return "paper";
    } 
    else if (input == "paper")
    {
        return "scissors";
    } 
    else if (input == "scissors")
    {
        return "rock";
    }



    else if (input == "what is ai")
    {
        return "Artificial intelligence is the simulation of human intelligence processes by machines, especially computer systems.";
    } 
    else if (input == "ai types")
    {
        return "AI types: reactive, limited memory, theory of mind, and self-aware.";
    }
    else if (input == "full form of ai")
    {
        return "Artificial Intelligence";
    } 
    else if (input == "what is iot")
    {
        return "The Internet of Things (IoT) describes the network of physical objects—“things”—that are embedded with sensors, software, and other technologies for the purpose of connecting and exchanging data with other devices and systems over the internet.";
    }
    else if (input == "full form of iot")
    {
        return "Internet of Things";
    } 
    else if (input == "purpose of iot")
    {
        return "The goal behind the Internet of things is to have devices that self report in real-time, improving efficiency and bringing important information to the surface more quickly than a system depending on human intervention.";
    } 
    else if (input == "what is nlp")
    {
        return "Natural Language Processing (NLP) Natural language processing strives to build machines that understand and respond to text or voice data—and respond with text or speech of their own—in much the same way humans do.";
    } 
    else if (input == "full form of nlp")
    {
        return "Natural Language Processing";
    } 
    else if (input == "how does it work")
    {
        return "It helps machines process and understand the human language so that they can automatically perform repetitive tasks. Examples include machine translation, summarization, ticket classification, and spell check.";
    } 
    else if (input == "example of nlp")
    {
        return "Arguably the best-known example of NLP, smart assistants such as Siri, Alexa and Cortana";
    } 
    else if (input == "what is api")
    {
        return "An application programming interface is a way for two or more computer programs to communicate with each other.";
    } 
    else if (input == "full form of api")
    {
        return "application programming interface";
    } 
    





    // Simple responses
    if (input == "hello") {
        return "Hello there!";
    } else if (input == "goodbye") {
        return "Talk to you later!";
    } else {
        return "Try asking something else!";
    }
}