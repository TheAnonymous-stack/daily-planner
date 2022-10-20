
import EventList from "./EventList";
import useFetch from './useFetch';

const Home = () => {
    const { data: USER_EVENTS, isPending, error } = useFetch('http://localhost:8000/events');

    return (
        <div className="home">
            { error && <div>{ error }</div>}
            { isPending && <div>Loading...</div> }
            {USER_EVENTS && <EventList USER_EVENTS={USER_EVENTS} title="Schedule" />}
        </div>
      );
}
 
export default Home; 