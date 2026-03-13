import { Link, useLocation } from "react-router-dom";
import { Heart, Upload, Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-card/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-brand">
            <span className="text-lg font-bold text-primary-foreground">A</span>
          </div>
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            ArtMatch
          </span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
            aria-label="Search"
          >
            <Search className="h-5 w-5" />
          </button>
          <Link
            to="/wishlist"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted ${
              location.pathname === "/wishlist" ? "text-crimson" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Wishlist"
          >
            <Heart className="h-5 w-5" />
          </Link>
          <Link
            to="/upload"
            className={`flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-muted ${
              location.pathname === "/upload" ? "text-primary" : "text-muted-foreground hover:text-foreground"
            }`}
            aria-label="Upload"
          >
            <Upload className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
