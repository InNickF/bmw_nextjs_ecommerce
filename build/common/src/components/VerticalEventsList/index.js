import React from 'react'
import PropTypes from 'prop-types'
import {
  Link
} from '../../routes/bmw'

import { dateHelpers } from '../../helpers'

function VerticalEventsList(props) {
  const {
    getDayOfWeek,
    getAMPMHour,
    getDayOfMonth
  } = dateHelpers

  return (
    <div>
      {
        props.events.map(item => (
          <Link route="event-detail" params={{ slug: item.slug }} key={item.id}>
            <a>
              <div>{getDayOfMonth(item.startAt)}</div>
              <div>{item.title}</div>
              <div>{item.intro}</div>
              <div>
                {getDayOfWeek(item.startAt)} - {getAMPMHour(item.startAt)}
              </div>
            </a>
          </Link>
        )
        )
      }
    </div>
  )
}

VerticalEventsList.propTypes = {
  events: PropTypes.array.isRequired
}

export default VerticalEventsList
