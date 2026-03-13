export interface Artist {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  styleTags: string[];
  socialLinks: { platform: string; url: string }[];
  openToCollab: boolean;
  collabDescription?: string;
}

export interface Artwork {
  id: string;
  artistId: string;
  artistName: string;
  artistAvatar: string;
  title: string;
  description: string;
  medium: string;
  dimensions: string;
  tags: string[];
  price: number;
  images: string[];
  status: "draft" | "published";
  createdAt: string;
}

export const artists: Artist[] = [
  {
    id: "artist-1",
    name: "Elena Vasquez",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    bio: "Mixed media artist exploring the intersection of nature and urban decay. Based in Barcelona, working with reclaimed materials and organic pigments.",
    styleTags: ["Mixed Media", "Abstract", "Sustainable Art"],
    socialLinks: [{ platform: "Instagram", url: "#" }],
    openToCollab: true,
    collabDescription: "Looking for photographers for mixed-media installations",
  },
  {
    id: "artist-2",
    name: "Marcus Chen",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    bio: "Digital illustrator and concept artist. Inspired by cyberpunk aesthetics and traditional Japanese woodblock prints.",
    styleTags: ["Digital Art", "Illustration", "Cyberpunk"],
    socialLinks: [{ platform: "Twitter", url: "#" }],
    openToCollab: true,
    collabDescription: "Seeking musicians for audiovisual collaborations",
  },
  {
    id: "artist-3",
    name: "Amara Osei",
    avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&h=200&fit=crop&crop=face",
    bio: "Contemporary painter working in bold, saturated palettes. My work examines identity and belonging through portraiture.",
    styleTags: ["Oil Painting", "Portraiture", "Contemporary"],
    socialLinks: [{ platform: "Instagram", url: "#" }],
    openToCollab: false,
  },
  {
    id: "artist-4",
    name: "Kai Tanaka",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    bio: "Sculptor and installation artist. Working with metal, glass, and light to create immersive spatial experiences.",
    styleTags: ["Sculpture", "Installation", "Light Art"],
    socialLinks: [{ platform: "Website", url: "#" }],
    openToCollab: true,
    collabDescription: "Open to gallery collaborations and public art projects",
  },
];

export const artworks: Artwork[] = [
  {
    id: "art-1",
    artistId: "artist-1",
    artistName: "Elena Vasquez",
    artistAvatar: artists[0].avatar,
    title: "Urban Bloom",
    description: "A study of resilience — wildflowers breaking through concrete.",
    medium: "Acrylic & Found Objects on Canvas",
    dimensions: '36" × 48"',
    tags: ["Abstract", "Mixed Media", "Nature"],
    price: 2400,
    images: ["https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&h=1000&fit=crop"],
    status: "published",
    createdAt: "2025-12-01",
  },
  {
    id: "art-2",
    artistId: "artist-2",
    artistName: "Marcus Chen",
    artistAvatar: artists[1].avatar,
    title: "Neon District",
    description: "A glimpse into a rain-soaked cyberpunk metropolis at midnight.",
    medium: "Digital Print on Aluminum",
    dimensions: '24" × 36"',
    tags: ["Digital", "Cyberpunk", "Cityscape"],
    price: 850,
    images: ["https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=800&h=600&fit=crop"],
    status: "published",
    createdAt: "2025-11-15",
  },
  {
    id: "art-3",
    artistId: "artist-3",
    artistName: "Amara Osei",
    artistAvatar: artists[2].avatar,
    title: "Self-Portrait in Gold",
    description: "An exploration of heritage and self-discovery through color and symbolism.",
    medium: "Oil on Linen",
    dimensions: '30" × 40"',
    tags: ["Portraiture", "Oil Painting", "Identity"],
    price: 5200,
    images: ["https://images.unsplash.com/photo-1578301978693-85fa9c0320b9?w=800&h=1100&fit=crop"],
    status: "published",
    createdAt: "2025-10-20",
  },
  {
    id: "art-4",
    artistId: "artist-4",
    artistName: "Kai Tanaka",
    artistAvatar: artists[3].avatar,
    title: "Fractured Light",
    description: "Glass and steel sculpture capturing prismatic light patterns.",
    medium: "Blown Glass & Steel",
    dimensions: '18" × 18" × 24"',
    tags: ["Sculpture", "Glass", "Light"],
    price: 3800,
    images: ["https://images.unsplash.com/photo-1549887534-1541e9326642?w=800&h=900&fit=crop"],
    status: "published",
    createdAt: "2025-09-05",
  },
  {
    id: "art-5",
    artistId: "artist-1",
    artistName: "Elena Vasquez",
    artistAvatar: artists[0].avatar,
    title: "Rust & Petals",
    description: "Decomposition and renewal in a single frame.",
    medium: "Mixed Media on Wood Panel",
    dimensions: '24" × 24"',
    tags: ["Mixed Media", "Organic", "Texture"],
    price: 1800,
    images: ["https://images.unsplash.com/photo-1547891654-e66ed7ebb968?w=800&h=800&fit=crop"],
    status: "published",
    createdAt: "2025-08-12",
  },
  {
    id: "art-6",
    artistId: "artist-2",
    artistName: "Marcus Chen",
    artistAvatar: artists[1].avatar,
    title: "Ghost in the Machine",
    description: "Where does the human end and the digital begin?",
    medium: "Digital Print on Canvas",
    dimensions: '40" × 60"',
    tags: ["Digital", "Surreal", "Technology"],
    price: 1200,
    images: ["https://images.unsplash.com/photo-1573521193826-58c7dc2e13e3?w=800&h=1200&fit=crop"],
    status: "published",
    createdAt: "2025-07-28",
  },
  {
    id: "art-7",
    artistId: "artist-3",
    artistName: "Amara Osei",
    artistAvatar: artists[2].avatar,
    title: "Ancestral Waters",
    description: "Flowing forms connecting past and present.",
    medium: "Watercolor & Ink on Paper",
    dimensions: '22" × 30"',
    tags: ["Watercolor", "Abstract", "Heritage"],
    price: 1600,
    images: ["https://images.unsplash.com/photo-1482160549825-59d1b23cb208?w=800&h=700&fit=crop"],
    status: "published",
    createdAt: "2025-06-15",
  },
  {
    id: "art-8",
    artistId: "artist-4",
    artistName: "Kai Tanaka",
    artistAvatar: artists[3].avatar,
    title: "Suspended Moment",
    description: "Time frozen in translucent resin and copper wire.",
    medium: "Resin & Copper",
    dimensions: '12" × 12" × 20"',
    tags: ["Sculpture", "Resin", "Minimalist"],
    price: 2900,
    images: ["https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?w=800&h=1000&fit=crop"],
    status: "published",
    createdAt: "2025-05-01",
  },
];

export const getArtistById = (id: string) => artists.find((a) => a.id === id);
export const getArtworksByArtist = (artistId: string) => artworks.filter((a) => a.artistId === artistId);
export const getArtworkById = (id: string) => artworks.find((a) => a.id === id);
