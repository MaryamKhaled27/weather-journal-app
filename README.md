# Weather-Journal App Project
...copyright (c) 2021 maryam khaled

## Project Requirements
This project requires to create an asynchronous web app that uses Web API and user data to dynamically update the UI. 

### Project Instructions

1 setting up project environment by install node.js & Installing the packages Express, Body-Parser, and Cors from the terminal.

2 Create API credentials on OpenWeatherMap.com &  JavaScript Object named projectData initiated in the file server.js to act as the app API endpoint.<br> saving APIKey in a const variable & passed as a parameter to fetch() .

3 GET route setup on the server side with the first argument as a string naming the route, and the second argument a callback function to return the JS object created at the top of server code.

4 add a POST route that adds incoming data to projectData. After successfulling retrieval of the weather data, we chain another Promise that makes a POST request to add the API data, as well as data entered by the user, to app.

5 Finally, chain another Promise that updates the UI dynamically Write another async function to retrieve that app’s data on the client side, existing DOM elements should have their innerHTML properties dynamically set according to data returned by the app route.

#### Developing Tool
we use visual studio code as developing tool and  browser console to test code.
 

