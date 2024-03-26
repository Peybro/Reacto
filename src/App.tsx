import { ModeToggle } from "./components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "@/components/LanguageToggle";
import { useLanguage } from "@/components/language-provider";
import HowTo from "@/components/HowTo";
import Title from "@/components/Title";
import { Input } from "@/components/ui/input";
import { useStore } from "@/components/store-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Player } from "./types";

function App() {
  const { store, setStore, addValue } = useStore();
  const { translation } = useLanguage();

  function createRoom(): void {
    const lobbyCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    addValue({
      host: { ...store.player },
      lobbyConnected: true,
      lobbyCode,
      players: [store.player],
    });
  }

  function joinRoom(): void {
    throw new Error("Function not implemented.");
  }

  function closeRoom(): void {
    addValue({ lobbyConnected: false, lobbyCode: "" });
  }

  function leaveRoom(): void {
    throw new Error("Function not implemented.");
  }

  function rename(player: Player): void {
    throw new Error("Function not implemented.");
  }

  function changeColor(e, uuid: string): void {
    throw new Error("Function not implemented.");
  }

  function kick(player: Player): void {
    throw new Error("Function not implemented.");
  }

  function startRound(): void {
    throw new Error("Function not implemented.");
  }

  function endRound(): void {
    throw new Error("Function not implemented.");
  }

  return (
    <>
      <div className="flex justify-between">
        <Title />
        <div className="flex gap-1">
          <HowTo modal={false} />
          <LanguageToggle />
          <ModeToggle />
        </div>
      </div>
      <div className="grid gap-1 xs:grid-cols-1 sm:grid-cols-2">
        <Input
          className=""
          value={store.player.name}
          onInput={(e) =>
            addValue({
              player: { ...store.player, name: e.currentTarget.value },
            })
          }
          placeholder="Name"
          disabled={store.lobbyConnected}
        />
        <Input
          className=""
          value={store.lobbyCode}
          onInput={(e) => addValue({ lobbyCode: e.currentTarget.value })}
          placeholder="Lobby Code"
          disabled={store.lobbyConnected}
        />
        {!store.lobbyConnected && (
          <>
            <Button className="bg-blue w-full" onClick={() => createRoom()}>
              {translation.createRoom}
            </Button>
            <Button className="bg-blue w-full" onClick={() => joinRoom()}>
              {translation.joinRoom}
            </Button>
          </>
        )}

        {store.lobbyConnected && (
          <>
            <Button className="bg-red w-full" onClick={() => closeRoom()}>
              {translation.closeRoom}
            </Button>
            <Button className="bg-yellow w-full" onClick={() => leaveRoom()}>
              {translation.leaveRoom}
            </Button>
          </>
        )}
      </div>

      {!store.lobbyConnected && (
        <div>
          <p>{translation.notConnected}</p>
        </div>
      )}

      {store.lobbyConnected && (
        <>
          <h2>Spieler</h2>
          <div className="grid gap-1 xs:grid-cols-1 sm:grid-cols-4">
            {store.players.map((player, i) => {
              return (
                <DropdownMenu key={i}>
                  <DropdownMenuTrigger className="w-full" asChild>
                    <Button variant="outline">{player.name}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent className="w-full">
                    <DropdownMenuItem onClick={() => rename(player)}>
                      Umbenennen
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value="red"
                      onValueChange={(e) => changeColor(e, player.uuid)}
                    >
                      <DropdownMenuRadioItem value="red">
                        Rot
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="blue">
                        Blau
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="yellow">
                        Gelb
                      </DropdownMenuRadioItem>
                      <DropdownMenuRadioItem value="green">
                        Grün
                      </DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={() => kick(player)}>
                      Kick
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              );
            })}
            {Array.from({ length: 4 - store.players.length }).map((_, i) => {
              return (
                <Button key={i} className="w-full" disabled>
                  [unbesetzt]
                </Button>
              );
            })}
          </div>

          {store.host.uuid === store.player.uuid && (
            <>
              <p>{translation.waitingForPlayers.self}</p>
              <div className="flex gap-1">
                <Button className="bg-blue" onClick={() => startRound()}>
                  {translation.startGame.new}
                </Button>
                <Button
                  className="bg-dark text-yellow-foreground border border-yellow-400"
                  onClick={() => endRound()}
                >
                  {translation.endRound}
                </Button>
              </div>
            </>
          )}
        </>
      )}
    </>
  );
}

export default App;
