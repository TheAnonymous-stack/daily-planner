const removeFunction = () => {
 

const removeEvent = (eventType, date) => {
    const index = USER_EVENTS.findIndex(object => {
        return object.eventType === eventType && object.date === date;
    });
    USER_EVENTS.splice(index,1);
};


    

 

 

 return (
    <div>
        <button onClick={result}>Click</button>

    </div>
    
);
}

export default removeFunction;
    