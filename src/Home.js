// import { grid } from "@mui/system";
import Middleman from "./Middleman";
import { useLocation } from "react-router-dom";

const Home = () => {

    const receive = useLocation();
    const TimeTable = receive.state.TimeTable;
    console.log({TimeTable});

    // const output = document.querySelector('.output');
    // // const grid = {rows: 25, cols: 2};
    // // const total = grid.rows * grid.cols;

    
    // function CreateGrid(tot){
    //     const ele = document.createElement('div');
    //     output.appendChild(ele);
    //     ele.textContent = `Time`;
    //     ele.classList.add('Timebox');
    //     ele.textContent = `Events`;
    //     ele.classList.add('Eventsbox');
    //     ele.textContent = `12AM`;
    //     ele.classList.add('12AMbox');
    //     for(let i = 1;i<tot;i++){
    //         const element = document.createElement('div');
    //         output.appendChild(element);
            
    //         if (i<12) {
    //             var TIMEAM = i.toString() + "AM"
    //             element.textContent = TIMEAM
    //             element.classList.add( TIMEAM +'box');
    //         } else {
    //             var newhour = i - 12
    //             var TIMEPM = newhour.toString()+'PM'
    //             element.textContent = TIMEPM
    //             element.classList.add( TIMEPM +'box');
    //         };
            

    //     }
    // }
    // console.log(CreateGrid(24));
   
    

function grid() {
    var container = document.createElement('div');
    
    container.className = "home";
    var TIME = document.createElement('div');
    TIME.className = "Time";
    TIME.textContent = "Time";
    container.appendChild(TIME);
    var EVENTS = document.createElement('div');
    EVENTS.className = "Events";
    EVENTS.textContent = "Events";
    container.appendChild(EVENTS);
    var TwelveAM = document.createElement('div');
    TwelveAM.className = "12AM";
    TwelveAM.textContent = "12AM";
    container.appendChild(TwelveAM);
    
    if (TimeTable[11].length === 1) {
        var task = document.createElement('div');
        task.className = 'task12AM'
        task.textContent = '';
        container.appendChild(task);
    } else {
        var task = document.createElement('div');
        task.className = 'task12AM'
        task.textContent = ...TimeTable[11];
        container.appendChild(task);
    }

    for (var i = 1; i < 16; i++) {
        var num = i.toString();
        var row = document.createElement('div');
        row.className = "row"+ num;
        row.textContent = 
        

        

        container.appendChild(row);
    }

    return container;
}

console.log(grid());

    
  
    

    

    return (
    <div className="bigger-home">
        <Middleman />
             
  
   
        
        {/* <div className="home">
            
            <div className="item1">Time</div>
            <div className="item2">Events</div>
            <div class="item3">12AM</div>
            <div class="item4"></div>
            <div class="item5">1AM</div>
            <div class="item6"></div>
            <div class="item7">2AM</div>
            <div class="item8"></div>
            <div class="item9">3AM</div>
            <div class="item10"></div>
            <div class="item11">4AM</div>
            <div class="item12"></div>
            <div class="item13">5AM</div>
            <div class="item14"></div>
            <div class="item15">6AM</div>
            <div class="item16"></div>
            <div class="item17">7AM</div>
            <div class="item18"></div>
            <div class="item19">8AM</div>
            <div class="item20"></div>
            <div class="item21">9AM</div>
            <div class="item22"></div>
            <div class="item23">10AM</div>
            <div class="item24"></div>
            <div class="item25">11AM</div>
            <div class="item26"></div>
            <div class="item27">12PM</div>
            <div class="item28"></div>
            <div class="item29">1PM</div>
            <div class="item30"></div>
            <div class="item31">2PM</div>
            <div class="item32"></div>
            <div class="item33">3PM</div>
            <div class="item34"></div>
            <div class="item35">4PM</div>
            <div class="item36"></div>
            <div class="item37">5PM</div>
            <div class="item38"></div>
            <div class="item39">6PM</div>
            <div class="item40"></div>
            <div class="item41">7PM</div>
            <div class="item42"></div>
            <div class="item43">8PM</div>
            <div class="item44"></div>
            <div class="item45">9PM</div>
            <div class="item46"></div>
            <div class="item47">10PM</div>
            <div class="item48"></div>
            <div class="item49">11PM</div>
            <div class="item50"></div>
            


        </div> */}
    </div>
        
      )
}
 
export default Home; 