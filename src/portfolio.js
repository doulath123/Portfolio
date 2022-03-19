//I Would Highly Recommend You To Customize The Theme According To Your Taste.
export const globalStyles = {
  "--grad": "linear-gradient(315deg,#48a9fe 0%,#00cdac)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #48a9fe 0%, #734ae8 74%)", // Use gradients only
  // "--grad": "linear-gradient(315deg, #06bcfb 0%, #4884ee 74%)",
  "--txtcolor": "#272341",
  "--p_color": "#00cdac",
  "--s_color": "#fff",
};

// Navigation Bar Name
export const navbar_name = "Doulath";

// Main Page
export const main = {
  name: "NAYAB SYED DOULATH BASHA",
  doamin: "A MERN Stack Web Developer",
  resume:
    "https://drive.google.com/file/d/1AHLDqg4P8ubrLjFpaDa52CvlrRxibpQl/view?usp=sharing",
};

// AboutMe
export const aboutme = {
  imgLink:
    "https://media-exp1.licdn.com/dms/image/C5603AQE44OqIDu6IRg/profile-displayphoto-shrink_400_400/0/1643549146299?e=1652918400&v=beta&t=N5oHS-X98-Gz-umWn7RhmzrN1jrfYtaEu8RFWZe844U",
  p1: "Hey, My name is Nayab Syed Doulath Basha. I have completed my  Graduation  from  Rayalaseema University, Kurnool with 7.4 CGPA.",
  p2: " I'm a passionate coder and an enthusiastic Web Developer capable of applying programming skills to solve complex problems. Seeking a challenging role in the field of software development that will offer an opportunity for further development of my abilities, skills and knowledge in an organization.",
  p3: "Apart from coding I also like playing Chess, Cricket and listning music.",
};

// Skills
export const whatido = {
  title: "Full Stack Development",

  details: [
    "Building responsive website using HTML,CSS,JS,React",
    // "Creating backend application in Node, ExpressJS",
    "Building Simple RESTful CRUD APIs",
    "Knowledge of MongoDB Database",
    "Knowledge of various UI libraries",
  ],
  logos: [
    {
      name: "HTML5",
      iconifyClassName: "vscode-icons:file-type-html", // PS : Use iconify class name
      id: "1",
    },
    {
      name: "CSS",
      iconifyClassName: "vscode-icons:file-type-css",
      id: "2",
    },
    {
      name: "JavaScript",
      iconifyClassName: "logos:javascript",
      id: "3",
    },
    {
      name: "ReactJS",
      iconifyClassName: "vscode-icons:file-type-reactjs",
      id: "4",
    },
    {
      name: "Redux",
      iconifyClassName: "logos:redux",
      id: "5",
    },
    {
      name: "NodeJS",
      iconifyClassName: "logos:nodejs",
      id: "6",
    },
    {
      name: "ExpressJS",
      iconifyClassName: "logos:express",
      id: "7",
    },
    {
      name: "MongoDB",
      iconifyClassName: "logos:mongodb",
      id: "8",
    },
    {
      name: "Postman",
      iconifyClassName: "logos:postman-icon",
      id: "9",
    },
    {
      name: "npm",
      iconifyClassName: "logos:npm-icon",
      id: "10",
    },
    {
      name: "GIT",
      iconifyClassName: "logos:git",
      id: "11",
    },
    // {
    //   name: "Tailwind",
    //   iconifyClassName: "logos:tailwindcss-icon",
    //   id: "12",
    // },
    // {
    //   name: "Material-UI",
    //   iconifyClassName: "logos:material-ui",
    //   id: "13",
    // },
    // {
    //   name: "Ant Design",
    //   iconifyClassName: "logos:ant-design",
    //   id: "14",
    // },
    {
      name: "Netlify",
      iconifyClassName: "vscode-icons:file-type-netlify",
      id: "15",
    },
    {
      name: "Vercel",
      iconifyClassName: "logos:vercel-icon",
      id: "16",
    },
  ],
};

// Project Details
export const details = [
//   {
//     id: 1,
//     title: "Frontend Masters Clone",
//     desc: `Frontend Masters is an E-learning platform where users can advance their skills with in-depth, modern front-end engineering courses.`,
//     feature: `Sign-in/Sign-up,
// Explore top courses and teachers,
// Dynamic progress monitor page,
// Subscription page.`,
//     tech: `Tech Stack: EJS | CSS | JavaScript | nodeJS | express | MongoDB`,
//     img: "https://github.com/Shivam2101s/images/blob/main/frontend.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Frontend_Masters",
//     link: "https://frontend-masters.herokuapp.com/"
//   },
//   {
//     id: 2,
//     title: "MyFitnessPal Clone",
//     desc: `MyFitnessPal is a smartphone app and website that tracks users diet and exercise. Here users can explore various food items and their respective nutrition contents , exercise, and various fitness tracking apps.`,
//     feature: `Sign-in/Sign-up,
// search bar for food items to see their nutrition contents, explore various fitness tracking apps,
// Subscription page.`,
//     tech: `Tech Stack: React | CSS | JavaScript | nodeJS | express | MongoDB`,
//     img: "https://i.ibb.co/c1THySK/hero-image.jpg",
//     link: "https://github.com/AbhijitAher/MyFitnessPal_U5",
//     github: "https://github.com/AbhijitAher/MyFitnessPal_U5",
//   },
  
//   {
//     id: 3,
//     title: "Reliance Retail Clone",
//     desc: `Reliance Retail is an informative website where users can get information about various brands of Reliance Industries.`,
//     feature: `Features:
// Sign-in/Sign-up, User Authentication,
// Integreted Hamleys shopping page,
// Sorting, filtering and debouncing based search bar,
// Carousel and slideshows,
// Add to cart & Check out.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript `,
//     img: "https://github.com/Shivam2101s/images/blob/main/reliance(1)%20-%20Copy.jpg?raw=true",
//     github: "https://github.com/Shivam2101s/Reliance-retails",
//     link: "https://relianceretailclone.netlify.app/",
//   },
  {
    id: 4,
    title: "Nordstorm Clone",
    desc: `A leading fashion retailer offering clothing, shoes, and
    accessories for men, women and kids.`,
    feature: `Sign-in/Sign-up User Authentication, Welcome page,  Carousel and slideshows,
    Add to cart & Check out.`,
    tech: `Tech Stack: HTML | CSS | JavaScript.`,
    img: "https://raw.githubusercontent.com/vibrantachintya/nordstrom/main/images/nordstrom_screenshot_2.png",
    github: "https://github.com/vibrantachintya/nordstrom",
    link:"https://vibrantachintya.github.io/nordstrom/"
  },
  {
    id: 5,
    title: "DMART READY Clone",
    desc: `A web application to buy Grocery & Household essentials at best prices every day.`,
    feature: `Produdct display page, Sign-in/Sign-up, User Authentication,
     Integreted Hamleys shopping page,
     debouncing based search bar,
     Carousel and slideshows,
     Add to cart & Check out.`,
    tech: `Tech Stack: HTML | CSS | JavaScript .`,
    img: "https://miro.medium.com/max/1400/1*iG--sQ0q-8DKsx2Wgjjnfw.png",
    link: "https://dmart-ready.netlify.app/index.html",
    github: "https://github.com/prathamsm7/D-Mart",
  },
//   {
//     id: 6,
//     title: "My Recipe App",
//     desc: `It's a food recipe app, users can search recipes of various dishes and also see the latest recipes as well as the recipe of the day.`,
//     feature: `Search recipe,
// Recipe of the day.`,
//     tech: `Tech Stack: HTML | CSS | JavaScript`,
//     img: "https://github.com/Shivam2101s/images/blob/main/food%20app.jpg?raw=true",
//     link: "https://condescending-pare-f88022.netlify.app/",
//     github: "https://github.com/avinashkumarkml/Food-app-main",
//   },
];

// Social Media Links
export const links = [
  "https://www.linkedin.com/in/nayab-syed-doulath-basha-384166229/",
  "https://api.whatsapp.com/send/?phone=919154598528&text&app_absent=0",
  "mailto:nayabsyeddoulathbasha@gmail.com",
  "https://github.com/doulath123",
];
