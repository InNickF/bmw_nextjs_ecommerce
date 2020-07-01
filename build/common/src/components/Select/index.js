import React, { createRef } from 'react'
import PropTypes from 'prop-types'

import { Icon } from '../'

import { Container } from './styles'

import withState from './state'

function Select(props) {
  const selectRef = createRef()
  return (
    <Container className='select'>
      <div title={props.selectedText || props.placeholder || ''}>
        <span>
          {props.selectedText || props.placeholder || ''}
        </span>
      </div>
      <select
        ref={selectRef}
        onChange={e => {
          props.onSelectItem(e, selectRef.current.selectedOptions[0])
        }}
        defaultValue={props.defaultValue.value}
        disabled={props.disabled}
      >
        {props.children}
      </select>
      <button type='button' className="btn-filter">
        <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0L5 5L10 0H0Z" fill="black" />
        </svg>
      </button>
    </Container>
  )
}

Select.propTypes = {
  defaultValue: PropTypes.object,
  selectedText: PropTypes.string,
  placeholder: PropTypes.string,
  children: PropTypes.node,
  theme: PropTypes.object,
  onSelectItem: PropTypes.func
}

export default withState(Select)
