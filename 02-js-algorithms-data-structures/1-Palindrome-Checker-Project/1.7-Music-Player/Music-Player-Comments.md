# 🎵 Music Player App – JS Comments & Notes

**Origin:** FCC JavaScript Course – *Learn Basic String and Array Methods by Building a Music Player App*  

---

## What I Covered in JavaScript

- **Playlist & State Management**
  - Created an `allSongs` array with `id`, `title`, `artist`, `duration`, and `src` for each track.  
  - Introduced `userData` object to manage:  
    - `songs` (current playlist)  
    - `currentSong` (active track)  
    - `songCurrentTime` (paused position).  

- **Core Functions**
  - `playSong(id)` → loads the track, updates state, resets or resumes time, updates DOM, starts playback.  
  - `pauseSong()` → saves current playback time and pauses audio.  
  - `playNextSong()` / `playPreviousSong()` → navigates playlist by index.  
  - `shuffle()` → randomizes `userData.songs`, resets state, re-renders playlist.  
  - `deleteSong(id)` → removes track from playlist, resets if it was active, re-renders.  
  - `sortSongs()` → alphabetical sort by title, used at render and reset.

- **DOM Updates**
  - `setPlayerDisplay()` → updates song title + artist in the display.  
  - `highlightCurrentSong()` → adds/removes `aria-current` for visual and accessibility focus.  
  - `renderSongs(array)` → maps over `songs` to generate `<li>` elements with play + delete buttons.  
    - Handles empty playlist by adding a **Reset Playlist** button.  
  - `setPlayButtonAccessibleText()` → dynamically updates aria-label with current track name.

- **Event Handling**
  - Button listeners:  
    - `play`, `pause`, `next`, `previous`, `shuffle`.  
  - Audio listener:  
    - `ended` → auto-plays next song if available, otherwise resets state.  

---

## Key Learnings

- How to **structure state** with objects (`userData`) instead of relying on scattered globals.  
- Practice with **array methods**: `.find()`, `.filter()`, `.sort()`, `.map()`.  
- DOM generation via `.map().join("")` pattern for dynamic lists.  
- Using `aria-label` and `aria-current` for **accessibility**.  
- Shuffle with `Math.random() - 0.5` and reset logic for empty playlists.  
- Managing **playback continuity** with `.currentTime` and restoring song position.

---

## Next Steps / Ideas

- Add a **progress bar** and current time display.  
- Store playlist state in `localStorage` so refresh doesn’t reset everything.  
- Load album art dynamically per track.  
- Volume control and mute button.  

