// 1. setup
// Import the npm package express from the node_modules folder
import express from 'express';

// Import the custom function fetchJson from the ./helpers folder
import fetchJson from './helpers/fetch-json.js';

// Set the base endpoint
const apiUrl = "https://fdnd-agency.directus.app/items/";
const apiHouse = `${apiUrl}f_houses/`;
const apiHouseIMG = `${apiUrl}f_houses?fields=*,poster_image.id,poster_image.height,poster_image.width/`;
const apiList = `${apiUrl}f_list/`;
const apiUsers = `${apiUrl}f_users/`;
const apiFeedback = `${apiUrl}f_feedback/`;

// Create a new express app
const app = express();

// Set ejs as the template engine
app.set('view engine', 'ejs');
app.set('views', './views');

// Use the 'public' folder for static resources, such as stylesheets, images, and client-side JavaScript
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// 2. routes

app.get(["/", "/index"], async function (request, response) {
  try {
    const apiUsersData = await fetchJson(apiUsers);
    response.render("index", {
      apiUsers: apiUsersData.data
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Internal Server Error");
  }
});


app.get("/lijsten", async function (request, response) {
  try {
    const housesPromise = fetchJson(apiHouse);
    const listPromise = fetchJson(apiList);

    const [houses, lists] = await Promise.all([housesPromise, listPromise]);

    response.render("lijsten", {
      houses: houses.data,
      lists: lists.data
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Internal Server Error");
  }
});

app.get('/lijsten/:id', function (request, response) {
  fetchJson(apiList + request.params.id + '?fields=*.*.*,houses.f_houses_id.poster_image.id,houses.f_houses_id.poster_image.width,houses.f_houses_id.poster_image.height')
    .then((apiData) => {
      if (apiData.data.houses && apiData.data.houses.length > 0) {
        response.render('lijst.ejs', { list: apiData.data });
      } else {
        response.render('lijst_empty.ejs');
      }
    }).catch((error) => {
      console.error('Error fetching data:', error);
      response.status(500).send('Internal Server Error');
    });
});

app.post('/lijsten/:id', function(request, response) {
  let body = JSON.stringify({
    house: Number(request.body.house_id),
    list: Number(request.body.list_id),
    user: 11,
    rating: JSON.stringify(request.body.rating),
    note: request.body.notities
  });

  fetchJson(`https://fdnd-agency.directus.app/items/f_feedback/?limit=8000&filter[house][_eq]=${request.body.house_id}`, {
    method: 'POST',
    body: body,
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
  }).then((postResponse) => {
    if (request.body.clientside) {
      response.render('lijst', { added: true });
    } else {
      response.redirect(303, '/succes/');
    }
  }).catch(error => {
    console.error('Fetch error:', error);
    response.status(500).send('Internal Server Error');
  });
});

app.get("/succes", async function (request, response) {
  try {
    const apiUsersData = await fetchJson(apiUsers);
    response.render("succes", {
      apiUsers: apiUsersData.data
    });
  } catch (error) {
    console.error("Error fetching data:", error);
    response.status(500).send("Internal Server Error");
  }
});

// 3. Start the web server
// Set the port number for express to listen on
app.set('port', process.env.PORT || 8000);

// Start express, retrieve the port number
app.listen(app.get('port'), function () {
  // Display a message in the console and provide the port number
  console.log(`Application started on http://localhost:${app.get('port')}`);
});
