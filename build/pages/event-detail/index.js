import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'

import {
  AlignWrapper,
  Button,
  CardWithSideNumber,
  DisplayCalendar,
  Icon,
  PageTitle,
  GenerateTags,
  Wrapper
} from '../../common/components'

import { Link } from '../../common/src/routes/bmw'

import { Header } from '../../common/containers'

import { events as coreEvents } from '../../common/redux'

import { dateHelpers, getOriginalUrl } from '../../common/helpers'

import Footer from '../../components/Footer'

import { EventsContainer } from '../../styles/all-events'
import { Share, Content, TitleContainer } from '../../styles/event-detail'

import withStore from './store'

const { getDayOfMonth, getFormatedDate } = dateHelpers

function share(url) {
  window
    .open(
      url,
      '_blank',
      'height=450, width=550, top=' +
      (window.innerHeight / 2 - 275) +
      ', left=' +
      (window.innerWidth / 2 - 225) +
      ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0'
    )
    .focus()
}

class EventDetail extends Component {
  static async getInitialProps({ store, req, query }) {
    const { getEventBySlug } = coreEvents.actions
    store.dispatch(getEventBySlug(query.slug))
    return { originalUrl: getOriginalUrl(req) }
  }
  componentDidUpdate(prevProps) {
    if (this.props.isLogged !== prevProps.isLogged && this.props.isLogged) {
      this.props.checkSubscription()
    }
  }
  render() {
    const {
      currentEvent,
      latestEvents,
      toggleSubscription,
      isLogged,
      theme,
      eventsDates,
      isSubscriptionLoading,
      originalUrl
    } = this.props

    return (
      <Fragment>
        <GenerateTags
          title={currentEvent.name}
          description={currentEvent.intro}
          image={currentEvent.image}
          url={originalUrl}
          twitterTitle={currentEvent.name}
          twitterSummary={currentEvent.intro}
          twitterDescription={currentEvent.intro}
          twitterImage={currentEvent.image}
        />
        <Wrapper>
          <TitleContainer>
            <PageTitle
              link='/eventos'
              text='Eventos'
              leftArrow
              arrowColor={theme.colors.textColor}
            />
          </TitleContainer>
          <Content>
            <h1>{currentEvent.name}</h1>
            <img src={currentEvent.image} alt={currentEvent.name} />
            <div dangerouslySetInnerHTML={{ __html: currentEvent.description }} />
          </Content>
          {isLogged && (
            <AlignWrapper margin='2rem'>
              <Button
                action={toggleSubscription}
                isLoading={isSubscriptionLoading}
              >
                {currentEvent.isSubscribed ? 'CANCELAR SUSCRIPCIÓN' : 'INSCRIBIRSE'}
              </Button>
            </AlignWrapper>
          )}
          <Share>
            <h5>Compartir en:</h5>
            <div>
              <a
                onClick={() =>
                  share(`//api.whatsapp.com/send?text=${originalUrl}`)
                }
              >
                <Icon
                  width={33}
                  height={33}
                  name='whatsapp'
                  fill={theme.colors.main}
                />
              </a>
              <a
                onClick={() =>
                  share(
                    `http://twitter.com/share?text=${
                    currentEvent.name
                    }&url=${originalUrl}`
                  )
                }
              >
                <Icon
                  width={28}
                  height={28}
                  name='twitter'
                  fill={theme.colors.main}
                />
              </a>
              <a
                onClick={() =>
                  share(
                    `https://www.facebook.com/sharer/sharer.php?u=${originalUrl}`
                  )
                }
              >
                <Icon
                  width={28}
                  height={28}
                  name='facebook'
                  fill={theme.colors.main}
                />
              </a>
            </div>
          </Share>
          <PageTitle text='Próximos eventos' />
          <EventsContainer>
            <div>
              <DisplayCalendar highlightedDates={eventsDates} />
            </div>
            <div>
              {latestEvents.length > 0 ? latestEvents.map(event => (
                <CardWithSideNumber
                  key={event.id}
                  number={getDayOfMonth(event.startAt)}
                  title={event.name}
                  summary={event.intro}
                  dateText={getFormatedDate(event.startAt)}
                  href={`/evento/${event.slug}`}
                />
              )) : (
                  <div>No hay eventos próximos</div>
                )}
            </div>
          </EventsContainer>
          <AlignWrapper margin='1rem'>
            <Button asLink>
              <Link href='/eventos/todos'>
                <a>Ver todos los eventos</a>
              </Link>
            </Button>
          </AlignWrapper>
        </Wrapper>
      </Fragment>
    )
  }
}

EventDetail.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  isSubscriptionLoading: PropTypes.bool.isRequired,
  currentEvent: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
  latestEvents: PropTypes.array.isRequired,
  eventsDates: PropTypes.array.isRequired,
  toggleSubscription: PropTypes.func.isRequired,
  checkSubscription: PropTypes.func.isRequired
}

export default withStore(EventDetail)
