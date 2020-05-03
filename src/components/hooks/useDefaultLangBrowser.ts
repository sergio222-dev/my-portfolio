const useDefaultLangBrowser = () => {
  const lang = navigator.language;
  const affixLang = lang.substr(0, 2);
  return affixLang === 'es' ? 'es' : 'en';
};

export default useDefaultLangBrowser;
