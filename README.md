# Project 3: Airbnb E-xperience - MERN Full-Stack Application

Group size: ***[Anna Wilczynska](https://github.com/anwilcz), [Rhona Petersen](https:///github.com/rhonabpetersen), [Talia Glantz](https:///github.com/taliaglantz), [Jamie Joahill](https:///github.com/JamieJoahill)*** 
</br>
Duration: ***10 days***
</br>
Technologies used: ***JavaScript, React, MongoDB, Express, Node.js, CSS, Semantic UI)***
</br>
</br>
![Main image](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026320/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb-main_m12yi7.png)
</br>
### [✨ View deployment ✨](https://airbnb-experience.herokuapp.com/)
</br>

## Brief

The project aim was to build a full-stack application including its own backend and frontend setup by using Express API to serve data from the Mongo database and render information in the browser by JavaScript React. 

## Guest credentials
username: anwilcz </br> 
email: anwilcz@email.com </br>
password: pass123% </br>

## Contents

- [Overview](#overview)
 - [Concept](#concept)
- [Technologies used](#technologies-used)
  - [Languages](#languages)
  - [Database](#database)
  - [Frameworks and libraries](#frameworks-and-libraries)
  - [Environment](#environment)
  - [Public API's](#public-apis)
  - [Dependencies](#dependencies)
- [Planning](#planning)
  - [Approach and planning](#approach-and-planning)
  - [My contribution](#my-contribution)
- [Project development](#project-development)
  - [Backend](#backend)
    - [Backend frameworks and libraries](#backend-frameworks-and-libraries)
    - [Models](#models)
    - [Relationships](#relationships)
    - [Authentication](#authentication)
    - [Data validation](#data-validation)
    - [Seeding](#seeding)
  - [Frontend](#frontend)
    - [Frontend frameworks and libraries](#frontend-frameworks-and-libraries)
    - [Navbars](#navbars)
    - [Calendar](#calendar)
    - [Forms](#forms)
    - [Filters](#filters)
    - [Responsive design](#responsive-design)
  - [API's](#apis)
- [Deployment](#deployment)
- [Installation](#installation)
- [Wins and challenges](#wins-and-challenges)
- [Key learning](#key-learning)
- [Future upgrades](#future-upgrades)
- [Copyright and licensing](#copyright-and-licensing)

## Overview
Third project built during the Software Engineering Immersive course at the General Assembly.

### Concept
The application was inspired by the Airbnb experience that operates the marketplace for listed activities. The project includes various filters that allow clipping data to the area of interest of potential customers, handles CRUD requests, user authentication, data validation and post features for profile and custom experience page. Registered users can add their own experience through a multi field form request and favourite listings that already exist in the database.

## Technologies used

### Languages
- **JavaScript** - frontend and backend in Node.js environment
- **CSS** - styling

### Database
- **MongoDB**

### Frameworks and libraries
- **Express** - structures backend of the application
- **React** - builds frontend of a single-page application
- **Axios** - serves HTTP requests
- **Rsuite** - library of React components
- **SemanticUI** - CSS styling library
- **Mongoose** - ODM library for MongoDB

### Environment
- **Node.js**  - server setup

### Public API's
- **Mapbox** - map tools and services
- **Cloudinary** - hosting images

### Dependencies

### Backend dependencies
- bcrypt v5.0.1
- dotenv v10.0.0
- express v4.17.1
- jsonwebtoken v8.5.1
- mongo v0.1.0
- mongod v2.0.0
- mongodb v4.1.4
- mongoose v6.0.13
- mongoose-unique-validator v3.0.0
- nodemon v2.0.15

### Frontend dependencies
- mapbox-gl v2.6.1
- react-map-gl v5.0.0
- axios v0.21.1
- http-proxy-middleware v1.0.5
- jquery v3.6.0
- react v17.0.2
- react-dom v17.0.1
- react-router-dom v5.3.0
- react-scripts: 4.0.3 
- rsuite v5.4.3
- semantic-ui-css v2.4.1
- semantic-ui-react v2.0.4
- suite v0.2.0

## Planning

### Approach and planning
Before committing to the development stage we had a group discussion on the concept and split of work. Our group used Figma to create wireframes of the look of the application we were aiming for and used Trello to identify the tasks. 
</br>
</br>
At the beginning, we decided to split the group into two subgroups each responsible for backend or frontend. Talia and I prepared the frontend directory and Rhona& Jamie focused on the backend. When the setup was completed, we built the main elements of the database. We identified the types of models that would be used to structure database documents and the relationships between them. Then, we decided to support each other ticking off the tasks on the Trello list.
</br>
</br>
We agreed to attend morning stand-ups and the end of the day catch-up calls every day throughout the project week. We used the morning standups to identify our daily targets and split the work into steps. We would estimate how much of the resource we require to complete a particular task to fit in the timeline and discuss how we can support team members working on high complexity tasks. At the end of each day, we had a catch-up call on Zoom, where we would summarize our work and sign off the completed tasks. We were often present on Zoom or sharing our thoughts on Slack conversations.
</br>
</br>
![Tasks](https://res.cloudinary.com/dulbdr0in/image/upload/v1641950635/ReadMe%20Images/SEI_ReadMes/Airbnb/Screenshot_2022-01-06_at_00.23.26_ctun06.png)

### My contribution
My contribution to the project includes: 
- Building database document Schemas.
- Adding exemplary documents, in the form of Json objects, to the database.
- Preparing the template for our website that would imitate the original Airbnb experience page, adjusting Semantic UI classes to match the desired look.
- Graphic design of the logo.
- Creating a responsive navbar that changes its appearance depending on the current URL.
- Implementing Rsuite React component - Date range picker to navbar and adjusting it to match Airbnb calendar look.
- Writing JavaScript functions handling the filters and allowing clipping data to the search requirements.
- Building a home page with suggested activities available in the current week.
- Handling search requests with URL parameters and React hooks.
- Handling add to/ remove from wishlist functions. 
- Creating pop-up windows for login, registration forms, and also redirected and goodbye messages.
- Rendering login, registration, new experience error messages in the forms and fixing bugs of the error handling on backend side.
- Adding Schemas for nested form objects for accurate data validation.  
- Setting up React router and different endpoints.
- Making the views responsive to different screen sizes.
- Making the experiences documents reusable. (This project will not be actively seeded with new data, that is why I implemented a function that reuses the dataset regardless of the document dates - the dates will be updated to the current year/month but days will always remain the same).


## Project development
### Backend

### Backend frameworks and libraries
The backend of the application is structured with Express webframe, managed with JavaScript in Node.js environment.
</br>
</br>
Express router controls endpoint requests for the following RESTful routes:

- **Experiences list**</br>
**GET** /api/experiences/</br>
**POST** /api/experiences/ - requires authentication</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/experiences/`</br>
 
- **Experience**</br>
**GET** /api/experiences/:id/</br>
**PUT** /api/experiences/:id/ - requires authentication</br>
**DELETE** /api/experiences/:id/ - requires authentication</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/experiences/:id/`</br> 

- **Comments**</br>
**POST** /api/experiences/:id/comments/ - requires authentication</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/experiences/:id/comments/`</br> 
**DELETE** /api/experiences/:id/comments/:commentId/ - requires authentication</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/experiences/:id/comments/:commentId/`</br> 

- **Register**</br>
**POST** /api/register/</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/register/`</br>

- **Login**</br>
**POST** /api/login/</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/login/`</br> 

- **Profile**</br>
**PUT** /api/profile/ - requires authentication</br>
**GET** /api/profile/ - requires authentication</br>
**URL:** `https://airbnb-experience.herokuapp.com/api/profile/`</br>

### Models
MongoDB documents are structured with Mongoose object data modeling library in the form of Schemas.</br>
</br>
Exemplary Experience Schema:</br>
```
const experienceSchema = new mongoose.Schema({
   name: { type: String, required: true },
   location: { type: String, required: true },
   locationCoord: locationSchema ,
   date: [dateSchema],
   duration: { type: Number, required: true },
   description: { type: String, required: true },
   category: { type: String, required: true },
   image: [{ type: String, required: true }],
   attendees: [{ type: mongoose.Schema.ObjectId, ref: 'User' }],
   host: { type: mongoose.Schema.ObjectId, ref: 'User', required: true }, // host id
   price: { type: String, required: true },
   thingsToKnow: [{ type: Object }],
   languages: [{ type: String }],
   accessibilty: [{ type: String }],
   whatIsIncluded: [{ type: String }],
   reviews: [reviewSchema] // array of indices of reviewSchema instances
})
```

### Relationships
Many to One relationship links reviews documents to experience documents.
Many to Many relationships exist between user documents and experiences documents linked to the user's wishlist.</br>
```
const userSchema = new mongoose.Schema({
     username: { type: String, required: true },
     firstName: { type: String },
     lastName: { type: String },
     email: { type: String, required: true },
     mobile: { type: String },
     profilePicture: { type: String },
     password: { type: String, required: true },
     isHost: { type: Boolean },
     location: { type: String },
     languages: [{ type: String }],
     occupation: { type: String },
     about: { type: String },
     dob: { type: Date },
     wishlist: [{ type: mongoose.Schema.ObjectId, ref: 'Experience' }],
     experiences: [{ type: mongoose.Schema.ObjectId, ref: 'Experience' }]
}
```
### Authentication
Authentication is handled by Express with the JWT token validation.
To allow user authentication the middleware functions handling requests and serving the response are preceded with secure route functions. If the secure route function fails, the next will not be invoked.</br>
```
router.route('/experiences')
   .get( getAllExperiences)
   .post(secureRoute, addExperience)
 
router.route('/experiences/:id')
   .get(getSingleExperience)
   .put(secureRoute, updateExperience)
   .delete(secureRoute, deleteExperience)
```
```
export const secureRoute = async (req, res, next) => {
   try {
       if (!req.headers.authorization) throw new Error()
           const token = req.headers.authorization.replace('Bearer ', '')
           const payload = jwt.verify(token, secret)
           const userToVerify = await User.findById(payload.sub)
       if (!userToVerify) throw new Error
           req.currentUser = userToVerify
           next()
   } catch (err) {
       console.log(err)
       return res.status(401).json({ 'Message': 'Unauthorised' })
   }
}
```
</br>
Login pop-up window:</br>
</br>

![Login popup](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026309/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb_login_sxfblm.png)

### Data validation
Express router accepts only POST and PUT requests that follow route requirements and the object collection Schema. 

### Seeding
Database backup files are saved in the db/data directory. 
Seed.json file in db directory contains the middleware responsible for seeding the database.
The function uses Mongoose to establish connection with the database, remove the existing data and create collections based on Schemas and data documents from backup files. At the end connection to the database is closed.</br>
```
await mongoose.connect(dbURI)
     console.log("🔗 Database is connected")
 
 await mongoose.connection.db.dropDatabase()
     console.log("🎤 Database has been dropped")
 
 const users = await User.create(userData)
     console.log('Users have been added to database')
 
 const experiences = await Experience.create(experiencesWithHost)
     console.log(`DB has been seeded with ${experiences.length} experiences`)
 
 await mongoose.connection.close()
     console.log("❌ Connection to database closed")
```
Instructions on how to seed the database are included in the installation section of this document.

### Frontend

### Frontend frameworks and libraries
The frontend of the project was built with React and libraries such as SemanticUI and Rsuite.

### Navbars
Creating navbars that would respond to different React router routes was one of the main challenges of this project. Navbars change their appearance depending on the URL the user navigates to. The visibility of different DOM elements is manipulated in JavaScript and determined by useState hooks, accessing boolean values.</br>

```
 const history = useHistory()
 const location = useLocation()
 const [price, setPrice] = useState([25, 250])
 const [visibleRegister, setVisibilityRegister] = useState(false)
 const [visibleSeeYou, setVisibilitySeeYou] = useState(false)
 const [visibleLogin, setVisibilityLogin] = useState(false)
 const [username, setUsername] = useState(false)
 const [newUser, createNewUser] = useState(false)
 const [openDatePicker, setDatePicker] = useState(false)
 const [openFilters, setOpenFilters] = useState(false)
 const [datesClicked, setDatesClicked] = useState(false)
 const [displayDates, setDisplayDates] = useState('Select dates')
 const [startDate, setStartDate] = useState('Start date')
 const [endDate, setEndDate] = useState('end date')
 const [minRating, setMinRating] = useState(0)
 const [newRange, setNewRange] = useState(true)
 const [averagePrice, setAveragePrice] = useState('0')
 const [categoryString, setCategoryString] = useState('')
 const [categories] = useState([])
```
```
 // Updates dates displayed on buttons
 useEffect(() => {
   let datesToDisplay
   if (startDate === endDate) {
     datesToDisplay = `${startDate}`
   } else {
     datesToDisplay = `${startDate} - ${endDate}`
   }
   setDisplayDates(datesToDisplay)
 }, [startDate, endDate])
 
 
 // Changes focus on selected button
 useEffect(() => {
   if (openDatePicker) {
     toggleButton()
   }
 }, [datesClicked])


// Opens filter bar when redirected to experiences url 
useEffect(() => {
   if (location.pathname === '/experiences') {
     setOpenFilters(true)
     getAveragePrice()
 
   } else {
     setOpenFilters(false)
     setDatePicker(false)
   }
 }, [location.pathname])
```

Different home page and experience index navbar views:</br>
</br>
![Navbars](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026306/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb-navbars_fbkwki.png)</br>

### Calendar
Calendar feature is based on the Rsuite React component and adapted to the app design requirements.</br>
</br>

```
 // Date picker calendar component -> rsuite module
 const datePicker = (
   <div className='ui item navbar-secondary'>
     <div className='button-center'>
       <p>Experiences</p>
     </div>
     {datePickerButtonLarge}
     <DateRangePicker format={'dd-MMM-yyyy'} toggleAs={'button'}
       onSelect={function (date) {
         const options = { year: 'numeric', month: 'short', day: 'numeric' }
         if (newRange) {
           setStartDate(date.toLocaleDateString(undefined, options))
           setNewRange(false)
         } else {
           setEndDate(date.toLocaleDateString(undefined, options))
           setNewRange(true)
         }
       }} onEnter={function () {
         setDatesClicked(true)
       }} />
   </div>
 )
```

![Calendar](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026301/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb-calendar_ymroho.png)</br>
</br>
Original component’s look:</br>
</br>
![Calendar - original component](https://res.cloudinary.com/dulbdr0in/image/upload/v1641952899/ReadMe%20Images/SEI_ReadMes/Airbnb/Screenshot_2022-01-06_at_02.39.13_zhukt1.png)

### Forms
The new experience form handles data validation and displays alerts from the backend.</br>

```
  <p className='errors'>{errorData.name ? errorData.name.kind : null}</p>
```

![Forms](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026296/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb_new_experience_dxcf2c.png)

### Filters
The application includes various filters that allow clipping data to the area of interest of potential customers.
- Date range
- Category 
- Price 
- Rating
</br>
Search parameters are saved in url string:
</br>
</br>

```
 const setFilter = () => {
   history.push({
     pathname: '/experiences',
     search: `cat=${categoryString}&from=${startDate}&to=${endDate}&pricemin=${price[0]}&pricemax=${price[1]}&rating=${minRating}`
   })
 }
```

![Filters](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026302/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb_filters_mkrskr.png)

### Responsive design
The application is adapted to different screen sizes and fully responsive on computer screens as well as mobile devices. The consistency of the data displayed on different screen sizes is maintained.</br>
</br>

![Responsive design](https://res.cloudinary.com/dulbdr0in/image/upload/v1642026302/ReadMe%20Images/SEI_ReadMes/Airbnb/airbnb_responsive_design_jg5n20.png)

### API's
The project consumes its own API as well as Mapbox and Cloudinary.
Mapbox API provides access to location services whereas Cloudinary handles image upload.</br>

## Deployment
The application was deployed on Heroku.<br>
The database was managed by MongoDB Atlas and loaded onto AWS Cloud.<br> 
[[View deployment]](https://airbnb-experience.herokuapp.com/)

## Installation
1. Clone GitHub project repository to your local machine.
2. Install all dependencies - npm or yarn required.
    - Backend:</br>
      Run `yarn add/npm install`:</br>
      - bcrypt v5.0.1
      - dotenv v10.0.0
      - express v4.17.1
      - jsonwebtoken v8.5.1
      - mongo v0.1.0
      - mongod v2.0.0
      - mongodb v4.1.4
      - mongoose v6.0.13
      - mongoose-unique-validator v3.0.0
      - nodemon v2.0.15
    - Frontend</br>
    - Run `yarn add/npm install`:</br>
      - Run yarn add/npm install:
      - mapbox-gl v2.6.1
      - react-map-gl v5.0.0
      - axios v0.21.1
      - http-proxy-middleware v1.0.5
      - jquery v3.6.0
      - react v17.0.2
      - react-dom v17.0.1
      - react-router-dom v5.3.0
      - react-scripts: 4.0.3 
      - rsuite v5.4.3
      - semantic-ui-css v2.4.1
      - semantic-ui-react v2.0.4
      - suite v0.2.0
3. Run `yarn/npm serve` to start the server ~ `npx nodemon index.js`
4. The server will be running on localhost port: 4000</br>
`http://localhost:4000/`  

### Useful commands
- `yarn/npm dev` to run server in development mode ~ `npx nodemon`
- `yarn/npm seed` to seed the database ~ `node db/seeds.js`
- `yarn/npm start` to run frontend server on localhost port:3000; open index.html ~ `node index.js`
- `yarn/np build` to build client directory for the deployment ~ `cd client && yarn && yarn build`

## Wins and challenges

### Wins
- Building a fully responsive application with a complex user interface.
- Navbars that change their dimensions and appearance for different React routes.
- Making the date range picker work as a main data filter.
- Enabling usage of a variety of filters at the same time.
- Managing all the CRUD routes with custom middleware and consuming its own API.

### Challenges
- Achieve desired and consistent look of the application using CSS library; I think it was not a good idea to use CSS library for the web page where almost all elements are customised.  
- Creating a data request object with nested objects; transferring data from form input fields.
- Restricting input formatting to allow the consistency of newly posted/updated documents in the database.

## Key learning
- Use local storage to preserve variable values.
- Learning how to use React states to switch visibility of the components and manipulate DOM with JavaScript.
- Learning how to consume and modify React components to achieve desired look and functionality.
- Getting familiar with libraries and their components implementation based on docs.
- Facilitating data clipping depending on variety of filters, saving search information in URL string.
- Understanding how to establish connection and consume public API to display map components and handle image uploads.

## Future upgrades
- Developing add comments feature for experiences.
- Adding edit profile interface.
- Adding a community page to allow users browse between their profiles.
- The app could manage booking systems and user verification.
- Preserve the username of the logged in user in local storage, so that it does not disappear on page reload.

## Copyright and licensing
This project was built for educational purposes only.
