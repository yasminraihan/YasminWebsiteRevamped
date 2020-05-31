import React from 'react'

import projectItemStyles from './projectItem.module.scss'

const ProjectItem = (props) => {
    return (
        <div className={projectItemStyles.projectContainer}>
            <div className={projectItemStyles.logoContainer}>
                <div className={projectItemStyles.projectLogo}
                    style={{ 'backgroundImage': `url(${props.image})` }} >
                </div>
            </div>
            <div className={projectItemStyles.projectText}>
                <p className={projectItemStyles.projectTitle}>{props.title}</p>
                <p className={projectItemStyles.projectDesc}>
                    {props.description}
                </p>
            </div>
        </div >
    )
}

export default ProjectItem

// { 'backgroundImage': url(`${Background}`) }