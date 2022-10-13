const Test = () => {
    const USER_EVENTS = [
        {
            eventType: "workout",
            date: "3/4/2020",
        },
        {
            eventType: "lunch",
            date: "3/4/2020",
        },
        {
            eventType: "study",
            date: "3/4/2020",
        },
    ];
    const addEvent = (eventType, date) => {
        USER_EVENTS.push({
            eventType: {eventType},
            date: {date}
        });
    };

    addEvent("sleep","3/4/2020");
    const result = () => {
        console.log(USER_EVENTS);
    };

    return (
        <div>
            <button onClick={result}>Click</button>
        </div>
    );
    
}

export default Test;

