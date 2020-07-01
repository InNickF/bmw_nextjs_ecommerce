import React from 'react'
import { withTheme } from 'styled-components'

import Link from 'next/link';

import Text from './styles'

function PageText (props) {
  return (
    <Text {...props}>
      {props.link ? (
        <Link href={props.link}>
          <a>
            {
              props.text
            }
          </a>
        </Link>
      )
        : props.text
      }
    </Text>
  )
}

export default withTheme(PageText)
