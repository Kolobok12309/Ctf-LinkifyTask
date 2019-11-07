import escape from 'lodash.escape'

import linkify from './linkify'
import emojify from './emojify'

export const safetyText = (text) => {
  let result = text

  result = escape(result)
  result = linkify(result)

  return emojify(result)
}
