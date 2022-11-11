import * as React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ USER_EVENTS }) => {
    const [checked, setChecked] = React.useState(false);
    const handleCheck = (e) => {
        // console.log(e.target.id);
        e.target.setChecked(!checked);
        // let isChecked = e.target.checked;
    };
    

    return (
        // <input type="checkbox" id="accept" name="accept" value="yes" />  
        // <label for="accept"> Accept </label>
    <div className="bigger-eventlist">
      
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    
                    <input
                type="checkbox"
                id={event.id}
                checked=""
                onChange={e => handleCheck(e)}
                
            />
                    
                    <Link to={ `/events/${event.id}` }>
                         
                          
                           <h2>{ event.eventType }</h2>
                        
                           <p>Time: { event.time }</p>
                           
                    </Link>               

                </div>
 
            ))}
        </div>
        </div>
    
      );
}
 
export default EventList ;