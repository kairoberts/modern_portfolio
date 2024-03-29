// Main images for website
import comingSoon from "./images/comingsoon.jpg";

//Use this to add more pages onto your website, basically an API which is called to to retrieve data
export const WorkState = () => {
  return [
    {
      title: "Roberts Radio",
      name: "Roberts Radio",
      date: "June 2020",
      description: "Info to be added",
      mainImg: comingSoon,
      id: "1",
      url: "/projects/client",
      buttonUrl: "https://robertsradio.netlify.app",
      learnt: [
        {
          id: "1",
          title: "Description",
          description: "Coming soon",
        },
      ],
      pictures: [
        {
          id: "1",
          alt: "Coming Soon",
          image: comingSoon,
          image1: comingSoon,
          image2: comingSoon,
          image3: comingSoon,
          image4: comingSoon,
          image5: comingSoon,
        },
      ],
    },
  ];
};
