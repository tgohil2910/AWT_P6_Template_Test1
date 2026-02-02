import React, { createContext, useState } from 'react';

// 1. Create the Context Object
export const LanguageContext = createContext();

// 2. Create the Provider Component
export const LanguageProvider = ({ children }) => {
  const [lang, setLang] = useState('English'); // Default state

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'English' ? 'Hindi' : 'English'));
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};