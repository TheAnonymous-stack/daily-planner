import EventList from "./EventList";
import useFetch from './useFetch';


const Checklist = () => {
    const { data: USER_EVENTS, isPending, error } = useFetch('https://foamy-thankful-backbone.glitch.me/events');
   
    
    return (
        <div className="checklist">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {USER_EVENTS && <EventList USER_EVENTS={USER_EVENTS} title="Schedule" />}
            
            
            

            
        </div>
      );
    }
 
export default Checklist;