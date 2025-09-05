
import { FaGlobe } from "react-icons/fa";

type LanguageSelectorPageProps = {
  onSelect: (lang: string) => void;
};

const languages = [
  { code: "en", name: "English" },
  { code: "hi", name: "Hindi" },
  { code: "ja", name: "Japanese" },
  { code: "es", name: "Spanish" },
  { code: "fr", name: "French" },
  { code: "de", name: "German" },
];

export default function LanguageSelector({ onSelect }: LanguageSelectorPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-indigo-950 to-purple-900 flex flex-col items-center justify-center px-4">
      {/* Card Container */}
      <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-lg w-full text-center border border-gray-200">
        {/* Heading */}
        <h1 className="text-3xl font-extrabold text-indigo-700 flex items-center justify-center gap-2">
          <FaGlobe className="text-indigo-700" />
          Choose Your Language
        </h1>
        <p className="mt-2 text-gray-600">
          Select a language to start learning
        </p>

        {/* Buttons */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => onSelect(lang.code)}
              className="px-4 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white font-semibold shadow hover:opacity-90 hover:scale-105 transform transition"
            >
              {lang.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
