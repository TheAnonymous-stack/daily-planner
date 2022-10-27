import { useHistory, useParams } from 'react-router-dom';
import EditForm from './EditForm';
import useFetch from './useFetch';
import { Link } from 'react-router-dom';



const EventDetails = () => {
    const { id } = useParams();
    const { data: event, error, isPending } = useFetch('http://localhost:8000/events/' + id);
    const history = useHistory();
    
    console.log({id});
   

    const handleClick = () => {
        //eslint-disable-next-line
        fetch('http://localhost:8000/events/'+ event.id, {
            method: 'DELETE'
        } 
        ). then (() => {
            history.push('/checklist');
        })
    };
    function sendID () {
        return(
            <EditForm id={id} />
        )
    };
    return ( 
        
        <div className="event-details">
            
            {/* <EditForm /> */}
            { isPending && <div>Loading...</div> }
            { error && <div>{ error }</div> }
            { event && (
                <article>
                    <h2>{ event.eventType }</h2>
                    <div>{ event.time }</div>
                    <hr />
                    <div> { event.eventNote }</div>


                    
                    <button onClick={handleClick}>Delete Event</button>
                <Link to={`/edit`}> 
                    <button onClick={() => sendID()}>Edit Event</button>
                </Link>
                </article>
            )}
            
        </div>
     );
}
 
export default EventDetails;