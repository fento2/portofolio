"use client";

import { createContext, useState, ReactNode } from "react";
import { useEffect } from "react";

interface ILanguageContext {
  language: string;
  setLanguage: (lang: string) => void;
}

export const LanguageContext = createContext<ILanguageContext>({
  language: "en",
  setLanguage: () => {},
});

interface ILanguageProvider {
  children: ReactNode;
}

function LanguageProvider(props: ILanguageProvider) {
  const [language, setLanguageState] = useState("en");

  //ambil di local storage
  useEffect(()=>{
    const savedLang = localStorage.getItem("language");
    if(savedLang){
      setLanguage(savedLang);
    }
  }, []); //cuman ambil sekali

  const setLanguage = (lang: string) => {
    setLanguageState(lang);
    localStorage.setItem("language", lang);
  }

  return (
    <LanguageContext value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext>
  );
}

export default LanguageProvider;
