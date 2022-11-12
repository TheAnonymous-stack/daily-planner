

const ContentHome = ({USER_EVENTS}) => {
   console.log({USER_EVENTS})
   const TimeTable = [];
   var x
   for (let i = 1; i<13; i++) {
    const a = [];
    let num = i.toString();
    let hour = num+'AM';
    a.push(hour);
    TimeTable.push(a);
   };

   for (let i = 13; i<25; i++) {
    const a = [];
    x = i-12
    let num = x.toString();
    let hour = num+'PM';
    a.push(hour);
    TimeTable.push(a);
   };
   
   USER_EVENTS.map((event) => {
    let time = event.time;
    const data = time.split(":");
    const hour = data[0];
    const period = data[1].split(" ")[1];
    const combinedTime = hour+period;

 
   
    for (let y = 0; y<24; y++ ) {
        
        if (combinedTime === TimeTable[y][0]) {
           
            TimeTable[y].push(event);
            break
            
        };
    }}
    
    );
    for (let i in TimeTable) {
       
        if(TimeTable[i].length === 1) {
            TimeTable[i].push('')
        } else {
            var array = [];
            var pop = TimeTable[i].shift();
            array = [...TimeTable[i]];
            var statement = ''
            for (let y in array) {
                var todo = array[y].eventType;
                var time = array[y].time;
                statement += todo+" @ "+time+" "
                
            }
            TimeTable[i]=[];
            TimeTable[i].push(statement)
            TimeTable[i].splice(0,0,pop);

        }
    }
    var GetElement = TimeTable[11];
    TimeTable.splice(11,1);
    TimeTable.splice(0,0,GetElement);

    var TakeElement = TimeTable[23];
    TimeTable.splice(23,1);
    TimeTable.splice(12,0,TakeElement);

    console.log({TimeTable});

    // const Table = [];

    // function Grid() {
            
        
            
    //         // var container = document.createElement('div');
            
    //         // container.className = "home";
    //         var TIME = document.createElement('div');
    //         TIME.className = "Time";
    //         TIME.textContent = "Time";
            
    //         Table.push(TIME);
            
            
    
    //         var EVENTS = document.createElement('div');
    //         EVENTS.className = "Events";
    //         EVENTS.textContent = "Events";
            
    //         Table.push(EVENTS);
    //         var TwelveAM = document.createElement('div');
    //         TwelveAM.className = "12AM";
    //         TwelveAM.textContent = "12AM";
            
    //         Table.push(TwelveAM);
                
    //         if (TimeTable[11].length === 1) {
    //             var task = document.createElement('div');
    //             task.className = 'task12AM'
    //             task.textContent = '';
    //             Table.push(task);
    //         } else {
    //             var statement = "";
    //             const newArray = [...TimeTable[11]];
    //             const pop = newArray.shift();
    //             var Task = document.createElement('div');
    //             Task.className = 'task12AM'
                
    //             for (let x in newArray) {
    //                 var event = newArray[x].eventType;
    //                 var time = newArray[x].time;
    //                 var todo = event+" @ "+time+" ";
    //                 statement += todo;
                    
    //             }
    //             Task.textContent = statement;
                
    //             Table.push(Task);
    //             newArray.splice(0,0,pop);
    //         };
        
    //         for (var i = 1; i < 24; i++) {
    //             if (i < 12){
    //                 var num = i.toString();
    //                 var AM = document.createElement('div');
    //                 AM.className = num+"AM";
    //                 AM.textContent = num+"AM";
    //                 Table.push(AM);
    //                 var taskAM = document.createElement('div');
    //                 taskAM.className = "task"+num+"AM";
    //                 if (TimeTable[i-1].length === 1){
    //                     taskAM.textContent = "";
    //                     Table.push(taskAM);
    //                 } else {
    //                     var Statement = "";
    //                     const NewArray = [...TimeTable[i-1]];
    //                     const Pop = NewArray.shift();
    //                     for (let y in NewArray) {
    //                         var Event = NewArray[y].eventType;
    //                         var Time = NewArray[y].time;
    //                         var Todo = Event+" @ "+Time+" ";
    //                         Statement += Todo;
                            
    //                     }
    //                     // console.log({NewArray});
                        
    //                     taskAM.textContent = Statement;
    //                     // taskAM.textContent = NewArray;
    //                     Table.push(taskAM);
    //                     NewArray.splice(0,0,Pop);
    //                 };
                    

    //             } else if (i === 12) {
    //                 var stringtime = i.toString();
    //                 var mid = document.createElement('div');
    //                 mid.className = stringtime+"PM";
    //                 mid.textContent = stringtime+"PM";
    //                 Table.push(mid);
    //                 var task12PM = document.createElement('div');
    //                 task12PM.className = "task"+stringtime+"PM";
    //                 if (TimeTable[23] === 1) {
    //                     task12PM.textContent = "";
    //                     Table.push(task12PM);
    //                 } else {
    //                     var StateMent = "";
    //                     const NewList = [...TimeTable[23]];
    //                     const shift = NewList.shift();
    //                     for (let z in NewList) {
    //                         var EVent = NewList[z].eventType;
    //                         var TIme = NewList[z].time;
    //                         var ToDo = EVent+" @ "+TIme+" ";
    //                         StateMent += ToDo;
    //                 }
    //                     task12PM.textContent = StateMent;
                        
    //                     Table.push(task12PM);
    //                     NewList.splice(0,0,shift);
    //                 }
                    

    //             }
    //              else if (i > 12){
    //                 var newhour = i - 12;
                    
    //                 var Newhour = newhour.toString();
    //                 var PM = document.createElement('div');
    //                 PM.className = Newhour+"PM";
    //                 PM.textContent = Newhour+"PM";
    //                 Table.push(PM);
    //                 var taskPM = document.createElement('div');
    //                 taskPM.className = "task"+Newhour+"PM";

                  
    //                 if (TimeTable[i-1].length === 1){
    //                     taskPM.textContent = "";
    //                     Table.push(taskPM);
    //                 } else {
    //                     var stateMent = "";
    //                     const NewList = [...TimeTable[i-1]];
    //                     const shift = NewList.shift();
    //                     for (let z in NewList) {
    //                         var eVent = NewList[z].eventType;
    //                         var tIme = NewList[z].time;
    //                         var toDo = eVent+" @ "+tIme+" ";
    //                         stateMent += toDo;
                            
    //                     }
                        
    //                     taskPM.textContent = stateMent;
    //                     // taskPM.textContent = NewList;
    //                     Table.push(taskPM);
    //                     NewList.splice(0,0,shift);
    //                 };


    //             }
    //         }
       

    //         // return Table;
            
    //     }
    //     Grid();
    
        
    //    console.log(grid());
    // function Grid() {
    //     return(
    //         <div className="home">
            
    //         <div className="item1">Time</div>
    //         <div className="item2">Events</div>
    //         <div class="item3">12AM</div>
            
    //         <div class="item4">random @ 12:14AM, work @ 7:11AM, beer @ 9:30PM, school @ 10PM, games @ 2PM</div>
    //         <div class="item5">1AM</div>
    //         <div class="item6"></div>
    //         <div class="item7">2AM</div>
    //         <div class="item8"></div>
    //         <div class="item9">3AM</div>
    //         <div class="item10"></div>
    //         <div class="item11">4AM</div>
    //         <div class="item12"></div>
    //         <div class="item13">5AM</div>
    //         <div class="item14"></div>
    //         <div class="item15">6AM</div>
    //         <div class="item16"></div>
    //         <div class="item17">7AM</div>
    //         <div class="item18"></div>
    //         <div class="item19">8AM</div>
    //         <div class="item20"></div>
    //         <div class="item21">9AM</div>
    //         <div class="item22"></div>
    //         <div class="item23">10AM</div>
    //         <div class="item24"></div>
    //         <div class="item25">11AM</div>
    //         <div class="item26"></div>
    //         <div class="item27">12PM</div>
    //         <div class="item28"></div>
    //         <div class="item29">1PM</div>
    //         <div class="item30"></div>
    //         <div class="item31">2PM</div>
    //         <div class="item32"></div>
    //         <div class="item33">3PM</div>
    //         <div class="item34"></div>
    //         <div class="item35">4PM</div>
    //         <div class="item36"></div>
    //         <div class="item37">5PM</div>
    //         <div class="item38"></div>
    //         <div class="item39">6PM</div>
    //         <div class="item40"></div>
    //         <div class="item41">7PM</div>
    //         <div class="item42"></div>
    //         <div class="item43">8PM</div>
    //         <div class="item44"></div>
    //         <div class="item45">9PM</div>
    //         <div class="item46"></div>
    //         <div class="item47">10PM</div>
    //         <div class="item48"></div>
    //         <div class="item49">11PM</div>
    //         <div class="item50"></div>
            


    //     </div>
    //     )
    // }
  
      
    
    // const names = [["1AM",''], ['2AM','work at 2AM']];

    return (
        <div className="content-home">
            <div className="home">
                <div class="row">
                    <div class="hour">Time</div>
                    <div class="task">Events</div>
                </div>
            {
                
                TimeTable.map((ele) => {
                    return (
                    <div class="row">
                    <div class="hour">{ele[0]}</div>
                    <div class="task">{ele[1]}</div>
                    </div>
                     
                    
                        
                        
                    )
                    // console.log(ele); 
                })
            }
            {/* <h1>Content home</h1> */}
            {/* <Grid /> */}
            </div>
        </div>
        

       
        
      );
}
 
export default ContentHome;