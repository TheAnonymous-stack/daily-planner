Project Description: A personal calendar to help users keep track of their schedule. Events are shown in diverse medium, featuring timetable and checklist. The fundamental functions of a calendar are all available, such as adding, editing events/event notes, or checking and deleting single or all events. 

Problems Encountered & Solutions:

P: No background in JavaScript, HTML, and CSS
S: Learned and practice such programming languages on freeCodeCamp

P: No background or prior knowledge in web development
S: Watch React tutorial videos on Youtube by Net Ninja, Web Dev Simplified, etc.

P: Display a dynamic timetable for the schedule
S: 
- ATTEMPT 1: Embedded all the div tags to code the entire timetable in JavaScript within a function but React could not render the content because the function did not return anything.
- ATTEMPT 2: Added all the div tags for the timtable in HTML into an array, then used map method to display each div tag but that did not work.
- ATTEMPT 3: Created a multi-dimensional array. Each sub-array contains the first element as the hour then the following are events that take place within the same hour. Added a JavaScript section in the render section to loop through the master array and created div tag for each sub-array. Mission Accomplished!

P: Allow users to edit details of an event and update it in the JSON database
S: Used 'PUT' request

P: Create checkboxes for events but lost the value of the state when the page reloads
S: Created another property for each event called 'isChecked' in the JSON database and set it to false for every new event. Upon ticking the checkbox, a 'PUT' request will be sent to the JSON database. The tick would only be shown if the 'isChecked' property of the event is true.

P: Heroku cannot fetch the API of the JSON database due to access control checks
S: 
- ATTEMPT 1: Moved the 'Procfile' and 'db.json out' of the 'src' folder but the problem persisted.
- ATTEMPT 2: Deployed the JSON database as a separate web and the main web will fetch data directly from the URL of the database.

P: Unable to identify which div class to be selected for design in CSS
S: Used 'Inspect' function in Google Chrome to help navigate the components of a page

P: Not knowing what colors go well together to make the web more visually pleasant
S: Found the web called 'colorhunt.io' that provides color palettes based on themes. Experimented different palettes and mixed and match using personal taste.

P: The checkbox is not ticked when clicked
S: Recognized that the page had reloaded before a response fetched from the database was received, so the value for 'isChecked' remained to be false. Only after several reloads was the tick displayed. Although performance-wise, it is not ideal to make users wait unnecessarily for the web operations, there was no other choice than adding wait time, so that the fetch responses would be received before the page reloads to show the most current state.

Future Updates:
- Improve the speed of the code for checklist page
- Personalize the schedule by saving the schedule details in a user profile
- Allow users to view and set their calendar in month and in year
- Allow users to set reminders for events
- System-generated compliments each time a box is checked
