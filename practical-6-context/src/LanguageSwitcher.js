import React, { useContext, useEffect } from 'react';
import { LanguageContext } from './LanguageContext';

const LanguageSwitcher = () => {
  // 3. Consume the Context
  const { lang, toggleLanguage } = useContext(LanguageContext);

  // 4. Use useEffect to update the Browser Tab Title (Side Effect)
  useEffect(() => {
    document.title = `Mode: ${lang}`;
    console.log(`Document title changed to: ${lang}`);
  }, [lang]); // Dependency array ensures this runs only when 'lang' changes

  return (
    <div style={containerStyle}>
      <h2>{lang === 'English' ? 'Language Preference Manager' : 'भाषा प्राथमिकता प्रबंधक'}</h2>
      <hr />
      <p style={{ fontSize: '1.2rem' }}>
        {lang === 'English' ? 'Current Language: ' : 'वर्तमान भाषा: '} 
        <strong>{lang}</strong>
      </p>
      
      <button onClick={toggleLanguage} style={btnStyle}>
        {lang === 'English' ? 'Switch to Hindi' : 'अंग्रेजी में बदलें'}
      </button>

      <div style={{ marginTop: '30px', color: '#666' }}>
        {lang === 'English' 
          ? 'Check the browser tab title above!' 
          : 'ऊपर ब्राउज़र टैब शीर्षक देखें!'}
      </div>
    </div>
  );
};

// Basic CSS-in-JS
const containerStyle = {
  textAlign: 'center',
  padding: '40px',
  border: '2px solid #0073aa',
  borderRadius: '15px',
  maxWidth: '400px',
  margin: '50px auto',
  backgroundColor: '#f9f9f9'
};

const btnStyle = {
  padding: '12px 24px',
  fontSize: '1rem',
  cursor: 'pointer',
  backgroundColor: '#0073aa',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  fontWeight: 'bold'
};

export default LanguageSwitcher;