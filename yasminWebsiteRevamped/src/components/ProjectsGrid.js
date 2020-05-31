import React from 'react'

// import componenets
import ProjectItem from './ProjectItem'

// import data
import projectGridData from '../../public/static/data/projectGridItems.json'

// import
import projectGridStyles from './ProjectsGrid.module.scss'

const ProjectsGrid = () => {
    // console.log('Data:', projectGridData.projects);
    return (
        <div className={projectGridStyles.projectsGrid}>
            {
                projectGridData.projects.map((project, idx) => {
                    return (
                        <ProjectItem
                            key={idx}
                            image={project.imageURL}
                            title={project.title}
                            description={project.description}
                        />
                    )
                })
            }
        </div>
    )
}

export default ProjectsGrid