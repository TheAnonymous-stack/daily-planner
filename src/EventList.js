// import { useEffect } from 'react';
// import { useState } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ USER_EVENTS }) => {

   
    // const [checked, setChecked] = useState([]);
    
    // const handleCheck = (e) => {
        
    //     var updatedList = [...checked];
    //     console.log({updatedList});
    //     if (e.target.checked) {
    //         updatedList = [...checked, e.target.value];
    //     } else {
    //         updatedList.splice(checked.indexOf(e.target.value),1);
    //     }
    //     setChecked(updatedList);
    //     console.log({checked});
        
    // };
    // function handleCheckall() {
    //     checked = [];
    //     // var UpdatedList = [];
    //     // USER_EVENTS.map(e => {
    //     //     var ele = e.toString();
    //     //     UpdatedList.push(ele)
    //     // })
    //     // setChecked(UpdatedList);
    // }
    // function handleCheckall() {
    //     const TABLE = [];
    //     USER_EVENTS.map(ev => {
    //         var a = [];
    //         a.push(ev);
    //         TABLE.push(`${a}`);
    //     })
    //     setChecked(TABLE);
    //     console.log({checked});
    // }
    // function handleCheckall() {
    //     var UpdatedList = [...checked,USER_EVENTS];
    //     setChecked(UpdatedList);
    //     console.log({UpdatedList});
            
    //     }


    
    
        
    // }
    // const [isCheckAll, setIsCheckAll] = useState(false);
    // const [isCheck, setIsCheck] = useState([]);
    // const [list, setList] = useState()

    // useEffect(() => {
    //     setList(USER_EVENTS);
    // },[USER_EVENTS]);

    // const handleCheckall = e => {
    //     setIsCheckAll(!isCheckAll);
    //     setIsCheck(list.map(li => li.id));
    //     if (isCheckAll) {
    //         setIsCheck([])
    //     }
    // };

    // const handleCheck = e => {
    //     const { id, checked } = e.target;
    //     setIsCheck([...isCheck, id]);
    //     if (!checked) {
    //         setIsCheck(isCheck.filter(item => item !== id));
    //     }
    // };
    function handleDeleteAll() {
        USER_EVENTS.map((e) => {
            fetch('http://localhost:8000/events/'+e.id , {
            method: 'DELETE'
        })
        
        })
        window.location.reload(false);
        
    };
   function handleCheckall() {
    USER_EVENTS.map((event) => {
        const isChecked = true;
        const eventType = event.eventType;
        const time = event.time;
        const eventNote = event.eventNote;
                        
        const update = { eventType, time, eventNote, isChecked };
        
        fetch('http://localhost:8000/events/'+ event.id, {
            method: 'PUT',
            headers: {"Content-Type": "application/json" },
            body: JSON.stringify(update)

            });
            window.location.reload(false);
    })
   };
   function handleDeleteChecked() {
    USER_EVENTS.map((event) => {
        if (event.isChecked === true) {
            fetch('http://localhost:8000/events/'+ event.id, {
            method: 'DELETE'
        })
        }
    })
    window.location.reload(false);
   };
    
    return (
        
    <div className="bigger-eventlist">
        <div className="add-ons">
            <button onClick={handleDeleteChecked}>Delete all checked item</button>
            <button onClick ={handleDeleteAll}>Delete all items</button>
            <button onClick={handleCheckall}>Check all item</button>
        </div>
        
      
        
        <div className="event-list">
            
            
            {USER_EVENTS.map((event) => (
                
                <div className="event-preview" key={event.id}>
                    
                    <input 
                    value={event} 
                    type="checkbox"
                    onChange={() => {
                        const isChecked = !event.isChecked;
                        const eventType = event.eventType;
                        const time = event.time;
                        const eventNote = event.eventNote;
                        
                        const update = { eventType, time, eventNote, isChecked };
                        console.log({update});
                        fetch('http://localhost:8000/events/'+ event.id, {
                            method: 'PUT',
                            headers: {"Content-Type": "application/json" },
                            body: JSON.stringify(update)

                        });
                        window.location.reload(false);
                    }}
                    checked={event.isChecked}
                    
                    
                
            />
                    
                    <Link to={ `/events/${event.id}` }>
                         
                          
                           <h2>{ event.eventType }</h2>
                        
                           <p>Time: { event.time }</p>
                           
                    </Link>               

                </div>
 
            ))}
        </div>
        </div>
    
      );
}
 
export default EventList ;