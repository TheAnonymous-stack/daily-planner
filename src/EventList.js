// import { Link } from 'react-router-dom';
const EventList = ({ USER_EVENTS, title }) => {
    
    // const handleClick = () => {
    //     fetch('http://localhost:5000/events/')

    // }

    return (
        <div className="event-list">
            <h2>{ title }</h2>
            {USER_EVENTS.map((event) => (
                <div className="event-preview" key={event.id}>
                    {/* <Link to={ '/events/$(event.id)' }> */}
                        <h2>{ event.eventType }</h2>
                        
                        <p>Time: { event.time }</p>
                        {/* <button onClick={handleClick}>Delete Event</button> */}
                    {/* </Link>                */}

                </div>
 
            ))}
        </div>
      );
}
 
export default EventList ;