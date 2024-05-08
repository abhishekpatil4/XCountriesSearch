import "./flags.css"

export const FlagCard = ({ url, name }) => {
    return <>
        <div className="countryCard">
            <img src={url} alt="" />
            <span>{name}</span>
        </div>
    </>
}