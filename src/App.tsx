import { ModeToggle } from "@/components/ThemeToggle";
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
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Color, Player, colors } from "./types";

function App() {
  const { store, addValue } = useStore();
  const { translation } = useLanguage();

  function createRoom(): void {
    const lobbyCode = Math.random().toString(36).substring(2, 8).toUpperCase();
    addValue({
      host: { ...store.player },
      lobbyConnected: true,
      lobbyCode,
      players: [{ ...store.player, color: "red", deck: [], wins: 0 }],
    });
  }

  function joinRoom(): void {
    throw new Error("Function not implemented.");
  }

  function closeRoom(): void {
    addValue({
      lobbyConnected: false,
      lobbyCode: "",
      players: [],
      host: {},
      roundHasStarted: false,
    });
  }

  function leaveRoom(): void {
    throw new Error("Function not implemented.");
  }

  function rename(player: Player): void {
    console.log(player);
    throw new Error("Function not implemented.");
  }

  function changeColor(color: Color, uuid: string): void {
    addValue({
      players: store.players.map((player) => {
        if (player.uuid === uuid) {
          return { ...player, color: color };
        }
        return player;
      }),
    });
  }

  function kick(player: Player): void {
    console.log(player);
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
            <Button
              className="bg-blue w-full"
              onClick={() => createRoom()}
              disabled={store.player.name.trim() === ""}
            >
              {translation.createRoom}
            </Button>
            <Button
              className="bg-blue w-full"
              onClick={() => joinRoom()}
              disabled={
                store.lobbyCode.trim() === "" || store.lobbyCode.length !== 6
              }
            >
              {translation.joinRoom}
            </Button>
          </>
        )}

        {store.lobbyConnected && (
          <>
            <Button
              className="bg-dark text-red-foreground border border-red w-full"
              onClick={() => closeRoom()}
            >
              {translation.closeRoom}
            </Button>
            <Button
              className="bg-dark text-yellow-foreground border border-yellow w-full"
              onClick={() => leaveRoom()}
            >
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
                  <DropdownMenuTrigger className={`bg-${player.color}`} asChild>
                    <Button className="">{player.name}</Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent>
                    <DropdownMenuItem onClick={() => rename(player)}>
                      Umbenennen
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup
                      value={player.color as string}
                      onValueChange={(newVal) =>
                        changeColor(newVal as Color, player.uuid)
                      }
                    >
                      {colors.map((color) => {
                        return (
                          <DropdownMenuRadioItem
                            key={color}
                            value={color}
                            className={`text-${color}-foreground`}
                          >
                            {translation.colors[color]}
                          </DropdownMenuRadioItem>
                        );
                      })}
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
                  className="bg-dark text-yellow-foreground border border-yellow"
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
