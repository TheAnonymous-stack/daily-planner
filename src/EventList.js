import * as React from 'react';
import { Link } from 'react-router-dom';
const EventList = ({ USER_EVENTS }) => {

    const [checked, setChecked] = React.useState(false);
    const handleCheck = () => {
        setChecked(!checked);
    };
    
    

    return (
        // <input type="checkbox" id="accept" name="accept" value="yes" />  
        // <label for="accept"> Accept </label>
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    <input
                                type="checkbox"
                                checked={checked}
                                onChange={handleCheck}
                            />
                    
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