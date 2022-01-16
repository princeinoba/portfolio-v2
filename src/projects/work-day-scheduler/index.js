import React from "react";
import displayImg from "./work_display.png";
import iconImg from "./work_icon.png";

export const goodGames = {
  title: "Work Day Scheduler",
  infoPage: "/good-games",
  url: "https://princeinoba.github.io/bootcamp-homework5/",
  repo: "https://github.com/princeinoba/bootcamp-homework5",
  tagline: " Simple work-day-scheduler calendar that allows for user to enter tasks/events",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        Purpose of this project is to create a simple work-day-scheduler calendar 
        application that allows for user to enter tasks/events for that hour in 
        the text area and save events for each hour of the day. Add important 
        events to a daily planner to manage time effectively. This app runs in the 
        browser and feature dynamically updated HTML and CSS powered by jQuery.
      </p>
      <p>
        Description:
        Using a daily planner to create a schedule. The current day is displayed 
        at the top of the calendar. Timeblocks for standard business hours. Each 
        timeblock is color coded to indicate whether it is in the past, present, 
        or future. Click into a timeblock, enter and save an event. They may save 
        their entries to local storage using the corresponding save button.
      </p>
      <p>
        The following demonstrates the application functionality: Main JavaScript 
        Concepts Used, For loops Functions and callback functions, Using Local 
        Storage accessClasses. Additional resources includes, Font Awesome 5, 
        Bootstrap 4, Moment.js
      </p>
    </>
  ),
  lists: [
    {
      icon: "fas fa-users",
      title: "Team Members",
      items: [
        {
          name: "Prince Inoba",
          link: "https://princeinoba.github.io/bootcamp-homework5/",
        },
        {
          name: "Prince Inoba",
          link: "https://princeinoba.github.io/bootcamp-homework5/",
        },
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "calender API",
          link: "https://www.gamespot.com/api/",
        },
      ],
    },
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [
        {
          name: "Express-Handlebars",
          link: "https://www.npmjs.com/package/express-handlebars",
        },
        {
          name: "Bootstrap 4",
          link:
            "https://getbootstrap.com/docs/4.5/getting-started/introduction/",
        },
        {
          name: "Intro.js",
          link: "https://introjs.com/",
        },
      ],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      items: [
        {
          name: "Axios",
          link: "https://www.npmjs.com/package/axios",
        },
        {
          name: "Bcrypt",
          link: "https://www.npmjs.com/package/bcrypt",
        },
        {
          name: "Express-session",
          link: "https://www.npmjs.com/package/express-session",
        },
        {
          name: "Sequelize",
          link: "https://sequelize.org/master/",
        },
        {
          name: "Passport",
          link: "http://www.passportjs.org/",
        },
        {
          name: "Passport-local",
          link: "http://www.passportjs.org/packages/passport-local/",
        },
        {
          name: "Moment.js",
          link: "https://momentjs.com/",
        },
      ],
    },
  ],
};
