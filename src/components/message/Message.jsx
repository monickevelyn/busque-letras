import "./style.message.scss"

export default function Message({ message }){

    return(
        <>
        <div className="div-message">
            <span>{message}</span>
        </div>
        </>
    )
}