import Middleman from "./Middleman";
// import Schedule from "./Schedule";
import useFetch from "./useFetch";

const Test = () => {
    const { data: USER_EVENTS } = useFetch('http://localhost:8000/events');
    console.log({USER_EVENTS});
    return ( 
        <Middleman />
        
     );
}
 
export default Test;