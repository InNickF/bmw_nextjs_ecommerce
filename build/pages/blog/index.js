import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import NoSSR from 'react-no-ssr'
import { createGlobalStyle } from 'styled-components'
import { BlogContainer, TitleNovedades, SeparatorTop } from '../../styles/blog'
import 'react-quill/dist/quill.snow.css'
import { EventsContainer, BtnNovedades } from '../../styles/events'
import {
  // AlignWrapper,
  // Button,
  CardPostList,
  CardWithSideImage,
  Modal,
  PageTitle,
  PostCreateForm,
  Separator,
  GenerateTags,
  Wrapper,
  DisplayCalendar,
  CardWithSideNumber,
  AlignWrapper,
  Button,
} from '../../common/components'
import 'react-quill/dist/quill.snow.css'

import { Link } from '../../common/src/routes/bmw'

import { blog as coreBlog, events as coreEvents } from '../../common/redux'
import { getOriginalUrl, dateHelpers } from '../../common/helpers'


import withStore from './store'
import { ButtonContainer } from '../../common/src/components/CardWithSideImage/styles'


const { getDayOfMonth, getFormatedDate } = dateHelpers

class Blog extends Component {
  static async getInitialProps({ store, req }) {
    /* const { lastEvent, getHomeData } = this.props */
    const state = store.getState()
    const post = state.toJS().blog.posts;
    const { getBlogData } = coreBlog.actions
    const { getLatestEvents } = coreEvents.actions
    store.dispatch(getLatestEvents())
    /* store.dispatch(homeActions.getHomeData()) */
    /* let slides = await HomeService.fetchSlides(); */
    if (!post.lastArticles.length > 0)
      store.dispatch(getBlogData())

    return { originalUrl: getOriginalUrl(req) }
  }

  render() {
    const {
      categories,
      createPost,
      diyArticle,
      firstInLastPosts,
      howToArticles,
      isLogged,
      isCreatePostVisible,
      lastArticles,
      responsibilityArticle,
      closeCreatePostModal,
      // toggleCreatePostModal,
      lastEvents,
      eventsDates,
      nextEvents,
      showFeedback,
      originalUrl
    } = this.props

    return (
      <Fragment>
        <GenerateTags title='Blog' url={originalUrl} />
        <SeparatorTop />
        <Wrapper>
          <TitleNovedades>Blog</TitleNovedades>
          <BlogContainer>
            <Link route="blogpost"
              params={{ slug: firstInLastPosts.slug }} >
              <a className='principalBlog' />
            </Link>
            <CardWithSideImage
              title={firstInLastPosts.name}
              image={firstInLastPosts.image}
              summary={firstInLastPosts.summary}
              buttonContent={
                <Link route="blogpost"
                  params={{ slug: firstInLastPosts.slug }}>
                  <a className='blogDetail'>VER MÁS</a>
                </Link>
              }
            />
          </BlogContainer>
          <CardPostList posts={lastArticles} />
          {diyArticle &&
            diyArticle.name && (
              <Fragment>
                <Separator width='95%' color='#979797' />
                <PageTitle text='DIY' />
                <BlogContainer>
                  <Link route="blogpost"
                    params={{ slug: firstInLastPosts.slug }} >
                    <a className='principalBlog' />
                  </Link>
                  <CardWithSideImage
                    title={diyArticle.name}
                    image={diyArticle.image}
                    summary={diyArticle.summary}
                    buttonContent={
                      <Link route="blogpost"
                        params={{ slug: diyArticle.slug }} >
                        <a className='blogDetail'>VER MÁS</a>
                      </Link>
                    }
                    rightImage
                  />
                </BlogContainer>
              </Fragment>
            )}
          {howToArticles &&
            !!howToArticles.length && (
              <Fragment>
                <Separator width='100%' color='#979797' />
                <TitleNovedades>How to</TitleNovedades>
                <CardPostList posts={howToArticles} />
              </Fragment>
            )}
          {responsibilityArticle &&
            responsibilityArticle.name && (
              <Fragment>
                <Separator width='100%' color='#979797' />
                <PageTitle text='Responsabilidad vial' />
                <BlogContainer>
                  <Link route="blogpost"
                    params={{ slug: firstInLastPosts.slug }}  >
                    <a className='principalBlog' />
                  </Link>
                  <CardWithSideImage
                    title={responsibilityArticle.name}
                    image={responsibilityArticle.image}
                    summary={responsibilityArticle.summary}
                    buttonContent={
                      <Link route="blogpost"
                        params={{ slug: responsibilityArticle.slug }} >
                        <a className='blogDetail'>VER MÁS</a>
                      </Link>
                    }
                  />
                </BlogContainer>
              </Fragment>
            )}

          <Separator width='100%' color='#979797' margin='2rem' />
          <TitleNovedades>Eventos</TitleNovedades>
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
          {/* {isLogged && (
            <AlignWrapper align='center' margin='1rem'>
              <Button action={toggleCreatePostModal}>CREAR ENTRADA</Button>
            </AlignWrapper>
          )} */}
          <TitleNovedades>Próximos eventos</TitleNovedades>
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
                  <div className="no-events">No hay eventos próximos</div>
                )}
            </div>
          </EventsContainer>
          <BtnNovedades>
            <Button asLink>
              <Link href='/eventos/todos'>
                <a>VER TODOS LOS EVENTOS</a>
              </Link>
            </Button>
          </BtnNovedades>

        </Wrapper>
        {
          isLogged && (
            <NoSSR>
              <Modal
                name='create-post'
                isVisible={isCreatePostVisible}
                closeModal={closeCreatePostModal}
              >
                <PostCreateForm categories={categories} createPost={createPost} />
              </Modal>
            </NoSSR>
          )
        }
      </Fragment >
    )
  }
}

Blog.propTypes = {
  categories: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  toggleCreatePostModal: PropTypes.func.isRequired,
  closeCreatePostModal: PropTypes.func.isRequired,
  firstInLastPosts: PropTypes.object.isRequired,
  lastArticles: PropTypes.array.isRequired,
  diyArticle: PropTypes.object.isRequired,
  howToArticles: PropTypes.array.isRequired,
  isLogged: PropTypes.bool.isRequired,
  isCreatePostVisible: PropTypes.bool.isRequired,
  responsibilityArticle: PropTypes.object.isRequired
}

export default withStore(Blog)
