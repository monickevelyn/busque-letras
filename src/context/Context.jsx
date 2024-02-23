import { createContext, useState } from "react";
export const VarContext = createContext()

export const VarProvider = ({ children }) => {
    const [artist, setArtist] = useState();
    const [title, setTitle] = useState();
    const [lyrics, setLyrics] = useState();

    return(
        <VarContext.Provider value={{ artist, setArtist, title, setTitle, lyrics, setLyrics }}>
            {children}
        </VarContext.Provider>
    )
}