import Schedule from "./Schedule";
import useFetch from "./useFetch";
const Middleman = () => {
    const { data: USER_EVENTS } = useFetch('http://localhost:8000/events');
    return (
        <div className="middle-man">
            {USER_EVENTS && <Schedule USER_EVENTS={USER_EVENTS} />}
            
            
        </div>
        
      );
}
 
export default Middleman;