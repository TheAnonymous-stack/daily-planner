import { useHistory, useParams } from 'react-router-dom';

import useFetch from './useFetch';


const EventDetails = () => {
    const { id } = useParams();
    const { data: event, error, isPending } = useFetch('http://localhost:8000/events/' + id);
    const history = useHistory();
    

    const handleClick = () => {
        //eslint-disable-next-line
        fetch('http://localhost:8000/events/'+ event.id, {
            method: 'DELETE'
        } 
        ). then (() => {
            history.push('/checklist');
        })
    };
    function EditEvent() {
        
        history.push("/edit", {ID: id});
    }
   
    return ( 
   

        
        <div className="event-details">
            
            
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { event && (
                <article>
                    
                    <h2>{ event.eventType }</h2>
                    <div>{ event.time }</div>
                    <hr />
                    <div> { event.eventNote }</div>


                    
                    <button onClick={handleClick}>Delete Event</button>
                    
                   
                    <button onClick={EditEvent}>Edit Event</button>
               
                
                </article>
            )}
            
        </div>
    
     );
}
 
export default EventDetails;