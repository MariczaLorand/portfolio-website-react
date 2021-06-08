// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import linkedInIcon from "./images/linkedin.svg"
import nodeJSIcon from "./images/nodejs.svg"
import cSharpIcon from "./images/csharp.svg"
import sqlIcon from "./images/sql.svg"
import mePhoto from "./images/me-photo.jpg"
//import designIcon from "./images/design.svg"
//import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
//import codepenIcon from "./images/codepen.svg"
//import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import { node } from "prop-types"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Lorand",
  headerTagline: [
    //Line 1 For Header
    "Looking for",
    //Line 2 For Header
    "an opportunity to start",
    //Line 3 For Header
    "my web developer journey.",
  ],
  //   Header Paragraph
  headerParagraph:
    "Motivated Economic Informatics student who freezed university studies to land in the web developer world and find a job to gain 'real life' experiences.",

  //Contact Email
  contactEmail: "maricza.lorand@gmail.com",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      title: "Face Recognition Website", //Project Title - Add Your Project Title Here
      para:
        "React application that has a front-end (-Create React App-), uses AI face-recognition API (clarifai), has registration feature, has it's own server (using Node.js and Express) and database (PostgreSQL deployed on Heroku, connected with Knex.js). Deployed on: Heroku.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://media.wired.co.uk/photos/606d9ee9687a704c2c36171c/master/w_1600%2Cc_limit/6-facial-recognition-hero.jpg",
      //Project URL - Add Your Project Url Here
      url: "https://smart-brainnnnn.herokuapp.com/",
    },
    {
      title: "Robofriends React App", //Project Title - Add Your Project Title Here
      para:
        "Little single-page React applications built with -Create React App- tool to learn React fundamentals and API calls. Deployed on: GitHub Pages.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1535378917042-10a22c95931a?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1031&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://mariczalorand.github.io/robofriends-app/",
    },
    {
      title: "Hotel Website", //Project Title - Add Your Project Title Here
      para:
        "Project to learn the basics of HTML and CSS. Deployed on: GitHub Pages.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1517840901100-8179e982acb7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://mariczalorand.github.io/hotel-website/index.html",
    },
    {
      title: "Gallery Website", //Project Title - Add Your Project Title Here
      para:
        "Project to create responsive website using CSS flexbox. Deployed on: GitHub Pages.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1518998053901-5348d3961a04?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1934&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://mariczalorand.github.io/gallery-website/",
    },
    {
      title: "News Website", //Project Title - Add Your Project Title Here
      para:
        "Project to learn CSS Grid. Deployed on: GitHub Pages.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1498644035638-2c3357894b10?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://mariczalorand.github.io/news-website/",
    },
    {
      title: "Startup Website", //Project Title - Add Your Project Title Here
      para:
        "Project to learn how to implement third-party services like the popular mailing service called Mailchimp.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1567794636765-5e4869f627e1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://mariczalorand.github.io/startup-website/",
    },
    // {
    //   title: "Project Four", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1492171983775-a51717616c0d?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NjB8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Five", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1534239143101-1b1c627395c5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8NzZ8fHBhc3RlbHxlbnwwfHwwfA%3D%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },
    // {
    //   title: "Project Six", //Project Title - Add Your Project Title Here
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.", // Add Your Service Type Here
    //   //Project Image - Add Your Project Image Here
    //   imageSrc:
    //     "https://images.unsplash.com/photo-1517479149777-5f3b1511d5ad?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTAyfHxwYXN0ZWx8ZW58MHx8MHw%3D&auto=format&fit=crop&w=400&q=60",
    //   //Project URL - Add Your Project Url Here
    //   url: "http://chetanverma.com/",
    // },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "Motivated student who freezed university studies to land in the web developer world and find a job to gain 'real life' experiences. I spent almost one year of my valuable uni years to follow lectures separated from my classmates. I decided to adapt to the situation in a way that I thought and I still think will pay off in the long term. I freezed my studies for a year and started to learn the pillars of web development. Now I feel that I am ready to be part of a team and work on projects. I will work hard to become more and more valuable developer for my future team.",
  aboutParaTwo:
    "I spend most of my time by doing activities that helps me to became more resistant, focused and experienced. Programming is definitely an activity which hepls me to grow and become a better version of myself.",
  // aboutParaThree:
  //   "It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  aboutImage: mePhoto,

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      img: htmlIcon
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: cssIcon
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: jsIcon
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    {
      img: nodeJSIcon
    },
    {
      img: cSharpIcon
    },
    {
      img: sqlIcon
    },
    {
      img: reactIcon 
      // para:
      //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    },
    // {
    //   img: designIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
    // {
    //   img: codeIcon,
    //   para:
    //     "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
    // },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  // promotionHeading: "Heading",
  // promotionPara:
  //   "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  // End Promotion Section -----------------

  //   Contact Section --------------

  //contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/MariczaLorand/" },
    // {
    //   img: codepenIcon,
    //   url: "https://www.codepen.com/",
    // },
    // {
    //   img: dribbbleIcon,
    //   url: "https://dribbble.com/chetanverma",
    // },
    {
      img: linkedInIcon,
      url: "https://www.linkedin.com/in/lorand-maricza-055018210/",
    },
    {
      img: instagramIcon,
      url: "https://www.instagram.com/mariczalorand/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
