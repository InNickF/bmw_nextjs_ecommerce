import React from 'react'
import PropTypes from 'prop-types'
import { Link } from '../../routes/bmw'
import { ellipsis, capitalize } from '../../helpers'

import { withTheme } from 'styled-components'

import { Card, Content, Number, Detail } from './styles'

function CardWithSideNumber({
  number,
  title,
  summary,
  dateText,
  href,
  params
}) {
  return (
    <Card>
      <Link href={href} params={params} passHref>
        <Content>
          <Number>{number}</Number>
          <Detail>
            <h3>{ellipsis(title, 25) + '.'}</h3>
            <div className='content'>{ellipsis(summary, 200)}</div>
            <div className='content mobile'>{ellipsis(summary, 100)}</div>
            <span>{capitalize(dateText)}</span>
          </Detail>
        </Content>
      </Link>
    </Card>
  )
}

CardWithSideNumber.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  summary: PropTypes.string.isRequired,
  dateText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  params: PropTypes.object.isRequired
}

export default withTheme(CardWithSideNumber)
