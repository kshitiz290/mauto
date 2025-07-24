import { Moon, Sun } from "lucide-react";
import { Button } from "./button";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleTheme}
      className="w-10 h-10 p-0 relative group rounded-full bg-card/80 backdrop-blur-sm border border-glass-border hover:border-primary/50 hover:bg-primary/10 hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-110 active:scale-95"
      title="Toggle between light and dark theme"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
      
      {/* Sun icon */}
      <Sun className="h-[1.3rem] w-[1.3rem] rotate-0 scale-100 transition-all duration-500 dark:-rotate-90 dark:scale-0 text-foreground group-hover:text-primary" />
      
      {/* Moon icon */}
      <Moon className="absolute h-[1.3rem] w-[1.3rem] rotate-90 scale-0 transition-all duration-500 dark:rotate-0 dark:scale-100 text-foreground group-hover:text-primary" />
      
      {/* Accessibility */}
      <span className="sr-only">Toggle between light and dark theme</span>
      
      {/* Visual indicator - small dot */}
      <div className="absolute -top-1 -right-1 w-2 h-2 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
    </Button>
  );
}
