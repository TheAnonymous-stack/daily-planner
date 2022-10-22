
import { Link } from 'react-router-dom';
const EventList = ({ USER_EVENTS }) => {
    
    

    return (
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    
                    <Link to={ `/events/${event.id}` }>
                         
                         
                           <h2>{ event.eventType }</h2>
                        
                           <p>Time: { event.time }</p>
                          
                        
                        
                    </Link>               

                </div>
 
            ))}
        </div>
      );
}
 
export default EventList ;