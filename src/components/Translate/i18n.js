import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    debug: true,
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      en: {
        translation: {
          description: {
            part: 'Chipchop Amsterdam was founded in 2015 by Ma­rc Lineham. Yet it was way earlier that the self-taught hobbyist started gaining professional woodworking experience: pretty much at the same time as he started growing his iconic beard. Through his constant delivery of high-quality furniture, bespoke shop displays and stylish interior designs, he kept his customers coming back for more.',
          }
        }
      },
      nl: {
        translation: {
          description: {
            part: 'Chipchop Amsterdam is in 2015 opgericht door Marc Lineham. Toch was het veel eerder dat de autodidactische hobbyist begon met het opdoen van professionele houtbewerkingservaring: ongeveer op hetzelfde moment dat hij zijn iconische baard begon te laten groeien. Door zijn constante levering van meubilair van hoge kwaliteit, op maat gemaakte winkeldisplays en stijlvolle interieurontwerpen, zorgde hij ervoor dat zijn klanten terug bleven komen voor meer.',
          }
        }
      }
    }
  });

export default i18n;