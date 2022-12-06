

import ContentHome from "./ContentHome";
import useFetch from "./useFetch";


const Home = () => {
    const { data: USER_EVENTS } = useFetch('https://foamy-thankful-backbone.glitch.me/events');

    return (
    <div className="bigger-home">
        {USER_EVENTS && <ContentHome USER_EVENTS={USER_EVENTS} />}
        
    </div>
        
      )
}
 
export default Home; 