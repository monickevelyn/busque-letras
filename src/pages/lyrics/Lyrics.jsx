import "./style.lyrics.scss"
import Logo from "../../components//logo/Logo"
import LyricsContainer from "./container/LyricsContainer"

import { useContext } from "react";
import { VarContext } from "../../context/Context";

export default function Search(){
  const { artist, title, lyrics } = useContext(VarContext)

    return(
        <>
        <section className="letra-musica-container">
            <div className="header-container">
                <Logo />
            </div>
            <div className="conatiner-main">
                <h1>Letra</h1>
                <LyricsContainer 
                    artist={artist}
                    title={title}
                    lyrics={lyrics}
                />
            </div>         
        </section>
        </>
    )
}