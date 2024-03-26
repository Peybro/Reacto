import { Card, Color, Player } from "@/types";
import { createContext, useContext, useEffect, useState } from "react";
import { v4 as uuidV4 } from "uuid";

type StoreProviderProps = {
  children: React.ReactNode;
};

type Store = {
  player: {
    name: string;
    uuid: string;
  };
  gameState: {
    board: Card[][];
    turn: number;
    currentPlayerIndex: number;
  };
  invitation: {
    title: string;
    text: string;
    url: string;
  };
  lobbyCode: string;
  lobbyConnected: boolean;
  host: {
    name: string;
    uuid: string;
  };
  players: Player[];
  roundHasStarted: boolean;
  codeCopied: boolean;
  infoVisible: boolean;
  neutralColor: Color;
  playersOnline: string[];
  winnerWithThrees: [string, number];
  oldGame: StoreProviderProps | object;
  renameInProgress: boolean;
};

type StoreProviderState = {
  store: Store;
  setStore: (store: Store) => void;
  addValue: (storeVal: any) => void;
};

const initialStore: Store = {
  player: {
    name: JSON.parse(localStorage.getItem("localPlayer") ?? "{}").name || "",
    uuid:
      JSON.parse(localStorage.getItem("localPlayer") ?? "{}").uuid || uuidV4(),
  },
  gameState: {
    board: Array(11).fill(Array(11).fill({ value: 0, color: null })),
    turn: 0,
    currentPlayerIndex: 0,
  },
  invitation: {
    title: "Punto",
    text: "Let's play Punto!",
    url: "https://punto.vercel.app",
  },
  lobbyCode: "",
  lobbyConnected: false,
  host: {
    name: "",
    uuid: "",
  },
  players: [],
  roundHasStarted: false,
  codeCopied: false,
  infoVisible: true,
  neutralColor: null,
  playersOnline: [],
  winnerWithThrees: ["", 0],
  oldGame: {},
  renameInProgress: false,
};

const initialState: StoreProviderState = {
  store: initialStore,
  setStore: () => null,
  addValue: () => null,
};

const StoreProviderContext = createContext<StoreProviderState>(initialState);

export function StoreProvider({ children, ...props }: StoreProviderProps) {
  const [store, setStore] = useState<Store>(initialStore);

  useEffect(() => {
    localStorage.setItem("localPlayer", JSON.stringify(store.player));
  }, [store]);

  const value = {
    store,
    setStore: (newtore: Store) => {
      setStore(newtore);
    },
    addValue: (storeVal: Store) => {
      setStore((prevStore) => ({ ...prevStore, ...storeVal }));
    },
  };

  return (
    <StoreProviderContext.Provider {...props} value={value}>
      {children}
    </StoreProviderContext.Provider>
  );
}

export const useStore = () => {
  const context = useContext(StoreProviderContext);

  if (context === undefined)
    throw new Error("useStore must be used within a StoreProvider");

  return context;
};
