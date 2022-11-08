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
    console.log({TimeTable});

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
                
                const newArray = [...TimeTable[11]];
                const pop = newArray.shift();
                var Task = document.createElement('div');
                Task.className = 'task12AM'
                Task.textContent = newArray;
                container.appendChild(Task);
                newArray.splice(0,0,pop);
            };
        
            for (var i = 1; i < 24; i++) {
                if (i < 12){
                    var num = i.toString();
                    var AM = document.createElement('div');
                    AM.className = num+"AM";
                    AM.textContent = num+"AM";
                    container.appendChild(AM);
                    var taskAM = document.createElement('div');
                    taskAM.className = "task"+num+"AM";
                    if (TimeTable[i].length === 1){
                        taskAM.textContent = "";
                        container.appendChild(taskAM);
                    } else {
                        const NewArray = [...TimeTable[i]];
                        const Pop = NewArray.shift();
                        taskAM.textContent = NewArray;
                        container.appendChild(taskAM);
                        NewArray.splice(0,0,Pop);
                    };

                }
                 else if (i >= 12){
                    var newhour = i - 12;
                    if (newhour === 0){
                        newhour = 12;
                    }
                    var Newhour = newhour.toString();
                    var PM = document.createElement('div');
                    PM.className = Newhour+"PM";
                    PM.textContent = Newhour+"PM";
                    container.appendChild(PM);
                    var taskPM = document.createElement('div');
                    taskPM.className = "task"+Newhour+"PM";
                    if (TimeTable[i].length === 1){
                        taskPM.textContent = "";
                        container.appendChild(taskPM);
                    } else {
                        const NewList = [...TimeTable[i]];
                        const shift = NewList.shift();
                        taskPM.textContent = NewList;
                        container.appendChild(taskPM);
                        NewList.splice(0,0,shift);
                    };


                }
            }
        
            return container;
        }
        
        console.log(grid());

    return (
        <div></div>
      );
}
 
export default ContentHome;