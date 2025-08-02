import { useState, useEffect, useRef } from "react";
// Auth0 removed
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "./button";
import { ThemeToggle } from "./theme-toggle";
import { apiFetch } from '../../lib/apiFetch';

// Header component
export function Header() {
  // Simple session detection (cookie/localStorage)
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [clickedDropdown, setClickedDropdown] = useState<string | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    // Check for session flag in localStorage
    setIsAuthenticated(!!localStorage.getItem('manacle_session'));
  }, []);

  // Auto-hide header on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only hide header if user has scrolled down more than 50px
      if (currentScrollY < 50) {
        setIsHeaderVisible(true);
      } else {
        // Hide header when scrolling down, show when scrolling up
        if (currentScrollY > lastScrollY) {
          setIsHeaderVisible(false);
        } else {
          setIsHeaderVisible(true);
        }
      }

      setLastScrollY(currentScrollY);
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Handle clicks outside the dropdown to close it
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (clickedDropdown &&
        !Object.values(dropdownRefs.current).some(ref =>
          ref && ref.contains(event.target as Node)
        )) {
        setClickedDropdown(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [clickedDropdown]);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current);
      }
    };
  }, []);

  // Toggle dropdown on click
  const handleDropdownClick = (itemName: string) => {
    if (clickedDropdown === itemName) {
      setClickedDropdown(null);
    } else {
      setClickedDropdown(itemName);
    }
  };

  // Determine if dropdown should be shown (either by hover or click)
  const isDropdownVisible = (itemName: string) => {
    return activeDropdown === itemName || clickedDropdown === itemName;
  };

  // Improved hover handlers with better timing
  const handleMouseEnter = (itemName: string) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
    if (!clickedDropdown) {
      setActiveDropdown(itemName);
    }
  };

  const handleMouseLeave = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
    }
    if (!clickedDropdown) {
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 300); // Increased delay to 300ms for better UX
    }
  };

  const handleDropdownMouseEnter = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleDropdownMouseLeave = () => {
    if (!clickedDropdown) {
      hoverTimeoutRef.current = setTimeout(() => {
        setActiveDropdown(null);
      }, 150); // Shorter delay when leaving dropdown
    }
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "AI Website Builder", href: "/auto-site", highlight: true },
    {
      name: "Services",
      href: "/services",
      hasDropdown: true,
      dropdownContent: {
        categories: [
          {
            title: "Web Services",
            items: [
              {
                name: "Web Design & Development",
                description: "Custom responsive websites",
                href: "/services/website-development"
              },
              {
                name: "Website Maintenance",
                description: "Ongoing support & updates",
                href: "/services/website-maintenance"
              },
              {
                name: "Hosting Services",
                description: "Reliable hosting solutions",
                href: "/services/hosting"
              },
            ],
          },
          {
            title: "Marketing & Design",
            items: [
              {
                name: "Search Engine Optimization",
                description: "Boost your online visibility",
                href: "/services/seo-services"
              },
              {
                name: "Content Creation",
                description: "Engaging content that converts",
                href: "/services/content-creation"
              },
              {
                name: "Branding & Design",
                description: "Creative visual solutions",
                href: "/services"
              },
            ],
          },
          {
            title: "Support",
            items: [
              {
                name: "Technical Support",
                description: "24/7 assistance",
                href: "/services"
              },
              {
                name: "Website Updates",
                description: "Keep your site current",
                href: "/services/website-maintenance"
              },
              {
                name: "Performance Optimization",
                description: "Speed improvements",
                href: "/services"
              },
            ],
          },
        ],
      },
    },
    {
      name: "Portfolio",
      href: "/gallery",
      hasDropdown: true,
      dropdownContent: {
        categories: [
          {
            title: "Our Work",
            items: [
              { name: "Portfolio Gallery", description: "View all our projects", href: "/gallery" },
              { name: "Healthcare Projects", description: "Medical & pharmaceutical sites", href: "/gallery" },
              { name: "Educational Platforms", description: "Learning & training websites", href: "/gallery" },
            ],
          },
          {
            title: "By Industry",
            items: [
              { name: "E-commerce", description: "Online stores & shops", href: "/gallery" },
              { name: "Non-Profit Organizations", description: "NGO & community sites", href: "/gallery" },
              { name: "Business Services", description: "Professional service sites", href: "/gallery" },
            ],
          },
        ],
      },
    },
    { name: "About", href: "/about-us" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 py-3 md:py-3 lg:py-4 xl:py-4 transition-transform duration-300 ease-in-out backdrop-blur-md bg-background/80 ${isHeaderVisible ? 'transform translate-y-0' : 'transform -translate-y-full'
      }`}>
      <div className="container mx-auto px-4 md:px-5 lg:px-6 xl:px-4">
        <div className="flex items-center justify-between">
          {/* Logo & Company Name - Responsive sizing */}
          {/* Logo & Company Name - Responsive sizing */}
          <div className="flex items-center">
            <a href="/" className="flex items-center group">
              {/* Logo */}
              {/* <img
                src="/manacle_logo.png"
                alt="Manacle Logo"
                className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 xl:w-24 xl:h-12 object-contain mr-2"
              /> */}
              {/* Heading and tagline inline */}
              <div className="flex flex-col justify-center">
                <span className="text-lg md:text-xl lg:text-2xl xl:text-3xl font-black bg-gradient-to-r from-orange-500 to-yellow-400 bg-clip-text text-transparent tracking-wider leading-tight">
                  MANACLE
                </span>
                <span className="text-xs md:text-sm lg:text-sm xl:text-base text-foreground/60 font-medium leading-tight">
                  A bond to deliver Success
                </span>
              </div>
            </a>
          </div>

          {/* Centered Navigation Menu - Responsive */}
          <div className="hidden md:flex flex-1 justify-center">
            <nav className="bg-card/90 backdrop-blur-xl border border-glass-border rounded-full px-4 md:px-5 lg:px-6 xl:px-7 py-2 md:py-2 lg:py-2.5 xl:py-2.5 shadow-lg scale-100 md:scale-105 lg:scale-110 xl:scale-110 transform">
              <div className="flex items-center space-x-4 md:space-x-5 lg:space-x-6 xl:space-x-8">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    className="relative"
                    ref={item.hasDropdown ? (node) => {
                      dropdownRefs.current[item.name] = node;
                    } : null}
                    onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.name)}
                    onMouseLeave={() => item.hasDropdown && handleMouseLeave()}
                  >
                    <div className="flex items-center">
                      <a
                        href={item.href}
                        className={`${item.highlight
                          ? "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-extrabold"
                          : "text-foreground hover:text-primary"
                          } transition-colors duration-300 relative group font-bold text-sm md:text-sm lg:text-base xl:text-base`}
                      >
                        {item.name}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full"></span>
                      </a>
                      {item.hasDropdown && (
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            handleDropdownClick(item.name);
                          }}
                          className="ml-1 text-foreground hover:text-primary transition-colors duration-300"
                        >
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${isDropdownVisible(item.name) ? "rotate-180" : ""
                              }`}
                          />
                        </button>
                      )}
                    </div>

                    {/* Mega Menu Dropdown */}
                    {item.hasDropdown && isDropdownVisible(item.name) && (
                      <>
                        {/* Invisible bridge to prevent dropdown from closing */}
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 w-[480px] md:w-[520px] lg:w-[580px] xl:w-[600px] h-3 z-40"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        />
                        <div
                          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3 w-[480px] md:w-[520px] lg:w-[580px] xl:w-[600px] glass-effect border border-glass-border rounded-2xl p-4 md:p-5 lg:p-6 xl:p-6 shadow-2xl z-50 bg-card/95 backdrop-blur-xl"
                          onMouseEnter={handleDropdownMouseEnter}
                          onMouseLeave={handleDropdownMouseLeave}
                        >
                          <div className="grid grid-cols-3 gap-4 md:gap-5 lg:gap-6 xl:gap-6">
                            {item.dropdownContent?.categories.map(
                              (category, index) => (
                                <div key={index} className="space-y-3 md:space-y-3 lg:space-y-4 xl:space-y-4">
                                  <h3 className="font-bold text-base md:text-base lg:text-lg xl:text-lg gradient-text mb-2 md:mb-2 lg:mb-3 xl:mb-3">
                                    {category.title}
                                  </h3>
                                  <ul className="space-y-2 md:space-y-2 lg:space-y-3 xl:space-y-3">
                                    {category.items.map((subItem, subIndex) => (
                                      <li key={subIndex}>
                                        <a
                                          href={subItem.href || `#${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}
                                          className="block group/item"
                                          onClick={() => {
                                            setClickedDropdown(null);
                                            setActiveDropdown(null);
                                          }}
                                        >
                                          <div className="font-medium text-sm md:text-sm lg:text-base xl:text-base text-foreground group-hover/item:text-primary transition-colors duration-200">
                                            {subItem.name}
                                          </div>
                                          <div className="text-xs md:text-xs lg:text-sm xl:text-sm text-foreground/80 group-hover/item:text-foreground transition-colors duration-200">
                                            {subItem.description}
                                          </div>
                                        </a>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ),
                            )}
                          </div>

                          {/* Featured Section */}
                          <div className="mt-4 md:mt-5 lg:mt-6 xl:mt-6 pt-4 md:pt-5 lg:pt-6 xl:pt-6 border-t border-glass-border">
                            <div className="flex items-center justify-between">
                              <div>
                                <h4 className="font-bold text-foreground mb-1 text-sm md:text-sm lg:text-base xl:text-base">
                                  Ready to start your project?
                                </h4>
                                <p className="text-xs md:text-xs lg:text-sm xl:text-sm text-foreground/70">
                                  Let's discuss your requirements and bring your vision
                                  to life.
                                </p>
                              </div>
                              <Button
                                size="sm"
                                className="bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all duration-300 text-xs md:text-xs lg:text-sm xl:text-sm"
                                onClick={() => {
                                  setClickedDropdown(null);
                                  window.location.href = '/contact-us';
                                }}
                              >
                                Get A Quote
                              </Button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </nav>
          </div>

          {/* Right Side Elements - Separated and Responsive */}
          <div className="hidden md:flex items-center">
            {/* Theme Toggle - Separated with responsive spacing */}
            <div className="mr-3 md:mr-4 lg:mr-5 xl:mr-6">
              <ThemeToggle />
            </div>
            {/* Auth Buttons */}
            <div className="flex items-center space-x-2 md:space-x-3 lg:space-x-4 xl:space-x-4">
              {isAuthenticated ? (
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs md:text-xs lg:text-sm xl:text-sm px-3 md:px-3 lg:px-4 xl:px-4 py-1.5 md:py-1.5 lg:py-2 xl:py-2"
                  onClick={() => {
                    // Remove session flag and call logout API
                    localStorage.removeItem('manacle_session');
                    apiFetch('/api/logout').then(() => {
                      window.location.reload();
                    });
                  }}
                >
                  Logout
                </Button>
              ) : (
                <>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-primary to-accent text-xs md:text-xs lg:text-sm xl:text-sm px-3 md:px-3 lg:px-4 xl:px-4 py-1.5 md:py-1.5 lg:py-2 xl:py-2"
                    onClick={() => window.location.href = '/login'}
                  >
                    Login
                  </Button>
                  <Button
                    size="sm"
                    className="bg-gradient-to-r from-[#8A2BE2] to-[#4169E1] text-white text-xs md:text-xs lg:text-sm xl:text-sm px-3 md:px-3 lg:px-4 xl:px-4 py-1.5 md:py-1.5 lg:py-2 xl:py-2"
                    onClick={() => window.location.href = '/signup'}
                  >
                    Sign Up
                  </Button>
                </>
              )}
            </div>
          </div>

          {/* Mobile Menu Button - Consistent with responsive design */}
          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className={`md:hidden absolute left-4 right-4 bg-card/95 backdrop-blur-xl border border-glass-border rounded-2xl max-h-[80vh] overflow-y-auto shadow-2xl transition-all duration-300 ${isHeaderVisible ? 'top-20' : 'top-4'
            }`}>
            <nav className="flex flex-col p-4">
              {navItems.map((item) => (
                <div key={item.name} className="py-2">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="text-foreground hover:text-primary transition-colors duration-300 font-bold flex items-center justify-between w-full"
                        onClick={() => handleDropdownClick(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${clickedDropdown === item.name ? "rotate-180" : ""}`} />
                      </button>

                      {/* Mobile Dropdown Content */}
                      {clickedDropdown === item.name && (
                        <div className="mt-3 ml-4 space-y-3 border-l border-glass-border pl-4">
                          {/* Add View All Services link for Services dropdown */}
                          {item.name === "Services" && (
                            <div className="mb-3">
                              <a
                                href={item.href}
                                className="text-sm font-semibold text-primary hover:text-accent transition-colors duration-200 flex items-center"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                → View All Services
                              </a>
                            </div>
                          )}
                          {item.dropdownContent?.categories.map(
                            (category, index) => (
                              <div key={index}>
                                <h4 className="text-sm font-semibold text-primary mb-2">
                                  {category.title}
                                </h4>
                                <ul className="space-y-2">
                                  {category.items.map((subItem, subIndex) => (
                                    <li key={subIndex}>
                                      <a
                                        href={subItem.href || `#${subItem.name.toLowerCase().replace(/\s+/g, "-")}`}
                                        className="text-sm text-foreground/80 hover:text-foreground transition-colors duration-200"
                                        onClick={() => setIsMenuOpen(false)}
                                      >
                                        {subItem.name}
                                      </a>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ),
                          )}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="text-foreground hover:text-primary transition-colors duration-300 font-bold flex items-center justify-between"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  )}
                </div>
              ))}

              {/* Theme Toggle Section for Mobile */}
              <div className="mt-4 pt-4 border-t border-glass-border">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-foreground/80">Theme</span>
                  <ThemeToggle />
                </div>
              </div>

              {/* Auth Buttons for Mobile */}
              <div className="pt-4 border-t border-glass-border flex flex-col space-y-2">
                {isAuthenticated ? (
                  <Button
                    className="w-full bg-gradient-to-r from-red-500 to-orange-500 text-white transition-all duration-300 neon-glow"
                    onClick={() => {
                      localStorage.removeItem('manacle_session');
                      apiFetch('/api/logout').then(() => {
                        window.location.reload();
                      });
                    }}
                  >
                    Logout
                  </Button>
                ) : (
                  <>
                    <Button
                      className="w-full bg-gradient-to-r from-primary to-accent transition-all duration-300 neon-glow"
                      onClick={() => window.location.href = '/login'}
                    >
                      Login
                    </Button>
                    <Button
                      className="w-full bg-gradient-to-r from-[#8A2BE2] to-[#4169E1] text-white transition-all duration-300 neon-glow"
                      onClick={() => window.location.href = '/signup'}
                    >
                      Sign Up
                    </Button>
                  </>
                )}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
