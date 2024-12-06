import { Hero } from "../components/Hero";
import { Campaign } from "../components/Campaign";
import { Media } from "../components/Media";
import { About } from "../components/About";
import { Contact } from "../components/Contact";
import { ScrollArea } from "@/components/ui/scroll-area";

export default function Home() {
  return (
    <ScrollArea className="h-screen w-full">
      <main className="flex flex-col min-h-screen">
        <Hero />
        <Campaign />
        <Media />
        <About />
        <Contact />
      </main>
    </ScrollArea>
  );
}
