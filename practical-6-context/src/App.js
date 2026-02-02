import React from 'react';
import { LanguageProvider } from './LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

function App() {
  return (
    // Wrapping the entire app so all children can access the context
    <LanguageProvider>
      <div className="App">
        <LanguageSwitcher />
      </div>
    </LanguageProvider>
  );
}

export default App;