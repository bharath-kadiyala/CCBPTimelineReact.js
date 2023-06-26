import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    projectTitle,
    duration,
    description,
    imageUrl,
    projectUrl,
  } = projectDetails

  return (
    <div className="course-card-container">
      <img src={imageUrl} alt="project" className="project-img" />
      <div className="text-container">
        <h1 className="project-title">{projectTitle}</h1>
        <p className="project-duration">
          <AiFillCalendar className="calender-sty" />
          {duration}
        </p>
      </div>
      <p className="project-desc">{description}</p>
      <a
        className="project-link"
        href={projectUrl}
        target="_blank"
        rel="noreferrer"
      >
        Visit
      </a>
    </div>
  )
}

export default ProjectTimelineCard
