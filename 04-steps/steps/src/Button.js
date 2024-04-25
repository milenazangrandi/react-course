
export default function Button(props){
    const {textColor, backgroundColor, clickHandler, children} = props

    return (
        <button
        style={{ backgroundColor: backgroundColor, color: textColor}}
        onClick={clickHandler}>
            {children}
        </button>
    )
}