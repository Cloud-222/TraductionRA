"use client";

import React, { useState } from "react";
import { translateText } from "../services/translationService";
import languages from "../utils/languages.json";
import { IoCheckmarkOutline, IoCopyOutline } from "react-icons/io5";
import { TbArrowsExchange } from "react-icons/tb";

export default function BodyTranslation() {
  const [inputText, setInputText] = useState("");
  const [sourceLang, setSourceLang] = useState("fr");
  const [targetLang, setTargetLang] = useState("en");
  const [translatedText, setTranslatedText] = useState("");
  const [copied, setCopied] = useState(false);

  const handleTranslate = async () => {
    try {
      const translation = await translateText(
        inputText,
        sourceLang,
        targetLang
      );
      setTranslatedText(translation);
    } catch (error) {
      console.error("Translation error:", error);
      setTranslatedText("Translation error. Please try again.");
    }
  };

  const handleCopyText = () => {
    navigator.clipboard
      .writeText(translatedText)
      .then(() => {
        setCopied(true);
      })
      .catch((err) => {
        console.error("Copy error: ", err);
      });
  };

  const handleSwap = () => {
    const tempLang = sourceLang;
    setSourceLang(targetLang);
    setTargetLang(tempLang);
    setInputText(translatedText);
    setTranslatedText(inputText);
  };

  return (
    <div className="flex items-center flex-col mt-8">
      <div className="flex justify-center gap-8">
        <div className="custom-select-wrapper">
          <select
            id="sourceLang"
            value={sourceLang}
            onChange={(e) => setSourceLang(e.target.value)}
            className="custom-select"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>

        
        <button
          onClick={handleSwap}
          className="p-2 cursor-pointer"
          title="Swap Languages and Text"
        >
          <TbArrowsExchange
            className="text-gray-300 hover:transform hover:scale-110 duration-300"
            size={25}
          />
        </button>

        <div className="custom-select-wrapper">
          <select
            id="targetLang"
            value={targetLang}
            onChange={(e) => setTargetLang(e.target.value)}
            className="custom-select"
          >
            {languages.map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex justify-center gap-8 m-10">
        <textarea
          rows="5"
          className="w-80 border border-gray-300 rounded-md p-2"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Enter Text"
        />

        <div className="relative w-80">
          <textarea
            rows="5"
            className="w-full border border-gray-300 rounded-md p-2"
            value={translatedText}
            readOnly
            placeholder="Translated Text"
          />
          {translatedText && (
            <button
              onClick={handleCopyText}
              className="absolute top-2 right-2 p-2 cursor-pointer"
              title="Copy Text"
            >
              {copied ? (
                <IoCheckmarkOutline
                  className="text-gray-300 hover:transform hover:scale-110 duration-300"
                  size={20}
                />
              ) : (
                <IoCopyOutline
                  className="text-gray-300 hover:transform hover:scale-110 duration-300 hover:text-gray-300"
                  size={20}
                />
              )}
            </button>
          )}
        </div>
      </div>

      <button
        className="cursor-pointer group px-4 py-3 rounded-md text-white font-medium text-md hover:bg-white/5 border border-white/20 hover:border-white/30 hover:drop-shadow-[0_0_8px_rgba(255,255,255,1)]"
        onClick={() => {
          handleTranslate(inputText); 
          setCopied(false); 
        }}
      >
        Translate
      </button>
    </div>
  );
}
