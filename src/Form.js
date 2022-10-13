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

        fetch('http://localhost:3000/events', {
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
                <input 
                    type="text" 
                    required
                    value={time}
                    onChange={(e) => setTime(e.target.value)}  
                />
                { !isPending && <button>Add Event</button> }
                { isPending && <button>Adding Event...</button> }
                
            </form>
        </div>
     );
}
 
export default Form;