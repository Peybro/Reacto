import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LanguageToggle } from "./components/language-toggle";
import { LanguageProvider } from "./components/language-provider";

function App() {
  const [count, setCount] = useState(0);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="system" storageKey="vite-ui-language">
        <div className="flex justify-between">
          <h1 className="font-semibold" style={{ fontSize: "2.5rem" }}>
            <span className="text-red-foreground">r</span>
            <span className="text-blue-foreground">e</span>
            <span className="text-yellow-foreground">a</span>
            <span className="text-green-foreground">c</span>
            <span className="text-red-foreground">t</span>
            <span className="text-blue-foreground">o</span>
          </h1>
          <div className="flex gap-1">
            <Button variant="outline" size="icon">
              ?
            </Button>
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            <Button onClick={() => setCount((cn) => cn + 1)}>
              Clicked {count}x
            </Button>
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
