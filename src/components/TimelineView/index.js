import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  const items = timelineItemsList.map(each => ({
    title: each.title,
  }))
  return (
    <div>
      <h1 className="main-head">
        MY JOURNEY OF CCBP 4.0
        <span className="pera-head">CCBP 4.O</span>
      </h1>
      <Chrono
        items={items}
        slideShow
        allowDynamicUpdate
        scrollable={{scrollbar: true}}
        theme={{
          secondary: 'WHITE',
        }}
        classNames={{
          title: 'my-title',
        }}
        slideItemDuration={5000}
        mode="VERTICAL_ALTERNATING"
      >
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimelineCard courseDetails={each} key={each.id} />
          }
          return <ProjectTimelineCard projectDetails={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}

export default TimelineView
