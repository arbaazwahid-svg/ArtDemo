import { useParams, Link } from "react-router-dom";
import { getArtistById, getArtworksByArtist } from "@/data/mockData";
import ArtworkGrid from "@/components/ArtworkGrid";
import { ArrowLeft, ExternalLink, Users } from "lucide-react";
import { motion } from "framer-motion";

const ArtistProfile = () => {
  const { id } = useParams<{ id: string }>();
  const artist = getArtistById(id || "");
  const artworks = getArtworksByArtist(id || "");

  if (!artist) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Artist not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to feed
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-12 flex flex-col items-center gap-6 sm:flex-row sm:items-start"
        >
          <img
            src={artist.avatar}
            alt={artist.name}
            className="h-28 w-28 shrink-0 rounded-2xl object-cover shadow-lg ring-4 ring-card"
          />
          <div className="text-center sm:text-left">
            <h1 className="font-display text-3xl font-bold text-foreground">
              {artist.name}
            </h1>
            <p className="mt-2 max-w-lg text-muted-foreground">{artist.bio}</p>

            <div className="mt-4 flex flex-wrap justify-center gap-2 sm:justify-start">
              {artist.styleTags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
              {artist.openToCollab && (
                <span className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">
                  <Users className="h-3 w-3" /> Open to Collab
                </span>
              )}
            </div>

            <div className="mt-4 flex justify-center gap-3 sm:justify-start">
              {artist.socialLinks.map((link) => (
                <a
                  key={link.platform}
                  href={link.url}
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground transition-colors hover:text-foreground"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="h-3 w-3" />
                  {link.platform}
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        <h2 className="mb-6 font-display text-xl font-bold text-foreground">
          Portfolio ({artworks.length})
        </h2>
        <ArtworkGrid artworks={artworks} />
      </div>
    </div>
  );
};

export default ArtistProfile;
