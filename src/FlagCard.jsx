import "./flags.css"

export const FlagCard = ({ url, name }) => {
    return <>
        <div className="flag-card">
            <img src={url} alt="" />
            <span>{name}</span>
        </div>
    </>
}