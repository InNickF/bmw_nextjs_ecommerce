import React from 'react'
import PropTypes from 'prop-types'

import {
  Item,
  DropdownMain,
  DropdownList,
  DropdownBlock,
  CollectionContent,
  CollectionList
} from './styles'

function DropdownItem(props) {
  const { cover, subItem, setImg } = props
  return (
    <Item flatItem={props.flatItem} asLink={props.asLink} showArrow={props.children}
      onMouseEnter={() => { setImg(subItem ? subItem : cover) }} onMouseLeave={() => { setImg(subItem ? subItem : cover) }}>
      <div>
        {props.itemButton}
      </div>
      {props.children}
    </Item>
  )
}

DropdownItem.propTypes = {
  flatItem: PropTypes.bool,
  asLink: PropTypes.bool,
  itemButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

function DropdownBlockItem(props) {
  return (
    <DropdownBlock>
      <div className='head'>{props.itemButton}</div>
      {props.children}
    </DropdownBlock>
  )
}

DropdownBlockItem.propTypes = {
  itemButton: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.node])
}

export default {
  DropdownMain,
  DropdownList,
  DropdownItem,
  DropdownBlockItem,
  CollectionContent,
  CollectionList
}
