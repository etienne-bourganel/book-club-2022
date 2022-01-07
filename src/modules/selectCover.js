import orwell1984 from '../data/images/covers/1984.jpg'
import twelve from '../data/images/covers/12_rules.png'
import shantaram from '../data/images/covers/shantaram.jpg'
import viSkuggorna from '../data/images/covers/vi-skuggorna.jpg'
import foundation from '../data/images/covers/foundation.jpg'
import factfulness from '../data/images/covers/factfulness.jpg'
import theRoad from '../data/images/covers/theroad.jpg'
import questionMark from '../data/images/covers/questionMark.png'

const selectCover = (bookID) => {
  switch (bookID) {
    case 1:
      return orwell1984
    case 2:
      return twelve
    case 3:
      return shantaram
    case 4:
      return viSkuggorna
    case 5:
      return foundation
    case 6:
      return factfulness
    case 7:
      return theRoad
    default:
      return questionMark
  }
}

export default selectCover
