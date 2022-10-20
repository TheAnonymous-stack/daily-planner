import { useState } from "react";
import { useHistory } from "react-router-dom";

const Form = () => {
    const [eventType, setEventType] = useState('');
    const [time, setTime] = useState('');
    const [isPending, setIsPending] = useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const task = { eventType, time };
        setIsPending(true); 

        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(task)

        }).then(() => {
            setIsPending(false);
            history.push('/');


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
                <label>Time:</label>
                <select
                    value={time}
                    onChange={(e) => setTime(e.target.value)}
                >
                    <option value="12AM">12AM</option>
                    <option value="1AM">1AM</option>
                    <option value="2AM">2AM</option>
                    <option value="3AM">3AM</option>
                    <option value="4AM">4AM</option>
                    <option value="5AM">5AM</option>
                    <option value="6AM">6AM</option>
                    <option value="7AM">7AM</option>
                    <option value="8AM">8AM</option>
                    <option value="9AM">9AM</option>
                    <option value="10AM">10AM</option>
                    <option value="11AM">11AM</option>
                    <option value="12PM">12PM</option>
                    <option value="1PM">1PM</option>
                    <option value="2PM">2PM</option>
                    <option value="3PM">3PM</option>
                    <option value="4PM">4PM</option>
                    <option value="5PM">5PM</option>
                    <option value="6PM">6PM</option>
                    <option value="7PM">7PM</option>
                    <option value="8PM">8PM</option>
                    <option value="9PM">9PM</option>
                    <option value="10PM">10PM</option>
                    <option value="11PM">11PM</option>
                    
                </select>
                { !isPending && <button>Add Event</button> }
                { isPending && <button>Adding Event...</button> }
                
            </form>
        </div>
     );
}
 
export default Form;