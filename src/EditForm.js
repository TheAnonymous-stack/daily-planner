import { useState } from "react";
// import useFetch from './useFetch';
import { useHistory } from 'react-router-dom';
import TimePicker from "rc-time-picker";
import 'rc-time-picker/assets/index.css';

const EditForm = ({ id }) => {
    
    // const { ID } = useParams();
    // const { data: event  } = useFetch('http://localhost:8000/events/' + ID);
    console.log({id});

    
    
    const [eventType, setEventType] = useState('event.eventType');
    const [time, setTime] = useState('event.time');
    const [eventNote, setEventNote] = useState('event.eventNote');
    const history = useHistory();

    const handleEdit = (e) => {
        e.preventDefault();
        
        const task = { eventType, time, eventNote };
        

        fetch('http://localhost:8000/events', {
            method: 'POST',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(task)

        }).then(() => {
            
            history.push('/checklist');


        })
    
    }
    
    return ( 
        <div className="form">
            <form onSubmit={handleEdit}>
                <label>Event Name:</label>
                <input 
                    type="text" 
                    required
                    value={eventType}
                    onChange={(e) => setEventType(e.target.value)}
                />
                
                <div className="timePicker">
                    
                    <br />
                    <p>Selected Time: </p>
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
                    
                    type="text" 
                    optional
                    value={eventNote}
                    onChange={(e) => setEventNote(e.target.value)}
                    
                />
                
                
            </form>
        </div>
    );
}
 
export default EditForm;