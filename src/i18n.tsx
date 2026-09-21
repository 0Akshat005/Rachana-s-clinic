import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Language = "en" | "mr" | "hi";
const dictionaries = {
  en: { home: "Home", services: "Services", conditions: "Conditions", about: "About", contact: "Contact", book: "Book appointment", call: "Call", whatsapp: "WhatsApp us", directions: "Directions", heroEyebrow: "Physiotherapy & rehabilitation · Manish Nagar, Nagpur", heroStart: "Care that gets you", heroEm: "moving again.", heroCopy: "Osteopathy, Matrix Rhythm Therapy, dry needling, Tecar & laser therapy and Pilates — personalised by Dr. Priyanka Chaitanya Helwatkkar in Manish Nagar, Nagpur.", openDays: "Open 7 days", concerns: "How can we help?", hours: "Hours", address: "Address", fullName: "Full name", mobile: "Mobile number", service: "Service", date: "Preferred date", time: "Time window", note: "A note for the clinic", consent: "I agree to be contacted about my appointment", submit: "Send appointment request", footer: "Helping Nagpur move better." },
  mr: { home: "मुख्यपृष्ठ", services: "सेवा", conditions: "समस्या", about: "आमच्याबद्दल", contact: "संपर्क", book: "अपॉइंटमेंट बुक करा", call: "कॉल", whatsapp: "व्हॉट्सअॅप", directions: "मार्ग", heroEyebrow: "फिजिओथेरपी व पुनर्वसन · मनीष नगर, नागपूर", heroStart: "तुम्हाला पुन्हा", heroEm: "सहज हालचाल करण्यासाठी काळजी.", heroCopy: "ऑस्टिओपॅथी, मॅट्रिक्स रिदम थेरपी, ड्राय नीडलिंग, टेकार, लेझर थेरपी आणि पिलाटेस.", openDays: "आठवड्याचे ७ दिवस खुले", concerns: "आम्ही कशी मदत करू?", hours: "वेळा", address: "पत्ता", fullName: "पूर्ण नाव", mobile: "मोबाईल क्रमांक", service: "सेवा", date: "पसंतीची तारीख", time: "वेळ", note: "क्लिनिकसाठी सूचना", consent: "अपॉइंटमेंटसाठी संपर्क साधण्यास माझी संमती आहे", submit: "अपॉइंटमेंट विनंती पाठवा", footer: "नागपूरला अधिक सहज हालचालीस मदत." },
  hi: { home: "होम", services: "सेवाएँ", conditions: "समस्याएँ", about: "परिचय", contact: "संपर्क", book: "अपॉइंटमेंट बुक करें", call: "कॉल", whatsapp: "व्हाट्सऐप", directions: "दिशा", heroEyebrow: "फिजियोथेरेपी और पुनर्वास · मनीष नगर, नागपुर", heroStart: "आपको फिर से", heroEm: "आसानी से चलने में मदद.", heroCopy: "ऑस्टियोपैथी, मैट्रिक्स रिदम थेरेपी, ड्राई नीडलिंग, टेकार, लेज़र थेरेपी और पिलाटेस।", openDays: "सप्ताह के 7 दिन खुले", concerns: "हम कैसे मदद कर सकते हैं?", hours: "समय", address: "पता", fullName: "पूरा नाम", mobile: "मोबाइल नंबर", service: "सेवा", date: "पसंदीदा तारीख", time: "समय", note: "क्लिनिक के लिए नोट", consent: "मैं अपनी अपॉइंटमेंट के लिए संपर्क किए जाने की सहमति देता/देती हूँ", submit: "अपॉइंटमेंट अनुरोध भेजें", footer: "नागपुर को बेहतर ढंग से चलने में मदद।" },
} as const;
type DictionaryKey = keyof typeof dictionaries.en;
type I18n = { language: Language; setLanguage: (language: Language) => void; t: (key: DictionaryKey) => string };
const I18nContext = createContext<I18n | null>(null);

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => (localStorage.getItem("rachana-language") as Language) || "en");
  useEffect(() => {
    localStorage.setItem("rachana-language", language);
    document.documentElement.lang = language;
  }, [language]);
  return <I18nContext.Provider value={{ language, setLanguage, t: (key) => dictionaries[language][key] }}>{children}</I18nContext.Provider>;
}
export function useI18n() { const value = useContext(I18nContext); if (!value) throw new Error("useI18n must be within provider"); return value; }
// Native-speaker proofreading required.
