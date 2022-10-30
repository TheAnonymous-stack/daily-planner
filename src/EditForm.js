import { useLocation } from "react-router-dom";
// import { useState } from "react";
import useFetch from "./useFetch";
// import TimePicker from "rc-time-picker";
// import 'rc-time-picker/assets/index.css';

const EditForm = () => {
    console.log("loading");
    const location = useLocation();
    const ID = location.state.ID;
    console.log({ID});
    const { data: event, isPending, error } = useFetch('http://localhost:8000/events/' + ID);
    console.log({event});
    
    
    // const history = useHistory();
    

    // const handleEdit = (e) => {
    //     e.preventDefault();
        
    //     // const task = { eventType, time, eventNote };
    //     // setIsPending(true); 

    //     // if (eventNote === '') {
    //     //     setEventNote('no notes added');
    //     // };

    //     fetch('http://localhost:8000/events', {
    //         method: 'POST',
    //         headers: {"Content-Type": "application/json" },
    //         body: JSON.stringify(task)

    //     }).then(() => {
    //         // setIsPending(false);
    //         history.push('/checklist');


    //     })
    
    // }
    return ( 
        <div className="form">
           { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { event && (
                <form>
                    <label>Event Name: {event.eventType}</label>
                    {/* <input 
                        type="text" 
                        
                        value={event.eventType}
                        onChange={(e) => setEventType(e.target.value)}
                    /> */}
                    
                    <div className="timePicker">
                        
                        <br />
                        <p>Selected Time: {event.time}</p>
                        {/* <TimePicker
                            placeholder="Select Time"
                            use12Hours
                            showSecond={false}
                            focusOnOpen={true}
                            format="hh:mm A"
                            onChange={e => setTime(e.format('LT'))}
                        /> */}
                    </div>
                    <label>Add Notes: {event.eventNote}</label>
                    {/* <input 
                        placeholder="Add notes, locations, URL,..."
                        type="text" 
                        optional
                        
                        value={event.eventNote}
                        onChange={(e) => setEventNote(e.target.value)}
                        
                    /> */}
                
                
                    
                </form>
            )}
        </div>
     );
}
 
export default EditForm;