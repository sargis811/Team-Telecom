import { create } from 'zustand';

export const useFavouriteStore = create((set) => ({
  favourites: JSON.parse(localStorage.getItem('liked')),
  setFavourite: (newFavourite) => 
    set((state) => {
      const includes = state.favourites.includes(newFavourite);
      return {
        favourites: includes ? state.favourites.filter((favourite) => favourite !== newFavourite) 
          : [...state.favourites, newFavourite],                
      };
    })
}));

