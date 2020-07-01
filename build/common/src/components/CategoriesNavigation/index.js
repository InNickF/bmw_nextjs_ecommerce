import React, { Fragment, useState } from 'react'

import PropTypes from 'prop-types'

import { Icon } from '../'
import { Link } from '../../../src/routes/bmw'
import capitalize from '../../helpers/uppercaseFirstLetter'

import withState from './state'

import {
  Content,
  Head,
  Item,
  BackButton,
  Navigation,
  ItemLink
} from './styles'
import capitalizeBrands from '../../helpers/capitalizeBrands'

function ListItem({ children, withElements, action, addAnimation }) {
  const actionWithAnimation = () => {
    action();
    addAnimation();
  }
  return (
    <Item>
      {children}
      {withElements && (
        <span onClick={actionWithAnimation}>
          <span name='right-arrow' />
        </span>
      )}
    </Item>
  )
}

ListItem.propTypes = {
  withElements: PropTypes.bool,
  children: PropTypes.node.isRequired
}

function ArrowLeft() {
  return (
    <svg width="9" height="11" viewBox="0 0 9 11" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M0.425012 9.7075L1.94014 11L8.38751 5.5L1.94014 0L0.425012 1.2925L5.3465 5.5L0.425012 9.7075Z" fill="#C8C8C8" />
    </svg>
  )
}

function DefaultItems({ setNextState, logout, isLogged, toggleClass, categories }) {
  const parentId = 0 // top level categories

  return (
    <Fragment>
      {categories.map(item =>
        <ListItem
          key={item.id}
          addAnimation={toggleClass}
        >
          <Link
            route="products"
            params={{ level: item.level, c: item.slug }}>
            <ItemLink>
              {capitalizeBrands(capitalize(item.name))}
              <div onClick={(e) => { e.preventDefault(); setNextState(item.id) }}>
                <ArrowLeft />
              </div>
            </ItemLink>
          </Link>
        </ListItem>)}

      <ListItem addAnimation={toggleClass}>
        <Link route="blog">
          <ItemLink>
            <a>Novedades</a>
            <ArrowLeft />
          </ItemLink>
        </Link>
      </ListItem>
      <ListItem addAnimation={toggleClass}>
        <Link route="products" params={{ offer: "true" }}>
          <ItemLink>
            <a>Ofertas</a>
            <ArrowLeft />
          </ItemLink>
        </Link>
      </ListItem>
      <ListItem addAnimation={toggleClass}>
        <ItemLink onClick={() => {
          localStorage.clear();
          sessionStorage.clear();
        }}>
          <a >Borrar LocalStorage</a>
        </ItemLink>
      </ListItem>
      {isLogged && (
        <ListItem addAnimation={toggleClass}>
          <Link route="wishlist">
            <ItemLink>
              <a>Lista de deseos</a>
              <ArrowLeft />
            </ItemLink>
          </Link>
        </ListItem>
      )}
      {isLogged && (
        <ListItem>
          <ItemLink onClick={logout}>
            <a >Cerrar sesión</a>
          </ItemLink>
        </ListItem>
      )}
    </Fragment>
  )
}

DefaultItems.propTypes = {
  setNavigationState: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired
}

function CategoriesList({ categories, setNextState, toggleClass }) {
  return (
    <Fragment>
      {categories.map(item =>
        item.withCategories ? (
          <ListItem
            key={item.id}
            withElements
            action={() => setNextState(item.id)}
            addAnimation={toggleClass}
          >
            <Link
              route="products"
              params={{ level: item.level, parentId: item.parentId, c: item.slug }}
            >
              <ItemLink>
                {capitalizeBrands(capitalize(item.name))}
                <ArrowLeft />
              </ItemLink>
            </Link>
          </ListItem>
        ) : (
            <ListItem key={item.id}
              addAnimation={toggleClass}>
              <Link
                route="products"
                params={{ level: item.level, parentId: item.parentId, c: item.slug }}>
                <ItemLink>
                  {capitalizeBrands(capitalize(item.name))}
                  <ArrowLeft />
                </ItemLink>
              </Link>
            </ListItem>
          )
      )}
    </Fragment>
  )
}

CategoriesList.propTypes = {
  categories: PropTypes.array.isRequired,
  setNextState: PropTypes.func.isRequired
}

function HeadNav({ navigationText, setPrevState }) {
  return (
    <BackButton onClick={() => setPrevState()}>
      <ItemLink>
        <Icon name='right-arrow' fill='#c4c4c4' />
        <span>{capitalizeBrands(capitalize(navigationText))}</span>
      </ItemLink>
    </BackButton>
  )
}

HeadNav.propTypes = {
  navigationText: PropTypes.string.isRequired,
  setPrevState: PropTypes.func.isRequired
}

function CategoriesNavigation({
  categories,
  theme,
  bgHead,
  colorHead,
  DefaultHeader,
  setNavigationState,
  getCategoriesByParentId,
  navigationStatus,
  setNextState,
  setPrevState,
  logout,
  isLogged
}) {
  const [entranceClass, setEntranceClass] = useState(false);

  const test = () => {
    setEntranceClass(true)
    setTimeout(function () {
      setEntranceClass(false)
    }, 500);


  }
  return (
    <Navigation theme={theme}>
      {navigationStatus.activedNavigation && (
        <HeadNav
          navigationText={navigationStatus.navigationText}
          setPrevState={setPrevState}
        />
      )}

      {!navigationStatus.activedNavigation &&
        <Head bgHead={bgHead} colorHead={colorHead}>
          {DefaultHeader}
        </Head>
      }
      <Content className={entranceClass ? 'slide-in-left' : ''}>
        {navigationStatus.activedNavigation && (
          <CategoriesList
            categories={getCategoriesByParentId(
              navigationStatus.currentCategory
            )}
            setNextState={setNextState}
            toggleClass={test}
          />
        )}
        {!navigationStatus.activedNavigation && (
          <DefaultItems
            setNavigationState={setNavigationState}
            setNextState={setNextState}
            categories={getCategoriesByParentId(0)}
            logout={logout}
            isLogged={isLogged}
            toggleClass={test}
          />
        )}
      </Content>
    </Navigation>
  )
}

CategoriesNavigation.defaultProps = {
  categories: [],
  getCategoriesByParentId: () => null
}

CategoriesNavigation.propTypes = {
  bgHead: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  colorHead: PropTypes.string,
  DefaultHeader: PropTypes.element.isRequired,
  setNavigationState: PropTypes.func.isRequired,
  setNextState: PropTypes.func.isRequired,
  setPrevState: PropTypes.func.isRequired,
  getCategoriesByParentId: PropTypes.func,
  theme: PropTypes.object.isRequired,
  navigationStatus: PropTypes.object.isRequired
}

export default withState(CategoriesNavigation)
