import { useState, useEffect } from "react";
import { Button } from "./button";
import { Input } from "./input";
import { Search, Check, X, Loader2, Globe, ShoppingCart, ExternalLink } from "lucide-react";

interface DomainCheckResult {
  domain: string;
  available: boolean | null;
  loading: boolean;
  price?: string;
  suggestions?: string[];
}

interface PriceData {
  [key: string]: {
    USD: number;
    EUR: number;
    GBP: number;
    INR: number;
    AUD: number;
  };
}

export function DomainChecker() {
  const [domainInput, setDomainInput] = useState("");
  const [results, setResults] = useState<DomainCheckResult[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [currency, setCurrency] = useState("USD");
  const [currencySymbol, setCurrencySymbol] = useState("$");
  const [currencyChanged, setCurrencyChanged] = useState(false);

  // Base prices in different currencies
  const basePrices: PriceData = {
    ".com": {
      USD: 8.99,
      EUR: 8.29,
      GBP: 6.99,
      INR: 599,
      AUD: 12.99
    },
    ".net": {
      USD: 9.99,
      EUR: 9.29,
      GBP: 7.99,
      INR: 699,
      AUD: 13.99
    },
    ".org": {
      USD: 8.49,
      EUR: 7.99,
      GBP: 6.49,
      INR: 579,
      AUD: 11.99
    },
    ".io": {
      USD: 24.99,
      EUR: 22.99,
      GBP: 19.99,
      INR: 1999,
      AUD: 34.99
    },
    ".in": {
      USD: 5.99,
      EUR: 5.49,
      GBP: 4.99,
      INR: 399,
      AUD: 8.99
    }
  };

  const currencySymbols = {
    USD: "$",
    EUR: "€",
    GBP: "£",
    INR: "₹",
    AUD: "A$"
  };

  const extensions = [".com", ".net", ".org", ".io", ".in"];

  // Detect user's location and set currency accordingly
  useEffect(() => {
    // In a real implementation, you would use a geolocation API or browser locale
    // For this example, we'll detect based on browser language
    const detectCurrency = () => {
      const language = navigator.language || "en-US";

      if (language.includes("en-GB")) {
        setCurrency("GBP");
        setCurrencySymbol(currencySymbols.GBP);
      } else if (language.includes("en-AU")) {
        setCurrency("AUD");
        setCurrencySymbol(currencySymbols.AUD);
      } else if (language.includes("en-IN") || language.includes("hi")) {
        setCurrency("INR");
        setCurrencySymbol(currencySymbols.INR);
      } else if (language.includes("de") || language.includes("fr") || language.includes("es") || language.includes("it")) {
        setCurrency("EUR");
        setCurrencySymbol(currencySymbols.EUR);
      } else {
        setCurrency("USD");
        setCurrencySymbol(currencySymbols.USD);
      }
    };

    detectCurrency();
  }, []);

  // Format price with currency symbol
  const formatPrice = (extension: string) => {
    const price = basePrices[extension][currency as keyof typeof currencySymbols];
    return `${currencySymbol}${price}/yr`;
  };

  // Update all result prices when currency changes
  const updatePrices = () => {
    if (results.length > 0) {
      const updatedResults = results.map(result => {
        const ext = result.domain.substring(result.domain.lastIndexOf('.'));
        return {
          ...result,
          price: formatPrice(ext)
        };
      });
      setResults(updatedResults);
    }
  };

  // Generate domain suggestions when a domain is taken
  const generateDomainSuggestions = (baseDomain: string, extension: string): string[] => {
    const suggestions = [];
    const prefixes = ['get', 'my', 'the', 'new', 'best', 'pro', 'go', 'try'];
    const suffixes = ['app', 'hub', 'pro', 'online', 'web', 'site', 'now', 'today', 'hq', 'co'];
    const numbers = ['2024', '24', '1', '2', '3', 'x'];

    // Add prefix variations
    for (let i = 0; i < 2; i++) {
      suggestions.push(prefixes[Math.floor(Math.random() * prefixes.length)] + baseDomain + extension);
    }

    // Add suffix variations
    for (let i = 0; i < 2; i++) {
      suggestions.push(baseDomain + suffixes[Math.floor(Math.random() * suffixes.length)] + extension);
    }

    // Add number variations
    suggestions.push(baseDomain + numbers[Math.floor(Math.random() * numbers.length)] + extension);

    return suggestions.slice(0, 3); // Return top 3 suggestions
  };

  // More realistic domain availability checker
  const checkDomainAvailability = (domain: string, extension: string): boolean => {
    const fullDomain = domain + extension;

    // Common words/patterns that are likely to be taken
    const commonWords = [
      'google', 'facebook', 'amazon', 'microsoft', 'apple', 'twitter', 'instagram', 'youtube',
      'shop', 'store', 'buy', 'sell', 'home', 'web', 'site', 'online', 'digital', 'tech',
      'business', 'company', 'corp', 'inc', 'ltd', 'blog', 'news', 'media', 'app', 'mobile',
      'game', 'games', 'music', 'video', 'photo', 'food', 'travel', 'hotel', 'car', 'auto',
      'health', 'medical', 'doctor', 'fitness', 'sports', 'fashion', 'beauty', 'art', 'design',
      'marketing', 'seo', 'social', 'network', 'cloud', 'data', 'ai', 'ml', 'crypto', 'nft'
    ];

    // Check if domain contains common words
    const containsCommonWord = commonWords.some(word =>
      domain.toLowerCase().includes(word.toLowerCase())
    );

    // Short domains (1-4 characters) are very likely to be taken
    const isShort = domain.length <= 4;

    // Extension popularity affects availability
    const extensionTakenRate = {
      '.com': 0.85,  // 85% likely to be taken
      '.net': 0.65,  // 65% likely to be taken
      '.org': 0.55,  // 55% likely to be taken
      '.io': 0.70,   // 70% likely to be taken
      '.in': 0.45    // 45% likely to be taken
    };

    let takenProbability = extensionTakenRate[extension as keyof typeof extensionTakenRate] || 0.5;

    // Increase probability if contains common words
    if (containsCommonWord) {
      takenProbability += 0.2;
    }

    // Increase probability if short
    if (isShort) {
      takenProbability += 0.3;
    }

    // Dictionary words are more likely to be taken
    const isDictionaryWord = /^[a-z]+$/.test(domain.toLowerCase()) && domain.length >= 3 && domain.length <= 8;
    if (isDictionaryWord) {
      takenProbability += 0.15;
    }

    // Numbers and hyphens make it more likely to be available
    if (/[0-9-]/.test(domain)) {
      takenProbability -= 0.2;
    }

    // Very long domains are more likely to be available
    if (domain.length > 15) {
      takenProbability -= 0.3;
    }

    // Cap the probability
    takenProbability = Math.min(0.95, Math.max(0.05, takenProbability));

    // Return true if available (opposite of taken)
    return Math.random() > takenProbability;
  };

  // Redirect disabled; placeholder for future registrar integration
  const redirectToHostinger = (_domain: string) => {
    alert('Domain purchase flow disabled in production build.');
  };

  const handleCheck = (e: React.FormEvent) => {
    e.preventDefault();

    if (!domainInput.trim()) return;

    // Clean the domain name (remove any extensions if user added them)
    let cleanDomain = domainInput.trim().toLowerCase();
    extensions.forEach(ext => {
      if (cleanDomain.endsWith(ext)) {
        cleanDomain = cleanDomain.slice(0, -ext.length);
      }
    });

    // Start checking
    setIsChecking(true);

    // Create initial results with loading state
    const initialResults = extensions.map(ext => ({
      domain: cleanDomain + ext,
      available: null,
      loading: true,
      price: formatPrice(ext)
    }));

    setResults(initialResults);

    // Simulate API calls for domain checking with realistic availability
    extensions.forEach((ext, index) => {
      setTimeout(() => {
        setResults(prev => {
          const newResults = [...prev];
          const isAvailable = checkDomainAvailability(cleanDomain, ext);

          // Use realistic domain availability checker
          newResults[index] = {
            ...newResults[index],
            available: isAvailable,
            loading: false,
            suggestions: !isAvailable ? generateDomainSuggestions(cleanDomain, ext) : undefined
          };
          return newResults;
        });

        // Check if all domains have been checked
        if (index === extensions.length - 1) {
          setIsChecking(false);
        }
      }, 500 + (index * 300)); // Stagger the responses
    });
  };

  return (
    <div className="w-full py-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-3xl px-4 sm:px-8 md:px-12 border border-glass-border shadow-xl relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>

      <div className="max-w-4xl mx-auto relative">
        <div className="flex items-center justify-center mb-4">
          <div className="w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full flex items-center justify-center shadow-lg shadow-indigo-500/20 mr-4">
            <Globe className="h-8 w-8 text-white" />
          </div>
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-1">
              <span className="gradient-text">Find Your Perfect Domain</span>
            </h2>
            <p className="text-foreground/80">
              Check domain availability instantly and secure your online presence
            </p>
          </div>
        </div>

        <form onSubmit={handleCheck} className="relative mb-8 mt-8">
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input
                type="text"
                placeholder="Enter your domain name (e.g. yourbusiness)"
                className="pl-10 h-12 text-base shadow-md"
                value={domainInput}
                onChange={(e) => setDomainInput(e.target.value)}
              />
            </div>
            <Button
              type="submit"
              className="h-12 px-8 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg shadow-indigo-500/20"
              disabled={isChecking || !domainInput.trim()}
            >
              {isChecking ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Checking...
                </>
              ) : (
                "Check Availability"
              )}
            </Button>
          </div>

          {/* Popular extensions hint */}
          <div className="flex flex-wrap gap-2 mt-3 justify-center sm:justify-start">
            <span className="text-sm text-muted-foreground">Popular:</span>
            {[".com", ".net", ".org", ".in"].map((ext) => (
              <span
                key={ext}
                className="text-sm text-primary cursor-pointer hover:underline"
                onClick={() => setDomainInput(domainInput.trim() ? domainInput.trim() + ext : "")}
              >
                {ext}
              </span>
            ))}
          </div>
        </form>

        {results.length > 0 && (
          <div className="space-y-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-lg font-medium">Search Results:</h3>
              <div className="flex items-center gap-2">
                <span className="text-sm text-muted-foreground">Prices shown in:</span>
                {currencyChanged && (
                  <span className="text-xs text-green-500 animate-pulse">✓ Prices updated!</span>
                )}
                <select
                  className="text-sm bg-secondary/50 border border-glass-border rounded-md px-2 py-1"
                  value={currency}
                  onChange={(e) => {
                    const newCurrency = e.target.value as keyof typeof currencySymbols;
                    setCurrency(newCurrency);
                    setCurrencySymbol(currencySymbols[newCurrency]);

                    // Show currency change feedback
                    setCurrencyChanged(true);
                    setTimeout(() => setCurrencyChanged(false), 2000);

                    // Update all prices with the new currency immediately
                    if (results.length > 0) {
                      const updatedResults = results.map(result => {
                        const ext = result.domain.substring(result.domain.lastIndexOf('.'));
                        const newPrice = basePrices[ext][newCurrency];
                        return {
                          ...result,
                          price: `${currencySymbols[newCurrency]}${newPrice}/yr`
                        };
                      });
                      setResults(updatedResults);
                    }
                  }}
                >
                  <option value="USD">USD ($)</option>
                  <option value="EUR">EUR (€)</option>
                  <option value="GBP">GBP (£)</option>
                  <option value="INR">INR (₹)</option>
                  <option value="AUD">AUD (A$)</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
              {results.map((result) => (
                <div
                  key={result.domain}
                  className={`flex items-center justify-between p-4 rounded-lg border transition-all duration-300 ${result.loading
                      ? "bg-muted/30 border-muted"
                      : result.available
                        ? "bg-green-500/10 border-green-500/30 hover:border-green-500/50 hover:shadow-md"
                        : "bg-red-500/10 border-red-500/30"
                    }`}
                >
                  <div>
                    <span className="font-medium">{result.domain}</span>
                    {!result.loading && result.available && (
                      <div className="text-sm text-muted-foreground mt-1">
                        <span className="font-medium text-green-500">{result.price}</span>
                        <span className="text-xs ml-1">(Best Price)</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center">
                    {result.loading ? (
                      <Loader2 className="h-5 w-5 text-muted-foreground animate-spin" />
                    ) : result.available ? (
                      <div className="flex items-center gap-3">
                        <div className="flex items-center">
                          <span className="text-green-500 mr-2 text-sm">Available</span>
                          <Check className="h-5 w-5 text-green-500" />
                        </div>
                        <Button
                          size="sm"
                          className="h-8 bg-green-500 hover:bg-green-600 text-white"
                          onClick={() => redirectToHostinger(result.domain)}
                        >
                          <ShoppingCart className="h-3.5 w-3.5 mr-1" />
                          Select
                        </Button>
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <span className="text-red-500 mr-2 text-sm">Taken</span>
                        <X className="h-5 w-5 text-red-500" />
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {results.some(r => !r.loading && r.available) && (
              <div className="mt-6 flex justify-center">
                <Button
                  className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white px-8"
                  onClick={() => alert('Registrar checkout disabled. Save domains for manual registration.')}
                >
                  <ShoppingCart className="h-4 w-4 mr-2" />
                  Continue (Disabled)
                </Button>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 text-center text-sm text-muted-foreground">
          <p>
            Need help finding the perfect domain? <a href="#contact" className="text-primary hover:underline">Contact our experts</a>
          </p>
          <p className="mt-2 text-xs">
            Domain registrar integration disabled (Hostinger references removed)
          </p>
        </div>
      </div>
    </div>
  );
} 