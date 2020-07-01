import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import {
  AlignWrapper,
  Button,
  CardWithSideNumber,
  CardWithSideImage,
  DisplayCalendar,
  GenerateTags,
  PageTitle,
  Wrapper
} from '../../common/components'

import { Link } from "../../common/src/routes/bmw"

import { events as coreEvents } from '../../common/redux'

import { dateHelpers, getOriginalUrl } from '../../common/helpers'


import withStore from './store'

import { EventsContainer } from '../../styles/events'

const { getLatestEvents } = coreEvents.actions
const { getDayOfMonth, getFormatedDate } = dateHelpers

class Events extends Component {
  static async getInitialProps({ store, req }) {
    store.dispatch(getLatestEvents())
    return { originalUrl: getOriginalUrl(req) }
  }
  render() {
    const {
      lastEvents,
      nextEvents,
      eventsDates,
      originalUrl,
      showFeedback
    } = this.props
    return (
      <>
        <GenerateTags title='Eventos' url={originalUrl} />
        <Wrapper>
          <PageTitle text='Eventos' />
          {lastEvents.length > 0 ? (
            lastEvents.map(item => (
              <CardWithSideImage
                key={item.id}
                title={item.name}
                image={item.image}
                summary={item.intro}
                dateText={getFormatedDate(item.startAt)}
                buttonContent={
                  <Link href={`/evento/${item.slug}`}>
                    <a>VER MÁS</a>
                  </Link>
                }
              />
            ))
          ) : (
              <div>No hay eventos registrados</div>
            )}
          <PageTitle text='Próximos eventos' />
          <EventsContainer>
            <div>
              <DisplayCalendar
                highlightedDates={eventsDates}
                onChange={date => {
                  const currentDate = `${date.getDate()}-${date.getMonth() +
                    1}-${date.getFullYear()}`
                  if (!eventsDates.includes(currentDate)) {
                    showFeedback('No hay eventos para este día')
                  } else {
                    document.body.scrollTop = 0
                    document.documentElement.scrollTop = 0
                  }
                }}
              />
            </div>
            <div>
              {nextEvents.length > 0 ? (
                nextEvents.map(event => (
                  <CardWithSideNumber
                    key={event.id}
                    number={getDayOfMonth(event.startAt)}
                    title={event.name}
                    summary={event.intro}
                    dateText={getFormatedDate(event.startAt)}
                    href={`/evento/${event.slug}`}
                  />
                ))
              ) : (
                  <div>No hay eventos próximos</div>
                )}
            </div>
          </EventsContainer>
          <AlignWrapper margin='1rem'>
            <Button asLink>
              <Link href='/eventos/todos'>
                <a>VER TODOS LOS EVENTOS</a>
              </Link>
            </Button>
          </AlignWrapper>
        </Wrapper>
      </>
    )
  }
}

Events.propTypes = {
  lastEvents: PropTypes.array.isRequired,
  nextEvents: PropTypes.array.isRequired,
  eventsDates: PropTypes.array.isRequired
}

export default withStore(Events)
