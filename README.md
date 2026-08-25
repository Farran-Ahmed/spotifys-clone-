Spotify Clone (React + iTunes Search API)
A responsive music browsing app inspired by Spotify's UI, built with React. Search for songs in real time, browse a featured tracks list, and play 30-second previews with full playback controls — all styled to match Spotify's dark, modern look.
Features
Live search — debounced search against the iTunes Search API, so requests only fire after you stop typing
Featured tracks — a populated "Popular right now" view on first load, instead of a blank screen
Loading & empty states — clear feedback while searching and when a search returns nothing
Full playback controls — play/pause, seek bar with live progress, and a volume slider
Responsive multi-panel layout — navigation sidebar, scrollable results grid, and a persistent player bar built with Flexbox/Grid
Component-based architecture — Sidebar, MainContent, SearchBar, and PlayerBar as reusable, single-responsibility components
Tech Stack
React (functional components, hooks: useState, useEffect, useRef)
iTunes Search API — no API key required
lucide-react for icons
Vite
CSS (Flexbox/Grid, custom properties)
Getting Started
bash
git clone https://github.com/Farran-Ahmed/spotifys-clone-.git
cd spotifys-clone-
npm install
npm run dev
The app will be running at http://localhost:5173.
Notes
This project uses the iTunes Search API directly, which is free and requires no authentication — so there's no API key or .env file needed to run this locally.
Screenshots
Add a screenshot or short GIF of the app here.
