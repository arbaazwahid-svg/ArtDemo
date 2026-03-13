import { artworks } from "@/data/mockData";
import ArtworkGrid from "@/components/ArtworkGrid";
import heroBg from "@/assets/hero-bg.jpg";
import { motion } from "framer-motion";

const Index = () => {
  const published = artworks.filter((a) => a.status === "published");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative flex h-[60vh] min-h-[400px] items-center justify-center overflow-hidden">
        <img
          src={heroBg}
          alt="Art gallery with colorful paintings"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-background" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="font-display text-4xl font-bold tracking-tight text-primary-foreground sm:text-6xl md:text-7xl">
            Discover Original Art
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-lg text-primary-foreground/80">
            Connect directly with independent artists. Find the piece that speaks to you.
          </p>
        </motion.div>
      </section>

      {/* Feed */}
      <section className="container mx-auto px-4 py-12">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="font-display text-2xl font-bold text-foreground">Trending Now</h2>
          <div className="flex gap-2">
            {["All", "Painting", "Digital", "Sculpture"].map((tag) => (
              <button
                key={tag}
                className={`rounded-full px-4 py-1.5 text-xs font-medium transition-colors ${
                  tag === "All"
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-accent hover:text-accent-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>
        </div>
        <ArtworkGrid artworks={published} />
      </section>
    </div>
  );
};

export default Index;
