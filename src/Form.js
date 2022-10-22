import { useState } from "react";
import { useHistory } from "react-router-dom";

import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

const Form = () => {
    const [eventType, setEventType] = useState('');
    const [eventNote, setEventNote] = useState('');
    const [time, setTime] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const task = { eventType, time, eventNote };
        setIsPending(true); 

        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(task)

        }).then(() => {
            setIsPending(false);
            history.push('/checklist');


        })
    
    }
    return ( 
        <div className="form">
            <form onSubmit={handleSubmit}>
                <label>Event Name:</label>
                <input 
                    type="text" 
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                />
                
                <div className="timePicker">
                    
                    <br />
                    <p>Selected Time: {time || ''}</p>
                    <TimePicker
                        placeholder="Select Time"
                        use12Hours
                        showSecond={false}
                        focusOnOpen={true}
                        format="hh:mm A"
                        onChange={e => setTime(e.format('LT'))}
                    />
                </div>
                <label>Add Notes:</label>
                <input 
                    placeholder="Add notes, locations, URL,..."
                    type="text" 
                    optional
                    value={eventNote}
                    onChange={(e) => setEventNote(e.target.value)}
                />

                { !isPending && <button>Add Event</button> }
                { isPending && <button>Adding Event...</button> }
                
            </form>
        </div>
     );
}
 
export default Form;