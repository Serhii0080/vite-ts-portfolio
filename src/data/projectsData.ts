import card from "../assets/card.png"
import Project1 from "../assets/Project1.jpg"
import { v4 as uuidv4 } from "uuid";

export const projectsData = [
    {
        id: uuidv4(),
        imageSrc: Project1,
        alt: "notes", 
        title: 'NOTES', 
        description: "Notes App — JS notes application (pragmatic MVC architecture) with separation into Model, View and Controller and a closed interaction loop.",
        link: "https://serhii0080.github.io/project/index.html"
    },
    {
        id: uuidv4(),
        imageSrc: card,
        alt: "Project2", 
        title: 'PROJECT 2', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: uuidv4(),
        imageSrc: card,
        alt: "Project3", 
        title: 'PROJECT 3', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: uuidv4(),
        imageSrc: card,
        alt: "Project4", 
        title: 'PROJECT 4', 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
]