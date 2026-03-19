import { createContext } from "react";
import type { FavoritesSongsType } from "../types/Types";

export const favoritesContext = createContext<FavoritesSongsType>({
    setFavoritesVideosID: (_: string[]) => undefined,
    favoritesVideosID: []
})
