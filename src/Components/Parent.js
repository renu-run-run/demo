import Current from "./Current";
const Parent =(props)=>{
    return(
        <div>
        <h1> I'm in parent</h1>
        <p> {props.Some_data} </p>
        <Current Current_data = {props.Some_data} />
        </div>
        
    )
}
export default Parent;