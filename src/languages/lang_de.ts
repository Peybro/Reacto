import type { Translation } from "@/types";

export const lang_de: Translation = {
  you: "Du",
  colors: {
    red: "Rot",
    blue: "Blau",
    green: "Grün",
    yellow: "Gelb",
  },
  subtitle: "Punkt über Punkt zum Sieg!",
  by: "Ein Spiel von",
  aim: {
    title: "Ziel des Spiels",
    text: [
      "Vier, direkt nebeneinander liegende Karten",
      "derselben",
      "Farbe in eine Reihe, Spalte oder Diagonale bringen.",
    ],
  },
  rules: {
    title: "Wie wird gespielt?",
    text: [
      "Die Spielenden legen nacheinander die oberste Karte ihres gemischten Decks auf das Spielfeld. Dabei kann die Karte an jede beliebige Seite einer bereits gelegten Karte angelegt werden (gekennzeichnet durch die grauen Felder).",
      "Die zu legende Karte kann auch auf eine andere bereits gelegte Karte gelegt werden, wenn sie einen höheren Wert hat.",
      "Es wird empfohlen, das Spiel mit 4 Spielenden zu spielen. Es kann aber auch mit weniger gestartet werden.",
    ],
  },
  back: "zurück",
  createRoom: "Raum erstellen",
  joinRoom: "Raum beitreten",
  closeRoom: "Raum schließen",
  leaveRoom: "Raum verlassen",
  players: "Spieler",
  waitingForPlayers: {
    self: "Warte darauf dass du die Runde beginnst...",
    others: "Warte darauf dass der Host die Runde beginnt...",
  },
  kick: "Kicken",
  free: "unbesetzt",
  startGame: {
    new: "Start",
    again: "Neustart",
  },
  endRound: "Runde beenden",
  turn: "Zug",
  yourTurn: "Du bist dran",
  notConnected: "Kein Raum verbunden",
  noMoreCards: "Runde zu Ende: Keine Karten mehr im Spiel!",
  toasts: {
    roomNotFound: "Raum nicht gefunden!",
    kick: "Du wurdest gekickt!",
    win: "hat gewonnen!",
    winnerWhenNoCards: "Es gewinnt der Spieler mit den meisten 3er-Reihen!",
    nameMissing: "Bitte gib einen Namen ein!",
    roomCodeNotValid: "Bitte gib einen gültigen Raumcode ein!",
    noMatchingRoom: "Es gibt keinen Raum mit diesem Code!",
    roomFull: "Dieser Raum ist bereits voll!",
    nameAlreadyTaken: "Es gibt bereits einen Spieler mit diesem Namen!",
    roundStarted:
      "Die Runde hat bereits begonnen! Bitte warte bis sie vorbei ist.",
    playerLeft: "hat den Raum verlassen!",
    playerJoined: {
      new: "hat den Raum betreten!",
      again: "ist wieder da!",
    },
  },
  shareText: "Freunde einladen",
  inviteText: "Willst du mit mir Punto spielen?",
  gameTypes: {
    one: "1-Spieler-Modus: Dein härtester Gegner bist du selbst.",
    two: "2-Spieler-Modus: Jeder spielt mit zwei Farben.",
    three: [
      "3-Spieler-Modus: Jeder spielt mit einer Farbe. Die",
      "vierte Farbe",
      "ist neutral und gewinnt nicht mit 4 in einer Reihe.",
    ],
    four: "4-Spieler-Modus: Jeder spielt mit einer Farbe.",
  },
  order: "Reihenfolge",
  winsWithThrees: ["gewinnt mit", "3er-Reihen"],
  reconnect: {
    title: "Ein älteres Spiel läuft noch. Möchtest du dich verbinden?",
    reconnect: "Verbinden",
    dismiss: "Verwerfen",
  },
  rename: "Umbenennen",
  theme: {
    light: "Hell",
    dark: "Dunkel",
    system: "System",
  },
};
