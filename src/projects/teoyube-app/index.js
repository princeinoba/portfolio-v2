import React from "react";
import displayImg from "./teoyube_display.png";
import iconImg from "./teoyube_icon.png";

export const bitGora = {
  title: "Teoyube App",
  infoPage: "/bitgora",
  url: "https://teoyube-app.herokuapp.com/",
  repo: "https://github.com/princeinoba/teoyube-app",
  tagline: "The eyes of your understanding being enlightened;",
  img: {
    display: displayImg,
    icon: iconImg,
  },
  description: (
    <>
      <p>
        TEOYUBE APP
        A Research Animation Bible making videos in sequence of slightly 
        vary drawings or models of the scriptures so that it appear to 
        move and demonstrate the meaning of the Promises to its users 
        creating instant Biblical solutions unique to its user problems 
        thereby guiding its users to their God given purpose in Life.
      </p>
      <p>
        Features of Teoyube App:
        1. Like Facebook, it has a login and sign up Account.
        2. It uses the information provided by users to iterate through 
           the Bible to create a page unique to the user and bring daily 
           animated video pop up of the scripture that the user can 
           identify and relate with as it connect with their daily 
           circumstances in Life.
        3. Like Youtube, all promises in the Bible are tabulated and 
           displayed in a video animated format  were user can peruse 
           and watch the demonstration of the scriptures as it relates 
           uniquely to them and their circumstances.
        4. Users can search for solution to their problems in the Bible 
           and get instant animated video with authoritative scripture reference.
        5. User can group promises in the Bible and create their own unique 
           animated videos specific to their circumstances which they can 
           save for their further research purposes.
        6. The App should generate short words from the scriptures/promises 
           which users can pray with as it relates with their circumstances 
           in bringing the solutions referred to them from the Bible to pass 
           in their lives and consequently guiding them to their God given 
           purpose in Life.
      </p>
      <p>        
        I created Teoyube-App because I noticed a gap in not being able to 
        discover your God given purpose in Life even after reading the Bible.
        so I created this app as a more user friendly guide towards discovering 
        ones true self with GOD. Eph.1:18
      </p>
      <p>
        Because of Teoyube's chat functions, Teoyube also builds a community and
        connects with Promises, Coming Soon...
      </p>
    </>
  ),
  lists: [
    {
      icon: "fas fa-users",
      title: "Team Members",
      items: [
        {
          name: "Almighty God",
          link: "https://github.com/princeinoba/teoyube-app",
        },
      ],
    },
    {
      icon: "fas fa-desktop",
      title: "Front-End",
      items: [
        {
          name: "React",
          link: "https://reactjs.org/",
        },
        {
          name: "React-Bootstrap",
          link: "https://react-bootstrap.github.io/",
        },
        {
          name: "Font Awesome",
          link: "https://fontawesome.com/",
        },
        {
          name: "Socket.io (Client)",
          link: "https://socket.io/",
        },
      ],
    },
    {
      icon: "fas fa-server",
      title: "Back-End",
      items: [
        {
          name: "Express",
          link: "https://expressjs.com/",
        },
        {
          name: "Mongoose",
          link: "https://mongoosejs.com/",
        },
        {
          name: "Passport",
          link: "http://www.passportjs.org/",
        },
        {
          name: "Cloudinary",
          link: "https://cloudinary.com/",
        },
        {
          name: "Socket.io (Server)",
          link: "https://socket.io/",
        },
      ],
    },
    {
      icon: "fas fa-paper-plane",
      title: "API",
      items: [
        {
          name: "Teoyube API",
          link: "https://www.coindesk.com/coindesk-api",
        },
      ],
    },
  ],
};
