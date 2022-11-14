

const ContentHome = ({USER_EVENTS}) => {

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
                var note = array[y].eventNote;
                if (array[y] === array[array.length - 1]) {
                    statement += todo+" @ "+time+" "+note;
                } else {
                    statement += todo+" @ "+time+" "+note+", ";
                };
                
                
            }
            TimeTable[i]=[];
            TimeTable[i].push(statement)
            TimeTable[i].splice(0,0,pop);

        }
    }
    console.log({TimeTable});
    var GetElement = TimeTable[11];
    TimeTable.splice(11,1);
    TimeTable.splice(0,0,GetElement);

    var TakeElement = TimeTable[23];
    TimeTable.splice(23,1);
    TimeTable.splice(12,0,TakeElement);

    const current = new Date();
    const date =  `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
    return (
        <div class="content-home">
            <h1><u>Date: {date}</u></h1>
            <br />
            <div className="home">
                <div class="row">
                    <div class="hour">TIME</div>
                    <div class="task">EVENTS</div>
                </div>
            {
                
                TimeTable.map((ele) => {
                    return (
                    <div class="row2">
                    <div class="hour2">{ele[0]}</div>
                    <div class="task2">{ele[1]}</div>
                    </div> 
                    )
                 
                })
            }
            
            </div>
        </div>
        

       
        
      );
}
 
export default ContentHome;