import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/ThemeToggle";

import { Button } from "@/components/ui/button";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LanguageToggle } from "@/components/LanguageToggle";
import { LanguageProvider } from "@/components/language-provider";
import HowTo from "@/components/HowTo";
import Title from "@/components/Title";
import { Input } from "@/components/ui/input";

function App() {
  const [name, setName] = useState("");
  const [roomcode, setRoomcode] = useState("");

  function createRoom() {
    console.log("Creating room");
  }

  function joinRoom() {
    console.log("Joining room");
  }

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <LanguageProvider defaultLanguage="system" storageKey="vite-ui-language">
        <div className="flex justify-between">
          <Title />
          <div className="flex gap-1">
            <HowTo />
            <LanguageToggle />
            <ModeToggle />
          </div>
        </div>
        <div className="grid gap-1 xs:grid-cols-1 sm:grid-cols-2">
          <Input
            className=""
            value={name}
            onInput={(e) => setName(e.currentTarget.value)}
            placeholder="Name"
          />
          <Input
            className=""
            value={roomcode}
            onInput={(e) => setRoomcode(e.currentTarget.value)}
            placeholder="Lobby Code"
          />
          <Button className="bg-blue w-full" onClick={() => createRoom()}>
            Raum erstellen
          </Button>
          <Button className="bg-blue w-full" onClick={() => joinRoom()}>
            Raum beitreten
          </Button>
        </div>
        {/* <Card>
          <CardHeader>
            <CardTitle>Card Title</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent>
            
          </CardContent>
          <CardFooter>
            <p>Card Footer</p>
          </CardFooter>
        </Card> */}
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
