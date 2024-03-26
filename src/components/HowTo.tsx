import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { Button } from "@/components/ui/button";
import Title from "@/components/Title";
import { useLanguage } from "@/components/language-provider";

export default function HowTo({ modal }: { modal?: boolean }) {
  const { translation } = useLanguage();

  function Trigger() {
    return (
      <Button variant="outline" size="icon">
        ?
      </Button>
    );
  }

  function Description() {
    return (
      <>
        <h2 className="font-bold">{translation.subtitle}</h2>
        <a
          href="https://www.gamefactory-spiele.com/punto"
          className="text-blue-foreground"
        >
          {translation.by} Bernhard Weber
        </a>
      </>
    );
  }

  function Body() {
    return (
      <>
        <h3 className="font-bold">{translation.aim.title}</h3>
        <p>
          {translation.aim.text.map((description, index) => {
            return (
              <span
                key={index}
                className={index === 1 ? "text-red-foreground" : ""}
              >
                {description}{" "}
              </span>
            );
          })}
        </p>
        <h3 className="font-bold">{translation.rules.title}</h3>
        {translation.rules.text.map((description, index) => {
          return (
            <p key={index} className="mb-2">
              {description}
            </p>
          );
        })}
      </>
    );
  }

  return (
    <>
      {modal && (
        <Dialog>
          <DialogTrigger>
            <Trigger />
          </DialogTrigger>
          <DialogContent className="rounded-2xl">
            <DialogHeader className="text-left">
              <DialogTitle>
                <Title />
              </DialogTitle>
              <DialogDescription>
                <Description />
              </DialogDescription>
            </DialogHeader>
            <Body />
          </DialogContent>
        </Dialog>
      )}

      {!modal && (
        <Sheet>
          <SheetTrigger>
            <Trigger />
          </SheetTrigger>
          <SheetContent>
            <SheetHeader className="text-left">
              <SheetTitle>
                <Title />
              </SheetTitle>
              <SheetDescription>
                <Description />
              </SheetDescription>
            </SheetHeader>
            <Body />
          </SheetContent>
        </Sheet>
      )}
    </>
  );
}
