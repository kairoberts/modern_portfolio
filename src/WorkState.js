// Main images for website
import comingSoon from "./images/comingsoon.jpg";
// import gymstagram from "./images/gymstagram.jpg";
// import movies from "./images/movies.jpg";
// import todolist from "./images/todolist.jpg";
import musicplayer from "./images/musicplayer.jpg";
import githubfinder from "./images/githubfinder.jpg";
import portfolio from "./images/portfolio.jpg";
// Carousel images for portfolio
import aboutme from "./images/old-portfolio/aboutme.png";
import clients from "./images/old-portfolio/clients.png";
import krlandingpage from "./images/old-portfolio/krlandingpage.png";
import krportfolio from "./images/old-portfolio/portfolio.png";
import testimonials from "./images/old-portfolio/testimonials.png";
import contactform from "./images/old-portfolio/contactform.png";

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
      title: "Music Player",
      name: "KR Music",
      description:
        "This was my first 'big' project in React, I bought an online course in order to help me along with this project. It gave me a great understanding into how powerful React really is, coming to learn things like useState, useEffect, useRef, React Hooks and more. This was the project that set the foundation for my React knowledge as now I use this to help me along in any other projects I undertake since it covered alot of ground. Feel free to take a listen to some of my favourite songs I play whilst working, all legally acquired through free mixtapes hosted on their official mixtape platforms.",
      mainImg: musicplayer,
      url: "/projects/music-player",
      buttonUrl: "",
      id: "2",
      learnt: [
        {
          id: "1",
          title: "Audio Files",
          description:
            "Learning JavaScripts build in audio features, to play/pause/skip tracks",
        },
        {
          id: "2",
          title: "useRef",
          description: "Learning how to select specific HTML tags in React",
        },
        {
          id: "3",
          title: "useState",
          description:
            "Learning how to save files within state to be passed down as props",
        },
      ],
      pictures: [
        {
          id: "2",
          alt: "Music Player Images",
          image: comingSoon,
          image1: comingSoon,
          image2: comingSoon,
          image3: comingSoon,
          image4: comingSoon,
          image5: comingSoon,
        },
      ],
    },
    {
      title: "GitHub Finder",
      name: "GitHub Finder",
      description:
        "This was the first project I completed working with an API, its use was to pull user account information from GitHub and integrate the data into my app. It's only a small, unstylish project, however uses most of the key features in React, which is why I wanted to do it since I was able to try familarise myself with React's Context API. Although slightly confusing, I am confident I will eventually understand the process of implementing it into projects as well as remembering to use PropTypes to debug my code.",
      mainImg: githubfinder,
      id: "3",
      url: "/projects/github-finder",
      buttonUrl: "https://kr-github-finder.netlify.app",
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
          id: "3",
          alt: "Github Finder App Images",
          image: comingSoon,
          image1: comingSoon,
          image2: comingSoon,
          image3: comingSoon,
          image4: comingSoon,
          image5: comingSoon,
        },
      ],
    },
    // {
    //   title: "Movie API",
    //   name: "KR Movies",
    //   description:
    //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autmolestiae qui omnis tenetur, perspiciatis nobis nemo accusamus,eaque delectus nulla, beatae doloribus magnam porro! orem ipsum dolor sit amet consectetur adipisicing elit. Quos minima tempore quas, reprehenderit consequuntur quidem ullam adipisci ex tempora optio hic inventore, nulla iusto itaque porro ab repellat delectus. Ut ipsam ullam assumenda dicta? Odit, repudiandae eum dolore rem laboriosam est laborum maxime, delectus natus alias ullam, facilis culpa nesciunt!",
    //   mainImg: movies,
    //   url: "/projects/movie-api",
    //   id: "4",
    //   learnt: [
    //     {
    //       id: "1",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "2",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "3",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //   ],
    //   pictures: [
    //     {
    //       id: "4",
    //       alt: "Movies Api Images",
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
    //   title: "MERN Project",
    //   name: "Gymstagram",
    //   description:
    //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autmolestiae qui omnis tenetur, perspiciatis nobis nemo accusamus,eaque delectus nulla, beatae doloribus magnam porro! orem ipsum dolor sit amet consectetur adipisicing elit. Quos minima tempore quas, reprehenderit consequuntur quidem ullam adipisci ex tempora optio hic inventore, nulla iusto itaque porro ab repellat delectus. Ut ipsam ullam assumenda dicta? Odit, repudiandae eum dolore rem laboriosam est laborum maxime, delectus natus alias ullam, facilis culpa nesciunt!",
    //   mainImg: gymstagram,
    //   url: "/projects/mern-project",
    //   id: "5",
    //   learnt: [
    //     {
    //       id: "1",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "2",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "3",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //   ],
    //   pictures: [
    //     {
    //       id: "5",
    //       alt: "MERN Images",
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
    //   title: "To-Do List",
    //   name: "KR To-Do",
    //   description:
    //     " Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut autmolestiae qui omnis tenetur, perspiciatis nobis nemo accusamus,eaque delectus nulla, beatae doloribus magnam porro! orem ipsum dolor sit amet consectetur adipisicing elit. Quos minima tempore quas, reprehenderit consequuntur quidem ullam adipisci ex tempora optio hic inventore, nulla iusto itaque porro ab repellat delectus. Ut ipsam ullam assumenda dicta? Odit, repudiandae eum dolore rem laboriosam est laborum maxime, delectus natus alias ullam, facilis culpa nesciunt!",
    //   mainImg: todolist,
    //   url: "/projects/to-do-list",
    //   id: "6",
    //   learnt: [
    //     {
    //       id: "1",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "2",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //     {
    //       id: "3",
    //       title: " ",
    //       description: "coming soon",
    //     },
    //   ],
    //   pictures: [
    //     {
    //       id: "6",
    //       alt: "To-do List Images",
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
