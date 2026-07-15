import ProjectCard from "./ProjectCard.jsx";

import moviesImg from "../assets/movies.png";
import layoutImg from "../assets/layout.png";
import storeImg from "../assets/store.png";

function Projects() {
  const projects = [
    { title: "Favourite Movies", description: "Page where you can see my favourite movies", image: moviesImg },
    { title: "Layout Website", description: "Simple website layour created with React", image: layoutImg },
    { title: "Store", description: "Simple e-commerce page created with React", image: storeImg }
  ];
  return (
    <section id="projects">
      <ProjectCard projects={projects}/>
    </section>
  )
}

export default Projects