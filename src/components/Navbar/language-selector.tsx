/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Input } from "@/components/ui/input";
import { ArrowLeft, Check, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface LanguageSelectorProps {
  languages: string[];
  selectedLanguage: string;
  onSelect: (language: string) => void;
  onClose: () => void;
  isMobile?: boolean;
}

export default function LanguageSelector({
  languages,
  selectedLanguage,
  onSelect,
  onClose,
  isMobile = false,
}: LanguageSelectorProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentLanguages, setRecentLanguages] = useState([
    selectedLanguage,
    selectedLanguage === "English" ? "Hindi" : "English",
  ]);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Focus the search input when the component mounts
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Add click outside listener to close the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  const filteredLanguages = languages.filter((language) =>
    language.toLowerCase().includes(searchQuery.toLowerCase())
  );

  if (isMobile) {
    return (
      <div className=" inset-0 bg-white z-50 overflow-auto" ref={containerRef}>
        <div className="sticky top-20 bg-white border-b z-10">
          <div className="flex items-center p-4">
            <button onClick={onClose} className="mr-4">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <Input
              ref={inputRef}
              type="text"
              placeholder="Search languages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-4"
              >
                <X className="h-5 w-5 text-gray-400" />
              </button>
            )}
          </div>
        </div>

        <div className="p-4">
          {searchQuery === "" && (
            <>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                Recent languages
              </h3>
              {recentLanguages.map((language) => (
                <div
                  key={language}
                  className="flex items-center justify-between py-3 px-1 cursor-pointer"
                  onClick={() => onSelect(language)}
                >
                  <span>{language}</span>
                  {language === selectedLanguage && (
                    <Check className="h-5 w-5 text-green-600" />
                  )}
                </div>
              ))}
              <div className="border-t my-4"></div>
              <h3 className="text-sm font-medium text-gray-500 mb-2">
                All languages
              </h3>
            </>
          )}

          {filteredLanguages.map((language) => (
            <div
              key={language}
              className="flex items-center justify-between py-3 px-1 cursor-pointer"
              onClick={() => onSelect(language)}
            >
              <span>{language}</span>
              {language === selectedLanguage && (
                <Check className="h-5 w-5 text-green-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div
      className="absolute z-50 mt-20 w-64 bg-white border rounded-md shadow-lg"
      ref={containerRef}
    >
      <div className="p-2">
        <Input
          ref={inputRef}
          type="text"
          placeholder="Search languages"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="mb-2"
        />

        <div className="max-h-80 overflow-y-auto">
          {searchQuery === "" && (
            <>
              <h3 className="text-xs font-medium text-gray-500 px-2 py-1">
                Recent languages
              </h3>
              {recentLanguages.map((language) => (
                <div
                  key={language}
                  className="flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded"
                  onClick={() => onSelect(language)}
                >
                  <span>{language}</span>
                  {language === selectedLanguage && (
                    <Check className="h-4 w-4 text-green-600" />
                  )}
                </div>
              ))}
              <div className="border-t my-1"></div>
              <h3 className="text-xs font-medium text-gray-500 px-2 py-1">
                All languages
              </h3>
            </>
          )}

          {filteredLanguages.map((language) => (
            <div
              key={language}
              className="flex items-center justify-between px-2 py-1.5 hover:bg-gray-100 cursor-pointer rounded"
              onClick={() => onSelect(language)}
            >
              <span>{language}</span>
              {language === selectedLanguage && (
                <Check className="h-4 w-4 text-green-600" />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
