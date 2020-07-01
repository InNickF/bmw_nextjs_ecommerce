import React from 'react'
import PropTypes from 'prop-types'

import { ProfileArticleCard } from '../../components'

import withStore from './store'

function ProfilePosts (props) {
  return (
    <div>
      <div>
        {props.userArticles.length ? (
          props.userArticles.map(item => (
            <ProfileArticleCard {...item} key={item.id} />
          ))
        ) : (
          <p>No se encontraron registros</p>
        )}
      </div>
    </div>
  )
}

ProfilePosts.propTypes = {
  userArticles: PropTypes.array.isRequired
}

export default withStore(ProfilePosts)
