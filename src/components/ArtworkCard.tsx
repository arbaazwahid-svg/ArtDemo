import { Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import type { Artwork } from "@/data/mockData";

interface ArtworkCardProps {
  artwork: Artwork;
  index: number;
}

const ArtworkCard = ({ artwork, index }: ArtworkCardProps) => {
  const [saved, setSaved] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.06 }}
      className="group relative break-inside-avoid mb-5"
    >
      <Link to={`/artwork/${artwork.id}`} className="block">
        <div className="overflow-hidden rounded-xl bg-muted">
          {!imageLoaded && (
            <div className="aspect-[3/4] animate-pulse bg-muted" />
          )}
          <img
            src={artwork.images[0]}
            alt={artwork.title}
            loading="lazy"
            onLoad={() => setImageLoaded(true)}
            className={`w-full object-cover transition-transform duration-500 group-hover:scale-105 ${
              imageLoaded ? "opacity-100" : "opacity-0 absolute"
            }`}
          />
        </div>
      </Link>

      <button
        onClick={(e) => {
          e.preventDefault();
          setSaved(!saved);
        }}
        className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full backdrop-blur-md transition-all ${
          saved
            ? "bg-crimson text-primary-foreground"
            : "bg-card/60 text-foreground opacity-0 group-hover:opacity-100"
        }`}
        aria-label={saved ? "Remove from wishlist" : "Save to wishlist"}
      >
        <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
      </button>

      <div className="mt-3 px-1">
        <div className="flex items-start justify-between gap-2">
          <div className="min-w-0">
            <h3 className="truncate font-display text-sm font-semibold text-foreground">
              {artwork.title}
            </h3>
            <Link
              to={`/artist/${artwork.artistId}`}
              className="text-xs text-muted-foreground transition-colors hover:text-accent"
            >
              {artwork.artistName}
            </Link>
          </div>
          <span className="shrink-0 text-sm font-semibold text-foreground">
            ${artwork.price.toLocaleString()}
          </span>
        </div>
      </div>
    </motion.div>
  );
};

export default ArtworkCard;
