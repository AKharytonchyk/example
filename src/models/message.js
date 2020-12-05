class Message {
  constructor(text) {
    this.message = new SpeechSynthesisUtterance();
    const [voice] = window.speechSynthesis.getVoices();
    this.message.voice = voice;
    this.message.volume = 1; // From 0 to 1
    this.message.rate = 1; // From 0.1 to 10
    this.message.pitch = 2; // From 0 to 2
    this.message.text = text;
    this.message.lang = 'en';
  }

  play() {
    window.speechSynthesis.speak(this.message);
  }
}

export default Message;
