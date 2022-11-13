import TimePicker from "rc-time-picker";
import { useState } from "react";
import 'rc-time-picker/assets/index.css';
import { useHistory } from "react-router-dom";


const ContentEditForm = ({event, id}) => {
    
   
    const history = useHistory();
    const [eventType, setEventType] = useState(event.eventType);
    const [time, setTime] = useState(event.time);
    const [eventNote, setEventNote] = useState(event.eventNote);
    const [isPending, setIsPending] = useState(false);
    const handleCancel = () => {
        history.push('/checklist');
    };

    const handleEdit = (e) => {
        e.preventDefault();
        
        const task = { eventType, time, eventNote };
        setIsPending(true); 
        

       

        fetch('https://personal-schedule-db.herokuapp.com/events/'+ id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(task)

        }).then(() => {
            setIsPending(false);
            history.push('/checklist');


        })
    
    }
    return ( 
        <div className="form">
           
                <form onSubmit={handleEdit}>
                <div className="event-title">
                    <label>Event Name: </label>
                    
                    <input 
                        type="text" 
                        optional
                        value={eventType}
                        onChange={(e) => setEventType(e.target.value)}
                    />
                    </div>
                    
                    <div className="timePicker">
                        
                        
                        <p>Selected Time: </p>
                        <TimePicker
                            // placeholder="Select Time"
                            placeholder={event.time}
                            use12Hours
                            showSecond={false}
                            focusOnOpen={true}
                            format="hh:mm A"
                            onChange={e => setTime(e.format('LT'))}
                        />
                    </div>
                    <div className="event-note">
                    <label>Add Notes: </label>
                    <input 
                        placeholder="Add notes, locations, URL,..."
                        type="text" 
                        optional
                        
                        value={eventNote}
                        onChange={(e) => setEventNote(e.target.value)}
                        
                    />
                    </div>
                    <br />
                
                { !isPending && <button class="Button2">Confirm</button> }
                <button class="Button2" onClick={handleCancel}>Cancel</button>
                    
                </form>
            
        </div>
     );
    
}
 
export default ContentEditForm;