import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, duration, description, tagsList} = courseDetails

  return (
    <div className="card-con">
      <div className="title-con">
        <h1 className="card-title">{courseTitle}</h1>
        <p className="duration-text">
          <AiFillClockCircle className="clock-icon" />
          {duration}
        </p>
      </div>
      <p>{description}</p>
      <ul className="tags-list-con">
        {tagsList.map(each => (
          <li key={each.id}>
            <p className="tags">{each.name}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
