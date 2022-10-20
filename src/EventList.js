import { red } from '@mui/material/colors';
import { Link } from 'react-router-dom';
const EventList = ({ USER_EVENTS, title }) => {
    
    
const eventStyle = {  
    backgroundColor: "grey",
    display: "inline-block"
    

};
    return (
        <div className="event-list">
            <h2>{ title }</h2>
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    
                    <Link to={ `/events/${event.id}` }>
                        <div style={eventStyle}> 
                         
                           <h2>{ event.eventType }</h2>
                        
                           <p>Time: { event.time }</p>
                          
                        </div>
                        
                    </Link>               

                </div>
 
            ))}
        </div>
      );
}
 
export default EventList ;