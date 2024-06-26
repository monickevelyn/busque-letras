import "./style.search.scss"
import Message from "../message/Message";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { VarContext } from "../../context/Context";
import { IoSearchSharp } from "react-icons/io5";

export default function Search(){
  const { artist, setArtist, title, setTitle, lyrics, setLyrics } = useContext(VarContext)
  const navigate = useNavigate();
  const [showMessage, setShowMessage] = useState(false)

    function OnSearch() {
      setLyrics();
      fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
        body: lyrics,
      })
        .then((resp) => resp.json())
        .then((data) => {
          if(data.lyrics === undefined){
            setShowMessage(true)
          }else{
            setShowMessage(false)
            setLyrics(data.lyrics)
            navigate("/lyrics");
          }
        })
        .catch((error) => console.log(error));
    }

    const submit = (e) => {
      e.preventDefault();
      OnSearch()
    }
   
    return(
        <>
        <form onSubmit={submit} className="div-form-search">
          <input 
              type="text" 
              id="inputnome"
              name="inputnome"
              placeholder="Música"
              onChange={e => setTitle(e.target.value)}
              value={title}
           />
          <input 
              type="text" 
              id="inputartista"
              name="inputartista"
              placeholder="Artista"
              onChange={e => setArtist(e.target.value)}
              value={artist}
          />
          <button type="submit" onClick={OnSearch}><IoSearchSharp className="lupa" /></button>
        </form>   
        {
          showMessage === true && 
          <Message 
          message="Verfique as informações do artista e do nome da música. Se não ocorrer mudança, pode ser que a letra não esteja disponivel no servidor."
          />
        }  
        </>
    )
}