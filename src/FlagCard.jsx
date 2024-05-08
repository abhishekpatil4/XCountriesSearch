import "./flags.css"

export const FlagCard = ({ url, name }) => {
    return <>
        <img src={url} alt="" />
        <span>{name}</span>
    </>
}