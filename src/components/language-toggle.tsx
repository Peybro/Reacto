import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="outline" size="icon">
          {language === "gb" && <span>🇬🇧</span>}
          {language === "fr" && <span>🇨🇵</span>}
          {language === "de" && <span>🇩🇪</span>}
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setLanguage("gb")}>
          🇬🇧 England
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("fr")}>
          🇨🇵 Frankreich
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("de")}>
          🇩🇪 Deutschland
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setLanguage("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
