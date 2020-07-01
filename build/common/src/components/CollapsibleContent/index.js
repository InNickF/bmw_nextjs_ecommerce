import React from 'react'
import { withState } from 'recompose'

import { Icon } from '../'

function CollapsibleContent ({ title, children, isActived, toggleActived }) {
  return (
    <div className='collapsible'>
      <h4
        onClick={() => toggleActived(!isActived)}
        className={isActived ? 'actived' : ''}
      >
        <span>{title}</span>
        <Icon name='dropdown-arrow' />
      </h4>
      {isActived && (
        <div className='content'>{children}</div>
      )}

    </div>
  )
}

export default withState('isActived', 'toggleActived', false)(
  CollapsibleContent
)
