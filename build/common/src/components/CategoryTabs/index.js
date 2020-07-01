import React from 'react'
import { withTheme } from 'styled-components'

import { Container, Tab, TabsContainer, CategoryBannerContainer, CategoryBanner } from './styles'
import { Link } from '../../routes/bmw'
import capitalizeBrands from '../../helpers/capitalizeBrands'
import { capitalize } from '../../helpers'

function CategoryTabs({
  title,
  slug,
  tabs,
  changeTab,
  currentTab
}) {
  return (
    <Container>
      <h2>{title}</h2>
      <TabsContainer>
        {tabs.map(item => (
          <Tab
            key={item.id}
            isSelected={item.id == currentTab}
            onClick={() => changeTab(item.id, item.level)}
          >
            {capitalizeBrands(capitalize(item.label))}
          </Tab>
        ))}
      </TabsContainer>
      <CategoryBannerContainer>
        {tabs.map((tab, i) => (
          <CategoryBanner key={i}>
            <h2>{tab.label}.</h2>
            <img
              src={
                tab.img || 'https://autogermana.s3.amazonaws.com/no%20-foto.png'
              } />
            <Link route="products" params={{ c: tab.id, level: tab.level }}>
              <a className="cta-resp-height">Comprar {tab.label.replace(/ .*/, '')}</a>
            </Link>
          </CategoryBanner>
        ))}
      </CategoryBannerContainer>
    </Container>
  )
}

export default withTheme(CategoryTabs)
