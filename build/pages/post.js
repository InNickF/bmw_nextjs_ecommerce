import React, { Fragment, Component } from 'react'
import PropTypes from 'prop-types'
import NoSSR from 'react-no-ssr'
import { createGlobalStyle } from 'styled-components'
import { connect } from 'react-redux'
import {
  // AlignWrapper,
  PageTitle,
  Modal,
  // Button,
  Wrapper,
  PostContent,
  PostCreateForm,
  CardPostList
} from '../common/components'

import { getOriginalUrl } from '../common/helpers'

import { BlogsCont } from '../styles/post'

import BackArrow from '../common/src/components/Icon/icons/back-arrow'

import { Link } from '../common/src/routes/bmw'

import {
  app as coreApp,
  blog as coreBlog
} from '../common/redux'

import editorcss from 'react-quill/dist/quill.snow.css'
import { SeparatorTop, TitleNovedades } from '../styles/blog'

createGlobalStyle`
  ${editorcss};
`

const appActions = coreApp.actions
const blogActions = coreBlog.actions

class Post extends Component {
  static async getInitialProps({ query, store, req }) {
    store.dispatch(blogActions.getArticle(query.slug))
    return { originalUrl: getOriginalUrl(req) }
  }

  render() {
    const {
      isCreatePostVisible,
      closeCreatePostModal,
      originalUrl
    } = this.props
    return (
      <Fragment>
        <Wrapper>
          <SeparatorTop />
          <Link route="blog" >
            <BlogsCont>
              <a className='backBlogs'>
                <BackArrow />
              </a>
              <a>Blogs</a>
            </BlogsCont>
          </Link>
          <br />
          <br />

          <TitleNovedades>{this.props.currentPost.get('name')}</TitleNovedades>
          <PostContent
            title={this.props.currentPost.get('name')}
            content={this.props.currentPost.get('body')}
            intro={this.props.currentPost.get('intro')}
            image={this.props.currentPost.get('image')}
            slug={this.props.currentPost.get('slug')}
            originalUrl={originalUrl}
          />
          <SeparatorTop />
          <TitleNovedades>Más articulos y noticias</TitleNovedades>
          <CardPostList posts={this.props.relatedPosts} title={this.props.currentPost.get('name')} />
          {/* {this.props.isLogged && (
            <AlignWrapper align='center' margin='3rem'>
              <Button action={this.props.toggleCreatePostModal} width='230px'>
                CREAR ENTRADA
              </Button>
            </AlignWrapper>}
          ) */}
        </Wrapper>
        {this.props.isLogged && (
          <NoSSR>
            <Modal
              name='create-post'
              isVisible={isCreatePostVisible}
              closeModal={closeCreatePostModal}
            >
              <PostCreateForm
                categories={this.props.categories}
                createPost={this.props.createPost}
              />
            </Modal>
          </NoSSR>
        )}
      </Fragment>
    )
  }
}

Post.propTypes = {
  isCreatePostVisible: PropTypes.bool,
  closeCreatePostModal: PropTypes.func.isRequired,
  categories: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  toggleCreatePostModal: PropTypes.func.isRequired,
  currentPost: PropTypes.object.isRequired,
  isLogged: PropTypes.bool.isRequired,
  relatedPosts: PropTypes.array.isRequired,
  theme: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  const blog = state.get('blog')
  const theme = state.get('app').get('theme').toJS()

  return {
    isCreatePostVisible:
      state.getIn(['app', 'dialogs', 'create-post']) || false,
    categories: blog.get('articleCategories').toJS(),
    currentPost: blog.get('currentPost'),
    relatedPosts: blog.get('relatedPosts').toJS(),
    isLogged: !!state.getIn(['user', 'user', 'id']) || false,
    theme
  }
}

function mapDispatchToProps(dispatch) {
  return {
    closeCreatePostModal: () =>
      dispatch(appActions.setDialogState('create-post', false)),
    toggleCreatePostModal: () =>
      dispatch(appActions.setDialogState('create-post', true)),
    createPost: values => {
      dispatch(blogActions.createArticle(values.toJS()))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Post)
