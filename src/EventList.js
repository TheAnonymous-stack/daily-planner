import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ USER_EVENTS }) => {
    const [checked, setChecked] = useState([]);
    const handleCheck = (e) => {
        var updatedList = [...checked];
        if (e.target.checked) {
            updatedList = [...checked, e.target.value];
        } else {
            updatedList.splice(checked.indexOf(e.target.value),1);
        }
        setChecked(updatedList);
        
    };
    

    return (
        
    <div className="bigger-eventlist">
      
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    
                    <input value={event} 
                    type="checkbox"
                    onChange={handleCheck}
                
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