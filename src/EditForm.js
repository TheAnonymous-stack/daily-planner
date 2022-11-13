import { useLocation } from "react-router-dom";
import ContentEditForm from "./ContentEditForm";

import useFetch from "./useFetch";


const EditForm = () => {
    
    const location = useLocation();
    const ID = location.state.ID;
    
    const { data: event } = useFetch('https://personal-schedule-db.herokuapp.com/events/' + ID);
    const { data: USER_EVENTS} = useFetch('https://personal-schedule-db.herokuapp.com/events');
    
    return ( 
        <div className="editform">
            
            {event && USER_EVENTS && <ContentEditForm event={event} USER_EVENTS={USER_EVENTS} id={ID} />}
            
        </div>
     );
}
 
export default EditForm;