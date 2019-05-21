import { init } from '@rematch/core'
import models from './Models'
import plugins from './Plugins'

const store = init({
  plugins,
  models,
})
// console.log(models)
export const { dispatch,select } = store

export default store
