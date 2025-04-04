/* eslint-disable @typescript-eslint/no-explicit-any */
export interface SpeechToTextOptions {
  language?: string;
  continuous?: boolean;
  interimResults?: boolean;
  onResult?: (transcript: string) => void;
  onError?: (error: any) => void;
  onEnd?: () => void;
}

export class SpeechToTextService {
  private recognition: any = null;
  private isListening: boolean = false;
  public isSupported(): boolean {
    return !!this.recognition;
  }

  public startListening(options: SpeechToTextOptions = {}): void {
    if (!this.recognition) {
      if (options.onError) {
        options.onError(
          new Error("Speech recognition not supported in this browser")
        );
      }
      return;
    }

    if (this.isListening) {
      this.stopListening();
    }

    // Configure recognition
    this.recognition.lang = options.language || "en-US";
    this.recognition.continuous = options.continuous || false;
    this.recognition.interimResults = options.interimResults || true;

    // Set up callbacks
    this.recognition.onresult = (event: any) => {
      const transcript = Array.from(event.results)
        .map((result: any) => result[0].transcript)
        .join("");

      if (options.onResult) {
        options.onResult(transcript);
      }
    };

    this.recognition.onerror = (event: any) => {
      if (options.onError) {
        options.onError(event.error);
      }
    };

    this.recognition.onend = () => {
      this.isListening = false;
      if (options.onEnd) {
        options.onEnd();
      }
    };

    // Start listening
    this.recognition.start();
    this.isListening = true;
  }

  public stopListening(): void {
    if (this.recognition && this.isListening) {
      this.recognition.stop();
      this.isListening = false;
    }
  }
}

// Singleton instance
export const speechToTextService = new SpeechToTextService();

// Language code mapping helper
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
