import { create } from 'zustand';

interface Track {
  id: string;
  title: string;
  artist: string;
  url: string;
  duration: number;
}

interface AudioStore {
  currentTrack: Track | null;
  playlist: Track[];
  currentIndex: number;
  nextTrack: () => void;
  previousTrack: () => void;
  setTrack: (track: Track) => void;
  addToPlaylist: (track: Track) => void;
  removeFromPlaylist: (trackId: string) => void;
  clearPlaylist: () => void;
}

export const useAudioStore = create<AudioStore>((set, get) => ({
  currentTrack: null,
  playlist: [],
  currentIndex: -1,

  nextTrack: () => {
    const { playlist, currentIndex } = get();
    if (currentIndex < playlist.length - 1) {
      set({
        currentTrack: playlist[currentIndex + 1],
        currentIndex: currentIndex + 1,
      });
    }
  },

  previousTrack: () => {
    const { playlist, currentIndex } = get();
    if (currentIndex > 0) {
      set({
        currentTrack: playlist[currentIndex - 1],
        currentIndex: currentIndex - 1,
      });
    }
  },

  setTrack: (track: Track) => {
    const { playlist } = get();
    const index = playlist.findIndex((t) => t.id === track.id);
    set({
      currentTrack: track,
      currentIndex: index,
    });
  },

  addToPlaylist: (track: Track) => {
    set((state) => ({
      playlist: [...state.playlist, track],
    }));
  },

  removeFromPlaylist: (trackId: string) => {
    set((state) => ({
      playlist: state.playlist.filter((track) => track.id !== trackId),
    }));
  },

  clearPlaylist: () => {
    set({
      playlist: [],
      currentTrack: null,
      currentIndex: -1,
    });
  },
}));