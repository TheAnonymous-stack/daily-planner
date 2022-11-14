
import { Link } from 'react-router-dom';



const EventList = ({ USER_EVENTS }) => {
    function timeout(delay) {
        return new Promise( res => setTimeout(res, delay) );
    };
    
    const deleteallrequests = async(e) => {
        await fetch('https://personal-schedule-db.herokuapp.com/events/'+e.id , {
            method: 'DELETE'
        }). then (
            await timeout(1000)
        )
        window.location.reload(false);
    };
    function handleDeleteAll() {
        USER_EVENTS.map((e) => {
            deleteallrequests(e)
        
        })
       
        
    };
    
    
   const checkallrequest = async(update, event) => {
    await fetch('https://personal-schedule-db.herokuapp.com/events/'+ event.id, {
        method: 'PUT',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(update)

        }).then(
           await timeout(1000)
            
        )
        window.location.reload(false);
        
   };
   const handleCheckall = () => {
    USER_EVENTS.map((event) => {
        const isChecked = true;
        const eventType = event.eventType;
        const time = event.time;
        const eventNote = event.eventNote;
                        
        const update = { eventType, time, eventNote, isChecked };
        
       checkallrequest(update, event);
            
            
    })
   };
   const deleteallcheckedrequest = async(event) => {
    await fetch('https://personal-schedule-db.herokuapp.com/events/'+ event.id, {
                method: 'DELETE'
   }).then(
           await timeout(1000)
            
        )
        window.location.reload(false);
        
   };
   function handleDeleteChecked() {
    USER_EVENTS.map((event) => {
        if (event.isChecked === true) {
            deleteallcheckedrequest(event);
        }
    })
    
   };
   const checkrequest = async(update, event) => {
    await fetch('https://personal-schedule-db.herokuapp.com/events/'+ event.id, {
        method: 'PUT',
        headers: {"Content-Type": "application/json" },
        body: JSON.stringify(update)

    }).then (
        await timeout(50)
    );
    window.location.reload(false);
   };
   

   
   const current = new Date();
   const date =  `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    
    return (
        
    <div className="bigger-eventlist">
    
        <h1><u>Date: {date}</u></h1>
        
        
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
                        
                        checkrequest(update,event);
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