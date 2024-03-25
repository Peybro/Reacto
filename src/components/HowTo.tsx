import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Title from "@/components/Title";

export default function HowTo() {
  return (
    <Dialog>
      <DialogTrigger>
        <Button variant="outline" size="icon">
          ?
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="mr-auto">
          <DialogTitle className="mr-auto">
            <Title />
          </DialogTitle>
          <DialogDescription>
            <h2 className="font-bold">Punkt über Punkt zum Sieg!</h2>
            <a
              href="https://www.gamefactory-spiele.com/punto"
              className="text-blue-foreground"
            >
              Ein Spiel von Bernhard Weber
            </a>
          </DialogDescription>
        </DialogHeader>
        <h3 className="font-bold">Ziel des Spiels</h3>
        <p>
          Vier, direkt nebeneinander liegende Karten{" "}
          <span className="text-red-foreground">derselben</span> Farbe in eine
          Reihe, Spalte oder Diagonale bringen.
        </p>
        <h3 className="font-bold">Wie wird gespielt?</h3>
        <p>
          Die Spielenden legen nacheinander die oberste Karte ihres gemischten
          Decks auf das Spielfeld. Dabei kann die Karte an jede beliebige Seite
          einer bereits gelegten Karte angelegt werden (gekennzeichnet durch die
          grauen Felder).
        </p>
        <p>
          Die zu legende Karte kann auch auf eine andere bereits gelegte Karte
          gelegt werden, wenn sie einen höheren Wert hat.
        </p>
        <p>
          Es wird empfohlen, das Spiel mit 4 Spielenden zu spielen. Es kann aber
          auch mit weniger gestartet werden.
        </p>
      </DialogContent>
    </Dialog>
  );
}
