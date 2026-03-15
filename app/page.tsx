import AetherHero from "@/components/main/hero";
import ThumbnailGenerator from "@/components/main/thumbnail-generator";
import Navbar from "@/components/main/navbar";

export default function Home() {
  return (
    <main style={{ minHeight: "100vh", position: "relative" }}>
      <Navbar />

      <AetherHero 
        title="Nailart Studio"
        subtitle="Generate beautiful, high-converting scalable SVG thumbnails in seconds."
        maxWidth={1200}
      >
        <ThumbnailGenerator />
      </AetherHero>
    </main>
  );
}