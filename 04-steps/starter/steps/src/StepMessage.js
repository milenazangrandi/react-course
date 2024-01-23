export default function StepMessage({step, children}){

    return (
    <div className="message">
        <h3>{step}</h3> 
        {children}
    </div>

    )
}