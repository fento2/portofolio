"use client";

import { createContext, useState, ReactNode } from "react";

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
  const [language, setLanguage] = useState("en");

  return (
    <LanguageContext value={{ language, setLanguage }}>
      {props.children}
    </LanguageContext>
  );
}

export default LanguageProvider;
