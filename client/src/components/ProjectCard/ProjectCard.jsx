import { Link } from "react-router-dom"
import "./ProjectCard.scss"

export function ProjectCard({ project }) {
  return (
    <Link to="">
      <div className="projectCard">
        <img className="projectImg" src={project.img} />
        <div className="container">
          <img className="userImg" src={project.pp} />
          <div className="info">
            <span className="username">{project.username}</span>
            <span className="cat">{project.cat}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}
