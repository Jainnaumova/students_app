# Dashboard for Identification chronically absent students
## Technologies used
* React
* HTML5
* CSS3
* Flexbox
* Javascript
* React-modal library
* Enzyme

## App’s architecture
* Sidebar includes dashboard navigation: home, students, teachers.
* Home page displays buttons linked to students and teachers pages.
* Students page displays a whole list of students sorted in descending order by the “attendancePercentage” field.
* Application provides detailed relevant data for each student by clicking button “Details...”
* Application allows to modify list of students by adjusting threshold of chronically absent students by applying any attendance percent in input field from 0 to 100.
* Application uses snapshot testing.

## Setup
To use this site locally, you’ll need to take the following steps:

* Clone the repo

    ```git clone https://github.com/Jainnaumova/students_app.git```

* Install all the dependencies and start a server

    ```yarn```

    ```yarn start```

* Go to `localhost:3000` in the browser.

* Use `yarn test` to run tests.
