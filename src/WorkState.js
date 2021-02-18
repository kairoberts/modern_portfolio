// Main images for website
// import comingSoon from "./images/comingsoon.jpg";
// import gymstagram from "./images/gymstagram.jpg";
// import musicplayer from "./images/musicplayer.jpg";
import gaming from "./images/gaming.jpg";
import githubfinder from "./images/githubfinder.jpg";
import portfolio from "./images/portfolio.jpg";
import gymhub from "./images/gymhub.jpg";
// Carousel images for portfolio
import aboutme from "./images/old-portfolio/aboutme.jpeg";
import clients from "./images/old-portfolio/clients.jpeg";
import krlandingpage from "./images/old-portfolio/krlandingpage.jpeg";
import krportfolio from "./images/old-portfolio/portfolio.jpeg";
import testimonials from "./images/old-portfolio/testimonials.jpeg";
import contactform from "./images/old-portfolio/contactform.jpeg";
// Carousel Images for GitHub Finder
import searching from "./images/github-finder/searching.jpeg";
import validation from "./images/github-finder/validation.jpeg";
import searchName from "./images/github-finder/searchingname.jpeg";
import searchedAccount from "./images/github-finder/searchedaccount.jpeg";
import profile from "./images/github-finder/profile.jpeg";
import about from "./images/github-finder/about.jpeg";
// Carousel Images for Gaming App
import homepage from "./images/gaming-app/homepage.png";
import expanded from "./images/gaming-app/expanded.png";
import gallery from "./images/gaming-app/gallery.png";
import searchingGames from "./images/gaming-app/searching.png";
import searched from "./images/gaming-app/searched.png";
import clearSearch from "./images/gaming-app/clearsearch.png";
// Carousel Images for GymHub
import gymhubhome from "./images/gymhub/homepage.png";
import register from "./images/gymhub/register.png";
import loggingin from "./images/gymhub/loggingin.png";
import loggedin from "./images/gymhub/loggedin.png";
import workouts from "./images/gymhub/myworkouts.png";
import searchworkouts from "./images/gymhub/searchworkout.png";

export const WorkState = () => {
  return [
    {
      title: "Original Portfolio",
      name: "KR Portfolio",
      description:
        "When I first started learning React, I naively decided to create a portfolio for employers to view straight away. The main problem with that was I didn't understand how to use React effectively so didn't implement any of the main features it offers, such as useState or useEffect, and used purely JSX to render out HTML webpages only. I used external libraries I found online to create any of the featured components on the website, meaning I couldn't actually create any myself, I only knew the basics. The reason for keeping my original portfolio online for people to see, is to show how much I have improved since first creating it, as I have spent some time improving on React since.",
      mainImg: portfolio,
      id: "1",
      url: "/projects/first-portfolio",
      buttonUrl: "https://kr-old-portfolio.netlify.app",
      githubUrl: "https://github.com/kairoberts/react_portfolio",
      learnt: [
        {
          id: "1",
          title: "React",
          description:
            "This was the initial project I created in order to learn React.",
        },
        {
          id: "2",
          title: "JSX",
          description:
            "Since this was my first project this language was new to me.",
        },
        {
          id: "3",
          title: "Components",
          description: "I had never created components based websites before.",
        },
      ],
      pictures: [
        {
          id: "1",
          alt: "First Portfolio Images",
          image: krlandingpage,
          image1: clients,
          image2: aboutme,
          image3: krportfolio,
          image4: testimonials,
          image5: contactform,
        },
      ],
    },
    {
      title: "GitHub Finder",
      name: "GitHub Finder",
      description:
        "This was the first project I completed working with an API, its use was to pull user account information from GitHub and integrate the data into my app. It's only a small, unstylish project, however uses most of the key features in React, which is why I wanted to do it since I was able to try familarise myself with React's Context API. Although slightly confusing, I am confident I will eventually understand the process of implementing it into projects as well as remembering to use PropTypes to debug my code.",
      mainImg: githubfinder,
      id: "2",
      url: "/projects/github-finder",
      buttonUrl: "https://kr-github-finder.netlify.app",
      githubUrl: "https://github.com/kairoberts/github_finder",
      learnt: [
        {
          id: "1",
          title: "Context API",
          description: "My first attempt at state management",
        },
        {
          id: "2",
          title: "Working With APIs",
          description:
            "This was my first experience of integrating an API using a key",
        },
        {
          id: "3",
          title: "PropTypes",
          description: "Using these to debug my project",
        },
      ],
      pictures: [
        {
          id: "2",
          alt: "Github Finder App Images",
          image: searching,
          image1: validation,
          image2: searchName,
          image3: searchedAccount,
          image4: profile,
          image5: about,
        },
      ],
    },
    {
      title: "Games App",
      name: "KR Games",
      description:
        "This was another project involving working with an API, this time using a keyless API to pull data from rawg.io to display information about all types of games that have been or are due to be released. This was also the first time I properly started using Redux for top level state management, while it was also quite confusing to begin with, it is very similar to the Context API I have also used previously, which I am starting to become more confident with every new project I undertake, so I am confident I will also grasp Redux fully soon enough. Below are some images from the App, showing 'Upcoming Games' and how games are able to be expanded for more information. You can also search for games as well and clear the searched games by clicking onto my logo to reset the page.",
      mainImg: gaming,
      url: "/projects/gaming-app",
      id: "3",
      buttonUrl: "https://kr-games-app.netlify.app",
      githubUrl: "https://github.com/kairoberts/games_app",
      learnt: [
        {
          id: "1",
          title: "Redux",
          description:
            "My first time working with Redux using Actions and Reducers",
        },
        {
          id: "2",
          title: "Styled Components",
          description: "My first time using styled components",
        },
        {
          id: "3",
          title: "Working with API's",
          description:
            "Another project working with API's to try familaries myself",
        },
      ],
      pictures: [
        {
          id: "3",
          alt: "Gaming App Images",
          image: homepage,
          image1: expanded,
          image2: gallery,
          image3: searchingGames,
          image4: searched,
          image5: clearSearch,
        },
      ],
    },
    {
      title: "GymHub - MERN",
      name: "GymHub",
      description:
        "I went for the MERN stack on this project, as I wanted to try improve my back-end knowledge alongside my front-end. The goal of this project is to allow users to keep track of their workouts, as often people forget them. It has a complete login system and all passwords are hashed in the database. Each individual user can create their own workout, eventually creating a full routine, which also gets stored to a seperate cluster in the database. Each workout routine is only accessible to the account that has logged in, as users are granted a token for authentication, allowing each account to create their own unique routines. Each routine can also be updated or deleted as well as being able to search through them. If you do not wish to create an account, feel free to login with 'testaccount@hotmail.co.uk' as the email and 'testing' as the password. When visiting the website please allow a few moments for heroku to awaken the app, as it sends inactive websites to sleep, meaning it takes longer to load.",
      mainImg: gymhub,
      url: "/projects/gymhub",
      id: "4",
      buttonUrl: "http://kr-gymhub.herokuapp.com",
      githubUrl: "",
      learnt: [
        {
          id: "1",
          title: "Redux",
          description: "Further improved my Redux knowledge",
        },
        {
          id: "2",
          title: "Node",
          description: "This was my first time using Node as my back-end",
        },
        {
          id: "3",
          title: "MongoDB",
          description: "My first time using a NoSQL database",
        },
      ],
      pictures: [
        {
          id: "4",
          alt: "GymHub Images",
          image: gymhubhome,
          image1: register,
          image2: loggingin,
          image3: loggedin,
          image4: workouts,
          image5: searchworkouts,
        },
      ],
    },
    // {
    //   title: "Music Player",
    //   name: "KR Music",
    //   description:
    //     "This was my most JavaScript intensive project, I bought an online course in order to help me along with it and it gave me a great understanding into how powerful React really is, coming to learn things like useState, useEffect, useRef, React Hooks and more. This was the project that created the foundation for my React knowledge, as now I use this to help me along in any other projects I undertake since it covered alot of ground. Feel free to take a listen to some of my favourite songs I play whilst working, all legally acquired through free downloads hosted on their official platforms.",
    //   mainImg: musicplayer,
    //   url: "/projects/music-player",
    //   buttonUrl: "",
    //   githubUrl: "https://github.com/kairoberts/music_player",
    //   id: "5",
    //   learnt: [
    //     {
    //       id: "1",
    //       title: "Audio Files",
    //       description:
    //         "Learning JavaScripts build in audio features, to play/pause/skip tracks",
    //     },
    //     {
    //       id: "2",
    //       title: "useRef",
    //       description: "Learning how to select specific HTML tags in React",
    //     },
    //     {
    //       id: "3",
    //       title: "useState",
    //       description:
    //         "Learning how to save files within state to be passed down as props",
    //     },
    //   ],
    //   pictures: [
    //     {
    //       id: "5",
    //       alt: "Music Player Images",
    //       image: comingSoon,
    //       image1: comingSoon,
    //       image2: comingSoon,
    //       image3: comingSoon,
    //       image4: comingSoon,
    //       image5: comingSoon,
    //     },
    //   ],
    // },
    // {
    //   title: "IT Logger - MERN",
    //   name: "IT Logger",
    //   description: "This will be updated upon completion, which will be soon.",
    //   mainImg: comingSoon,
    //   url: "/projects/it-logger",
    //   id: "6",
    //   buttonUrl: "",
    //   githubUrl: "",
    //   learnt: [
    //     {
    //       id: "1",
    //       title: "",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "2",
    //       title: "",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "3",
    //       title: "",
    //       description: "coming soon",
    //     },
    //   ],
    //   pictures: [
    //     {
    //       id: "6",
    //       alt: "IT Logger Images",
    //       image: comingSoon,
    //       image1: comingSoon,
    //       image2: comingSoon,
    //       image3: comingSoon,
    //       image4: comingSoon,
    //       image5: comingSoon,
    //     },
    //   ],
    // },
  ];
};
