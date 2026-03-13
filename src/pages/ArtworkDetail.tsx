import { useParams, Link } from "react-router-dom";
import { getArtworkById } from "@/data/mockData";
import { ArrowLeft, Heart, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const ArtworkDetail = () => {
  const { id } = useParams<{ id: string }>();
  const artwork = getArtworkById(id || "");
  const [saved, setSaved] = useState(false);

  if (!artwork) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <p className="text-muted-foreground">Artwork not found.</p>
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
          <ArrowLeft className="h-4 w-4" /> Back
        </Link>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid gap-10 lg:grid-cols-2"
        >
          <div className="overflow-hidden rounded-2xl bg-muted">
            <img
              src={artwork.images[0]}
              alt={artwork.title}
              className="w-full object-cover"
            />
          </div>

          <div className="flex flex-col justify-center">
            <Link
              to={`/artist/${artwork.artistId}`}
              className="mb-2 flex items-center gap-2"
            >
              <img
                src={artwork.artistAvatar}
                alt={artwork.artistName}
                className="h-8 w-8 rounded-full object-cover"
              />
              <span className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
                {artwork.artistName}
              </span>
            </Link>

            <h1 className="font-display text-3xl font-bold text-foreground sm:text-4xl">
              {artwork.title}
            </h1>
            <p className="mt-4 text-muted-foreground">{artwork.description}</p>

            <div className="mt-6 grid grid-cols-2 gap-4 rounded-xl bg-muted p-4">
              <div>
                <p className="text-xs text-muted-foreground">Medium</p>
                <p className="text-sm font-medium text-foreground">{artwork.medium}</p>
              </div>
              <div>
                <p className="text-xs text-muted-foreground">Dimensions</p>
                <p className="text-sm font-medium text-foreground">{artwork.dimensions}</p>
              </div>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {artwork.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-muted px-3 py-1 text-xs font-medium text-muted-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex items-center gap-4">
              <span className="font-display text-3xl font-bold text-foreground">
                ${artwork.price.toLocaleString()}
              </span>
            </div>

            <div className="mt-6 flex gap-3">
              <Button className="flex-1 gap-2 bg-gradient-brand text-primary-foreground hover:opacity-90">
                <ShoppingBag className="h-4 w-4" /> Buy Now
              </Button>
              <Button
                variant="outline"
                onClick={() => setSaved(!saved)}
                className={saved ? "border-crimson text-crimson" : ""}
              >
                <Heart className={`h-4 w-4 ${saved ? "fill-current" : ""}`} />
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ArtworkDetail;
