
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
        <div className="add-ons">
            <button onClick={handleDeleteChecked}>Delete all checked item</button>
            <button onClick ={handleDeleteAll}>Delete all items</button>
            <button onClick={handleCheckall}>Check all item</button>
        </div>
        
      
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    
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