import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Icon } from '../'
import { Link } from '../../routes/bmw'

import { List, Item } from './styles'
import capitalize from '../../helpers/uppercaseFirstLetter'

import withState from './state'
import capitalizeBrands from '../../helpers/capitalizeBrands'

function CollapsibleLinks(props) {
  const { items, level, toggleLink, isOpen, parentId, breadcrumbs, notFound } = props

  const [offer, setOffer] = useState()

  if (typeof window !== 'undefined') {
    let isOffer = window.location.search.split('offer=')[1]
    //ignore other params
    if (isOffer && !offer)
      setOffer(true)
  }

  return (
    <List padding={level * 3 + 15}>
      {items.map((item, i) => {
        const nestItems = item.childrenCategories || []
        const openned = isOpen(item.id)
        let params = { "c": item.slug, "level": level }
        if (parentId)
          params["parentId"] = parentId;

        if (typeof window !== 'undefined' && window.location.search.split('offer=')[1] && offer)
          params["offer"] = offer

        return (
          <Item
            className={((breadcrumbs[0] && breadcrumbs[0].label.toLowerCase() !== item.name.toLowerCase()) && !item.parentId) ? 'hide-lifestyle-list' : ''}
            key={i}
            rootCollapsible={level === 1}
            openned={openned}
          >
            <Link
              route="products"
              params={params}
            >
              <a className={!item.parentId ? 'category-responsive-title' : ''}>{item.parentId || notFound ? capitalizeBrands(capitalize(item.name)) : 'Categorías'}</a>
            </Link>
            <button onClick={() => toggleLink(item.id)} className="btn-top-category">
              {!!nestItems.length && (
                <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 1L7 7L13 1" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </button>
            {openned && nestItems && (
              <CollapsibleLinks
                {...props}
                items={nestItems}
                level={level + 1}
                parentId={item.id}
              />
            )}
          </Item>
        )
      })}
    </List>
  )
}

CollapsibleLinks.defaultProps = {
  openedItems: [],
  items: [],
  level: 1
}

CollapsibleLinks.propTypes = {
  items: PropTypes.array,
  openedItems: PropTypes.array,
  getNestedItems: PropTypes.func,
  toggleLink: PropTypes.func,
  isOpen: PropTypes.func,
  level: PropTypes.number
}

export default withState(CollapsibleLinks)
