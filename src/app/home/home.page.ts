import { Component, OnInit } from '@angular/core';
import { TextToSpeech } from '@capacitor-community/text-to-speech';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  inputText =
    'An easy way to convert text to voice that’s fast and straightforward – it’ll make your message more catchy and inclusive.';
  voices = [];
  selectedVoice = 0;
  pitch = 1.0;
  volume = 1.0;
  rate = 1.0;
  languages = [];
  constructor() {}
  async ngOnInit(): Promise<void> {
    TextToSpeech.getSupportedVoices().then((x) => {
      this.voices = x.voices;

      TextToSpeech.getSupportedLanguages().then((z) => {
        this.languages = z.languages;
      });
    });
  }
  selectVoice(ev: any) {
    this.selectedVoice = ev.detail.value;
  }
  pitchChange(ev: any) {
    this.pitch = ev.detail.value;
  }
  rateChange(ev: any) {
    this.rate = ev.detail.value;
  }
  volumeChange(ev: any) {
    this.volume = ev.detail.value;
  }
  pitchFormatter(value: number) {
    return value.toFixed(1);
  }
  voiceChange(ev: any) {
    this.pitch = ev.detail.value;
  }
  async speak(inputText: string) {
    await TextToSpeech.speak({
      text: inputText,
      lang: 'en-IN',
      rate: this.rate,
      pitch: this.pitch,
      volume: this.volume,
      voice: this.selectedVoice,
    });
  }
}
