import React from 'react'
import './Project.css'
const Project = ({project}) => {
    return<a className = 'post' href = {project.url}>
        <img src = {project.img} className = 'thumbnail' alt = {project.name} />
        <div className = 'post-preview'>
            <h6 className = 'post-title'>{project.name}</h6>
            <p className = 'post-intro'>{project.description}</p>
            <a href = {project.url}>Check it out</a>
        </div>
    </a>
}
export default Project;