import React from 'react'
import PropTypes from 'prop-types'
import Calendar from 'react-calendar/dist/entry.nostyle'
import { withTheme } from 'styled-components'

import { Container } from './styles'

function tileClassName (dates = [], isSameDate) {
  return ({ date, view }) => {
    const currentDate = `${date.getDate()}-${(date.getMonth() + 1)}-${date.getFullYear()}`
    return view === 'month' && dates.includes(currentDate) ? 'highlighted' : null
  }
}

function DisplayCalendar ({
  highlightedDates,
  ...extraProps
}) {
  const today = new Date()
  return (
    <Container>
      <Calendar
        locale='es-Latn'
        value={today}
        tileClassName={tileClassName(highlightedDates)}
        {...extraProps}
      />
    </Container>
  )
}

DisplayCalendar.defaultProps = {
  highlightedDates: []
}

DisplayCalendar.propTypes = {
  highlightedDates: PropTypes.array
}

export default withTheme(DisplayCalendar)
