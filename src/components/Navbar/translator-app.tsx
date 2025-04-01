/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useIsMobile } from "@/hooks/use-mobile";
import { LANGUAGES } from "@/utils/language.constant";
import {
  ArrowLeftRight,
  Copy,
  Edit,
  History,
  Menu,
  Mic,
  Settings,
  Star,
} from "lucide-react";
import { useEffect, useState } from "react";
import LanguageSelector from "./language-selector";

export default function TranslatorApp() {
  const [sourceText, setSourceText] = useState("");
  const [translatedText, setTranslatedText] = useState("");
  const [sourceLanguage, setSourceLanguage] = useState("English");
  const [targetLanguage, setTargetLanguage] = useState("Hindi");
  const [activeTab, setActiveTab] = useState("text");
  const [showSourceLanguages, setShowSourceLanguages] = useState(false);
  const [showTargetLanguages, setShowTargetLanguages] = useState(false);
  const isMobile = useIsMobile();

  // Simulate translation (in a real app, this would call an API)
  useEffect(() => {
    if (sourceText) {
      setTranslatedText(
        `This is a simulated translation from ${sourceLanguage} to ${targetLanguage}: "${sourceText}"`
      );
    } else {
      setTranslatedText("");
    }
  }, [sourceText, sourceLanguage, targetLanguage]);

  const handleSwapLanguages = () => {
    const temp = sourceLanguage;
    setSourceLanguage(targetLanguage);
    setTargetLanguage(temp);
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      {isMobile ? (
        <MobileLayout
          sourceText={sourceText}
          setSourceText={setSourceText}
          translatedText={translatedText}
          sourceLanguage={sourceLanguage}
          setSourceLanguage={setSourceLanguage}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showSourceLanguages={showSourceLanguages}
          setShowSourceLanguages={setShowSourceLanguages}
          showTargetLanguages={showTargetLanguages}
          setShowTargetLanguages={setShowTargetLanguages}
          handleSwapLanguages={handleSwapLanguages}
        />
      ) : (
        <DesktopLayout
          sourceText={sourceText}
          setSourceText={setSourceText}
          translatedText={translatedText}
          sourceLanguage={sourceLanguage}
          setSourceLanguage={setSourceLanguage}
          targetLanguage={targetLanguage}
          setTargetLanguage={setTargetLanguage}
          activeTab={activeTab}
          setActiveTab={setActiveTab}
          showSourceLanguages={showSourceLanguages}
          setShowSourceLanguages={setShowSourceLanguages}
          showTargetLanguages={showTargetLanguages}
          setShowTargetLanguages={setShowTargetLanguages}
          handleSwapLanguages={handleSwapLanguages}
        />
      )}
    </div>
  );
}

function DesktopLayout({
  sourceText,
  setSourceText,
  translatedText,
  sourceLanguage,
  setSourceLanguage,
  targetLanguage,
  setTargetLanguage,
  activeTab,
  setActiveTab,
  showSourceLanguages,
  setShowSourceLanguages,
  showTargetLanguages,
  setShowTargetLanguages,
  handleSwapLanguages,
}: any) {
  return (
    <div className="flex flex-col">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger
            value="text"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">🔤</span> Text
          </TabsTrigger>
          <TabsTrigger
            value="images"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">🖼️</span> Images
          </TabsTrigger>
          <TabsTrigger
            value="documents"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">📄</span> Documents
          </TabsTrigger>
          <TabsTrigger
            value="websites"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">🌐</span> Websites
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex gap-4 mb-2">
        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer text-blue-600 font-medium"
            onClick={() => setShowSourceLanguages(true)}
          >
            {sourceLanguage === "Detect language"
              ? "Detect language"
              : sourceLanguage}
          </div>
          {showSourceLanguages && (
            <LanguageSelector
              languages={LANGUAGES}
              selectedLanguage={sourceLanguage}
              onSelect={(lang) => {
                setSourceLanguage(lang);
                setShowSourceLanguages(false);
              }}
              onClose={() => setShowSourceLanguages(false)}
            />
          )}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleSwapLanguages}
          className="rounded-full"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </Button>

        <div className="flex items-center gap-2">
          <div
            className="cursor-pointer text-blue-600 font-medium"
            onClick={() => setShowTargetLanguages(true)}
          >
            {targetLanguage}
          </div>
          {showTargetLanguages && (
            <LanguageSelector
              languages={LANGUAGES.filter((lang) => lang !== "Detect language")}
              selectedLanguage={targetLanguage}
              onSelect={(lang) => {
                setTargetLanguage(lang);
                setShowTargetLanguages(false);
              }}
              onClose={() => setShowTargetLanguages(false)}
            />
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="border rounded-md bg-white">
          <textarea
            value={sourceText}
            onChange={(e) => setSourceText(e.target.value)}
            className="w-full h-64 p-4 resize-none focus:outline-none"
            placeholder="Enter text"
          />
          <div className="flex justify-between items-center p-2 border-t">
            <Button variant="ghost" size="icon">
              <Mic className="h-5 w-5 text-gray-500" />
            </Button>
            <div className="text-sm text-gray-500">
              {sourceText.length} / 5,000
            </div>
          </div>
        </div>

        <div className="border rounded-md bg-white">
          <div className="w-full h-64 p-4 overflow-auto">
            {translatedText || (
              <span className="text-gray-400">Translation</span>
            )}
          </div>
          <div className="flex justify-end items-center p-2 border-t">
            <Button variant="ghost" size="icon">
              <Copy className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-8 gap-12">
        <Button variant="ghost" className="flex flex-col items-center gap-2">
          <div className="w-12 p-4 h-12 rounded-full border flex items-center justify-center">
            <History className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-sm text-gray-600">History</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-2">
          <div className="w-12 p-4 h-12 rounded-full border flex items-center justify-center">
            <Star className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-sm text-gray-600">Saved</span>
        </Button>
      </div>
    </div>
  );
}

function MobileLayout({
  sourceText,
  setSourceText,
  translatedText,
  sourceLanguage,
  setSourceLanguage,
  targetLanguage,
  setTargetLanguage,
  activeTab,
  setActiveTab,
  showSourceLanguages,
  setShowSourceLanguages,
  showTargetLanguages,
  setShowTargetLanguages,
  handleSwapLanguages,
}: any) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Menu className="h-6 w-6" />
          <h1 className="text-xl font-medium">Translate</h1>
        </div>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <div className="w-6 h-6 grid grid-cols-3 gap-0.5">
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
              <div className="bg-gray-600 rounded-sm"></div>
            </div>
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-4">
        <TabsList className="bg-slate-100 p-1">
          <TabsTrigger
            value="text"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">🔤</span> Text
          </TabsTrigger>
          <TabsTrigger
            value="images"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">🖼️</span> Images
          </TabsTrigger>
          <TabsTrigger
            value="websites"
            className="data-[state=active]:bg-white data-[state=active]:shadow-sm flex items-center gap-2"
          >
            <span className="text-blue-600">🌐</span> Websites
          </TabsTrigger>
        </TabsList>
      </Tabs>

      <div className="flex justify-between items-center mb-4">
        <div
          className="cursor-pointer text-blue-600 font-medium"
          onClick={() => setShowSourceLanguages(true)}
        >
          {sourceLanguage}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={handleSwapLanguages}
          className="rounded-full"
        >
          <ArrowLeftRight className="h-4 w-4" />
        </Button>

        <div
          className="cursor-pointer text-blue-600 font-medium"
          onClick={() => setShowTargetLanguages(true)}
        >
          {targetLanguage}
        </div>
      </div>

      {showSourceLanguages && (
        <LanguageSelector
          languages={LANGUAGES}
          selectedLanguage={sourceLanguage}
          onSelect={(lang) => {
            setSourceLanguage(lang);
            setShowSourceLanguages(false);
          }}
          onClose={() => setShowSourceLanguages(false)}
          isMobile={true}
        />
      )}

      {showTargetLanguages && (
        <LanguageSelector
          languages={LANGUAGES.filter((lang) => lang !== "Detect language")}
          selectedLanguage={targetLanguage}
          onSelect={(lang) => {
            setTargetLanguage(lang);
            setShowTargetLanguages(false);
          }}
          onClose={() => setShowTargetLanguages(false)}
          isMobile={true}
        />
      )}

      <div className="border rounded-md bg-white mb-4">
        <textarea
          value={sourceText}
          onChange={(e) => setSourceText(e.target.value)}
          className="w-full h-40 p-4 resize-none focus:outline-none"
          placeholder="Enter text"
        />
        <div className="flex justify-between items-center p-2 border-t">
          <Button variant="ghost" size="icon">
            <Mic className="h-5 w-5 text-gray-500" />
          </Button>
          <div className="text-sm text-gray-500">
            {sourceText.length} / 5,000
          </div>
        </div>
      </div>

      <div className="border rounded-md bg-white mb-8">
        <div className="w-full min-h-20 p-4">
          {translatedText || <span className="text-gray-400">Translation</span>}
        </div>
        <div className="flex justify-end items-center p-2 border-t">
          <Button variant="ghost" size="icon">
            <Edit className="h-5 w-5 text-gray-500" />
          </Button>
          <Button variant="ghost" size="icon">
            <Copy className="h-5 w-5 text-gray-500" />
          </Button>
        </div>
      </div>

      <div className="flex justify-center gap-12">
        <Button variant="ghost" className="flex flex-col items-center gap-2">
          <div className="w-12 p-4 h-12 rounded-full border flex items-center justify-center">
            <History className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-sm text-gray-600">History</span>
        </Button>
        <Button variant="ghost" className="flex flex-col items-center gap-2">
          <div className="w-12 p-4 h-12 rounded-full border flex items-center justify-center">
            <Star className="h-6 w-6 text-gray-600" />
          </div>
          <span className="text-sm text-gray-600">Saved</span>
        </Button>
      </div>
    </div>
  );
}
