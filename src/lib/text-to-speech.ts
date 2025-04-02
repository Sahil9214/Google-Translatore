export interface TextToSpeechOptions {
  language?: string;
  voiceName?: string;
  rate?: number;
  pitch?: number;
  volume?: number;
  onStart?: () => void;
  onEnd?: () => void;
  onError?: (error: any) => void;
}

export class TextToSpeechService {
  private speechSynthesis: SpeechSynthesis | null = null;

  constructor() {
    if (typeof window !== "undefined") {
      // Browser environment check
      this.speechSynthesis = window.speechSynthesis;
    }
  }

  public isSupported(): boolean {
    return !!this.speechSynthesis;
  }

  public speak(text: string, options: TextToSpeechOptions = {}): void {
    if (!this.speechSynthesis) {
      if (options.onError) {
        options.onError(
          new Error("Speech synthesis not supported in this browser")
        );
      }
      return;
    }

    // Stop any current speech
    this.stop();

    // Create utterance
    const utterance = new SpeechSynthesisUtterance(text);

    // Configure options
    if (options.language) {
      utterance.lang = options.language;
    }

    if (options.rate !== undefined) {
      utterance.rate = Math.max(0.1, Math.min(options.rate, 10));
    }

    if (options.pitch !== undefined) {
      utterance.pitch = Math.max(0, Math.min(options.pitch, 2));
    }

    if (options.volume !== undefined) {
      utterance.volume = Math.max(0, Math.min(options.volume, 1));
    }

    // Set voice if specified
    if (options.voiceName && this.speechSynthesis.getVoices().length > 0) {
      const voices = this.speechSynthesis.getVoices();
      const voice = voices.find((v) => v.name === options.voiceName);
      if (voice) {
        utterance.voice = voice;
      }
    }

    // Set up callbacks
    utterance.onstart = options.onStart || (() => {});
    utterance.onend = options.onEnd || (() => {});
    utterance.onerror = (event) => {
      if (options.onError) {
        options.onError(event);
      }
    };

    // Speak the text
    this.speechSynthesis.speak(utterance);
  }

  public stop(): void {
    if (this.speechSynthesis) {
      this.speechSynthesis.cancel();
    }
  }

  public pause(): void {
    if (this.speechSynthesis) {
      this.speechSynthesis.pause();
    }
  }

  public resume(): void {
    if (this.speechSynthesis) {
      this.speechSynthesis.resume();
    }
  }

  public getVoices(): SpeechSynthesisVoice[] {
    return this.speechSynthesis ? this.speechSynthesis.getVoices() : [];
  }
}

// Singleton instance
export const textToSpeechService = new TextToSpeechService();

// Language code mapping (reusing the same mapping)
export const getLanguageCode = (language: string): string => {
  const languageMap: Record<string, string> = {
    English: "en-US",
    Spanish: "es-ES",
    French: "fr-FR",
    Hindi: "hi-IN",
    German: "de-DE",
    Italian: "it-IT",
    Portuguese: "pt-PT",
    Russian: "ru-RU",
    Japanese: "ja-JP",
    Chinese: "zh-CN",
    Korean: "ko-KR",
    Arabic: "ar-SA",
    // Add more mappings as needed
  };

  return languageMap[language] || "en-US";
};
