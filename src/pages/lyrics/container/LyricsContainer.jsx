import "./style.LyricsContainer.scss"

export default function LyricsContainer({ artist, title, lyrics }){

    return(
        <>
        <div className="letra-container">
            <div className="header-letra-container">
               <h2>{artist} - {title}</h2>
            </div>

             <div className="div-letra">
                <p>{lyrics}</p>
            </div>
       </div>
        </>
    )
}