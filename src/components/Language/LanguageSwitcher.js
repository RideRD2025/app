import React, { useState } from 'react';

const LanguageSwitcher = () => {
  const [currentLang, setCurrentLang] = useState('es');
  const [isOpen, setIsOpen] = useState(false);

  const languages = [
    { code: 'es', name: 'Español', flag: '🇩🇴' },
    { code: 'en', name: 'English', flag: '🇺🇸' }
  ];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const selectLanguage = (code) => {
    setCurrentLang(code);
    setIsOpen(false);
    // Aquí iría la lógica para cambiar el idioma de la app
  };

  const currentLanguage = languages.find(lang => lang.code === currentLang);

  return (
    <div className="relative inline-block text-left">
      <div>
        <button
          type="button"
          onClick={toggleDropdown}
          className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          id="language-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          <span className="mr-2">{currentLanguage.flag}</span>
          {currentLanguage.name}
          <svg className="w-5 h-5 ml-2 -mr-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="language-menu">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => selectLanguage(language.code)}
                className={`${currentLang === language.code ? 'bg-blue-100 text-blue-900' : 'text-gray-700'} group flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100`}
                role="menuitem"
              >
                <span className="mr-2 text-lg">{language.flag}</span>
                {language.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;

// DONE