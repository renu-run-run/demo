import Child from "./Child";

function Current(props){
    return(
        <div>
        <h1>I'm in Current..</h1>
        <p>{props.Current_data}</p>
        <Child Child_data ={props.Current_data} />
        </div>
        
        
    )
}
export default Current;