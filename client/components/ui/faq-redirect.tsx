import { HelpCircle } from "lucide-react";

export function FAQRedirect() {
  return (
    <button
      onClick={() => window.location.href = '/faqs'}
      className="fixed bottom-6 lg:bottom-20 right-6 z-50 bg-gradient-to-r from-orange-500 to-yellow-400 hover:from-yellow-400 hover:to-orange-500 text-white px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 font-semibold"
    >
      <HelpCircle className="w-5 h-5" />
      FAQs
    </button>
  );
}