import { useState } from "react";
import { ThemeProvider } from "@/components/theme-provider";
import { ModeToggle } from "./components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/language-provider";
import HowTo from "@/components/HowTo";
import Title from "@/components/Title";
import { Input } from "@/components/ui/input";

function App() {
  const { translation } = useLanguage();

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
          {translation.createRoom}
        </Button>
        <Button className="bg-blue w-full" onClick={() => joinRoom()}>
          {translation.joinRoom}
        </Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
