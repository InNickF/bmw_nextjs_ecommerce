import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import Pagination from 'react-js-pagination'

import {
  AlignWrapper,
  CardWithHeadImage,
  GenerateTags,
  PageTitle,
  SearchInput,
  Wrapper
} from '../../common/components'


import { events as coreEvents } from '../../common/redux'

import { dateHelpers, getOriginalUrl } from '../../common/helpers'

import { TitleContainer } from '../../styles/event-detail'

import {
  EventsContainer,
  TopNavContainer,
  InputWrapper,
  PaginationWrapper
} from '../../styles/all-events'

import withStore from './store'

const { getFormatedDate } = dateHelpers
const { getAllEvents } = coreEvents.actions

class AllEvents extends Component {
  static async getInitialProps({ store, req, query }) {
    store.dispatch(getAllEvents(query.p, query.q))
    return { originalUrl: getOriginalUrl(req) }
  }
  render() {
    const {
      paginationData: { currentPage, count, perPage, showing },
      onChangePage,
      theme,
      onInputChange,
      events,
      originalUrl
    } = this.props

    const paginationOptions = {
      prevPageText: 'Anterior',
      nextPageText: 'Siguiente',
      activePage: currentPage,
      itemsCountPerPage: perPage,
      totalItemsCount: count,
      pageRangeDisplayed: 5,
      onChange: onChangePage
    }

    return (
      <Fragment>
        <GenerateTags title='Eventos' url={originalUrl} />
        <Wrapper>
          <TitleContainer>
            <PageTitle
              link='/index'
              text='Eventos'
              leftArrow
              arrowColor={theme.colors.textColor}
            />
          </TitleContainer>
          <TopNavContainer>
            <InputWrapper>
              <SearchInput
                onSubmit={onInputChange}
                placeholder='Buscar evento'
              />
            </InputWrapper>
            <PaginationWrapper>
              <Pagination {...paginationOptions} />
              <div>
                Mostrando {showing} de {count}
              </div>
            </PaginationWrapper>
          </TopNavContainer>
          <EventsContainer>
            {events.map(item => (
              <CardWithHeadImage
                key={item.id}
                title={item.name}
                intro={getFormatedDate(item.startAt)}
                image={item.image}
                href={`/evento/${item.slug}`}
              />
            ))}
          </EventsContainer>
          <AlignWrapper>
            <PaginationWrapper className='in-mobile'>
              <Pagination {...paginationOptions} />
              <div>
                Mostrando {showing} de {count}
              </div>
            </PaginationWrapper>
          </AlignWrapper>
        </Wrapper>
      </Fragment>
    )
  }
}

AllEvents.propTypes = {
  events: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired,
  paginationData: PropTypes.object.isRequired,
  onChangePage: PropTypes.func.isRequired,
  onInputChange: PropTypes.func.isRequired
}

export default withStore(AllEvents)
