import React from 'react'
const Project = ({project}) => {
    return<article className = 'post'>
        <img src = {project.img} className = 'thumbnail' alt = {project.name} />
        <div className = 'post-preview'>
            <h6 className = 'post-title'>{project.name}</h6>
            <p className = 'post-intro'>{project.description}</p>
            <a href = {project.url}>Check it out</a>
        </div>
    </article>
}
export default Project;