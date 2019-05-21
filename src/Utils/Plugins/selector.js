import createCachedSelector from 're-reselect'
import selectPlugin from '@rematch/select'


const options = {
  selectorCreator: createCachedSelector
}

export default selectPlugin(options)
