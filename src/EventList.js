
import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ USER_EVENTS }) => {
    function handleDeleteAll() {
        USER_EVENTS.map((e) => {
            fetch('http://localhost:8000/events/'+e.id , {
            method: 'DELETE'
        })
        
        })
        window.location.reload(false);
        
    };
   function handleCheckall() {
    USER_EVENTS.map((event) => {
        const isChecked = true;
        const eventType = event.eventType;
        const time = event.time;
        const eventNote = event.eventNote;
                        
        const update = { eventType, time, eventNote, isChecked };
        
        fetch('http://localhost:8000/events/'+ event.id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(update)

            });
            window.location.reload(false);
    })
   };
   function handleDeleteChecked() {
    USER_EVENTS.map((event) => {
        if (event.isChecked === true) {
            fetch('http://localhost:8000/events/'+ event.id, {
            method: 'DELETE'
        })
        }
    })
    window.location.reload(false);
   };
    
    return (
        
    <div className="bigger-eventlist">
        
        <h1><u>CHECKLIST</u></h1>
        
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    <div className="checkbox">
                    <input 
                    value={event} 
                    type="checkbox"
                    
                    onChange={() => {
                        const isChecked = !event.isChecked;
                        const eventType = event.eventType;
                        const time = event.time;
                        const eventNote = event.eventNote;
                        
                        const update = { eventType, time, eventNote, isChecked };
                        console.log({update});
                        fetch('http://localhost:8000/events/'+ event.id, {
                            method: 'PUT',
                            headers: {"Content-Type": "application/json" },
                            body: JSON.stringify(update)

                        });
                        window.location.reload(false);
                    }}
                    checked={event.isChecked}
                    
                    
                
            />
            <Link to={ `/events/${event.id}` }>
                <span>{event.eventType}</span>
            </Link>
            </div>
                    
                    <Link to={ `/events/${event.id}` }>
                            
                                <p>Time: { event.time }</p>
                           
                    </Link>  

                                

                </div>
 
            ))}
            
        </div>
        <div class="add-ons">
                <button onClick={handleCheckall}>Check All Events</button>
                <button onClick={handleDeleteChecked}>Delete All Checked Events</button>
                <button onClick={handleDeleteAll}>Delete All Events</button>
            </div>
        </div>
    
      );
}
 
export default EventList ;