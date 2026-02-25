import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Story from "@/components/Story";
import Products from "@/components/Products";
import PromptLibrary from "@/components/PromptLibrary";
import Timeline from "@/components/Timeline";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Stats />
      <Story />
      <Products />
      <PromptLibrary />
      <Timeline />
      <Footer />
    </main>
  );
}
