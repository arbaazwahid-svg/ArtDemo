import ArtworkCard from "./ArtworkCard";
import type { Artwork } from "@/data/mockData";

interface ArtworkGridProps {
  artworks: Artwork[];
}

const ArtworkGrid = ({ artworks }: ArtworkGridProps) => {
  return (
    <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
      {artworks.map((artwork, index) => (
        <ArtworkCard key={artwork.id} artwork={artwork} index={index} />
      ))}
    </div>
  );
};

export default ArtworkGrid;
