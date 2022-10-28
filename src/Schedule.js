
const Schedule = ({USER_EVENTS}) => {
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
   //eslint-disable-next-line
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
    }});
    console.log({TimeTable})

    
   
   
    
  
    
return (
   <h1>Schedule</h1>
);
}
 
export default Schedule;