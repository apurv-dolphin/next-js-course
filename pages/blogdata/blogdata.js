import React from "react";

export default function Blogdata() {
  const data = [
    {
      id: "3",
      title: "How to learn Bootstrap",
      shortdiscription : "Bootstrap is a free front-end framework, with the purpose to make web development faster and easier.",
      content:
        "Advantages of Bootstrap: Easy to use: Anybody with just basic knowledge of HTML and CSS can start using Bootstrap. Responsive features: Bootstrap responsive CSS adjusts to phones, tablets, and desktops. Mobile-first approach: In Bootstrap 3, mobile-first styles are part of the core framework.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTe3lb-pn-PcZWjx6KYJRTIANPcnHxqX5oCNw&usqp=CAU",
      vedio: "https://www.youtube.com/embed/vpAJ0s5S2t0",
      slug: "how-to-learn-bootstrap",
    },
    {
      id: "10",
      title: "How to learn React ContextAPI",
      shortdiscription : "Context is a built-in API introduced in ​​React 16.3. It makes it possible to pass data from parent to children nested deep down the component tree directly, instead of passing it down through a chain of props.",
      content:
        "The React Context API is a component structure, which allows us to share data across all levels of the application. The main aim of Context API is to solve the problem of prop drilling (also called Threading). The Context API in React are given below.React.createContext.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIr32FsiC6e4ppGck329l3mySks1W1b9kxAA&usqp=CAU",
      vedio: "https://www.youtube.com/embed/5I_2cgglGms",
      slug: "how-to-learn-react-contextapi",
    },
    {
      id: "2",
      title: "How to learn CSS",
      shortdiscription : "CSS, is a simply designed language intended to simplify the process of making web pages presentable. CSS allows you to apply styles to web pages",
      content:
        "CSS (Cascading Style Sheets) allows you to create great-looking web pages, but how does it work under the hood? This article explains what CSS is with a simple syntax example and also covers some key terms about the language.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaYxk6nnEGhtR44xkAyFzgD4JVrVarB6bVpw&usqp=CAU",
      vedio: "https://www.youtube.com/embed/Edsxf_NBFrw",
      slug: "how-to-learn-css",
    },
    {
      id: "1",
      title: "How to learn HTML",
      shortdiscription : "HTML is the universal markup language for the Web. HTML lets you format text, add graphics, create links, input forms, frames and tables, etc., and save it all in a text file that any browser can read and display.",
      content:
        "HTML is a markup language that defines the structure of your content HTML consists of a series of elements, which you use to enclose, or wrap, different parts of the content to make it appear a certain way, or act a certain way. The enclosing tags can make a word or image hyperlink to somewhere else, can italicize words, can make the font bigger or smaller.",
      author: "Apurv Khalas",
      image : "https://e7.pngegg.com/pngimages/63/313/png-clipart-html-computer-icons-world-wide-web-text-logo-thumbnail.png",
      vedio : "https://www.youtube.com/embed/BsDoLVMnmZs",
      slug: "how-to-learn-html",
    },
    {
      id: "4",
      title: "How to learn JavaScript",
      shortdiscription : "JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions, and is best known as the scripting language for Web pages, but it's used in many non-browser environments as well",
      content:
        "JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinuZWTq1SZbWj4SIgX5UFFw90_JfiTcIAKw&usqp=CAU",
      vedio: "https://www.youtube.com/embed/hKB-YGF14SY",
      slug: "how-to-learn-javascript",
    },
    {
      id: "7",
      title: "How to learn React class component",
      shortdiscription : "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function.",
      content:
        "Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML via a render() function. Components come in two types, Class components and Function components, in this chapter you will learn about Class components.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC9KIsXPlp2szq4KRJtyg_D8k5jXnVsPZDNA&usqp=CAU",
      vedio: "https://www.youtube.com/embed/GhEofVyPFFI",
      slug: "how-to-learn-react-class-component",
    },
    {
      id: "9",
      title: "How to learn React function component",
      shortdiscription : "Functional components are some of the more common components that will come across while working in React. These are simply JavaScript functions.",
      content:
        "A React functional component is a simple JavaScript function that accepts props and returns a React element. After the introduction of React Hooks, writing functional components has become the ​standard way of writing React components in modern applications.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwUgXi-nlMuV63QVwj3sV4b-S9lBfg4Kbubg&usqp=CAU",
      vedio: "https://www.youtube.com/embed/0pY5CZ-mxf0",
      slug: "how-to-learn-react-function-component",
    },
    {
      id: "5",
      title: "How to learn React Style Structured",
      shortdiscription : "React doesn’t have opinions on how you put files into folders. That said there are a few common approaches popular in the ecosystem you may want to consider.",
      content:
        "As the name says, it contains assets of our project. It consists of images and styling files. Here we can store our global styles. We are centralizing the project so we can store the page-based or component-based styles over here. But we can even keep style according to the pages folder or component folder also.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgJUPuNEF9LLr56aZcITw9r5VFB8OxJio-vw&usqp=CAU",
      vedio: "https://www.youtube.com/embed/-9ZPBAcjmh4",
      slug: "how-to-learn-react-style-structured",
    },
    {
      id: "6",
      title: "How to learn React lifecycle",
      shortdiscription : "The three phases are: Mounting, Updating, and Unmounting.",
      content:
        "Each component in React has a lifecycle which you can monitor and manipulate during its three main phases. The three phases are: Mounting, Updating, and Unmounting.",
      author: "Apurv Khalas",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3lHSQ2b1ky_saZdVrqfqvNAfsuOZErW6rvA&usqp=CAU",
      vedio: "https://www.youtube.com/embed/abjeWy4sZiU",
      slug: "how-to-learn-react-lifecycle",
    },
    {
      id: "8",
      title: "How to learn React Hooks",
      shortdiscription : "Hooks are functions that let you “hook into” React state and lifecycle features from function components. Hooks don't work inside classes ",
      content:
        "React Hooks are simple JavaScript functions that we can use to isolate the reusable part from a functional component. Hooks can be stateful and can manage side-effects. React provides a bunch of standard in-built hooks: useState : To manage states. Returns a stateful value and an updater function to update i.",
      author: "Apurv Khalas",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5Pn44TKtWNejYpeRxJ5biDk8NdujBFnLxA&usqp=CAU",
      vedio: "https://www.youtube.com/embed/pe5ulXojRO8",
      slug: "how-to-learn-react-hooks",
    },
    {
      id: "11",
      title: "How to learn Redux",
      shortdiscription : "Redux is an open-source JavaScript library for managing and centralizing application state. It is most commonly used with libraries such as React or Angular for building user interfaces. Similar to Facebook's Flux architecture.",
      content:
        "React Redux is the official React binding for Redux. It allows React components to read data from a Redux Store, and dispatch Actions to the Store to update data. Redux helps apps to scale by providing a sensible way to manage state through a unidirectional data flow model. React Redux is conceptually simple. It subscribes to the Redux store, checks to see if the data which your component wants have changed, and re-renders your component.",
      author: "Apurv Khalas",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKComQByaI7wNndvzkYFlHc8hZMLTwnbli-Q&usqp=CAU",
      vedio: "https://www.youtube.com/embed/DBIsm8qxAUI",
      slug: "how-to-learn-redux",
    }
  ];
  return data;
}
