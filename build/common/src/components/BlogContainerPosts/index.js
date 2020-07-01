import React from 'react'

import { Button } from '..'
import { Link } from '../../routes/bmw'

import { PostGridList, BlogHomeContainer, PostContainer, PostHome, AutorCard, PostCard, PostCardMotorrad } from './styles'

function BlogContainerPosts({
  title,
  posts
}) {
  return (
    <BlogHomeContainer>
      <h2>{title + '.'}</h2>
      <PostContainer>
        <PostHome>
          <img
            src={
              posts.length ? posts[0].image : 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
            }
            alt={title}
          />
          <div className="post-data">
            <div className="post-data-text">
              <h3>{posts.length && posts[0].name + (posts[0].name.slice(-1).includes(".") ? '' : '.')}</h3>
              <p>{posts.length && posts[0].summary}</p>
            </div>
            <div className="autor-card-container">
              {/* params={{ slug: posts[0].slug }} */}
              <Link route="blog"  >
                <a className="cta-bold">Ver más</a>
              </Link>

              {/*          <AutorCard>
                <img
                  src={
                    'https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/25_07_2019_11_15_22_2970543.jpg?width=920&format=jpeg' || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                  }
                  alt='autor'
                />
                <div>
                  <h3>July Torres</h3>
                  <p>Creadora de contenido</p>
                </div>
              </AutorCard> */}
              <div></div>
            </div>
          </div>
        </PostHome>
        <PostGridList>
          {posts.length && posts.map((post, i) =>
            i < 3 &&
            <PostCard key={i}>
              <img
                src={
                  post.image || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
                }
                alt={title}
              />

              {parseInt(process.env.BRAND_ID) !== 1 ?
                <>
                  <h3>{post.name + (post.name.slice(-1).includes(".") ? '' : '.')}</h3>
                  <p>{post.summary}</p>
                  <Link route="blogpost" params={{ slug: post.slug }}  >
                    <a className="cta-bold">Leer</a>
                  </Link>
                </> :
                <PostCardMotorrad>
                  <Link route="blogpost" params={{ slug: post.slug }}  >
                    <a>
                      <h3>{post.name + (post.name.slice(-1).includes(".") ? '' : '.')}</h3>
                      <p>{post.summary}</p>
                    </a>
                  </Link>
                </PostCardMotorrad>
              }
            </PostCard>
          )}
        </PostGridList>
      </PostContainer>
    </BlogHomeContainer>
  )
}

export default BlogContainerPosts
