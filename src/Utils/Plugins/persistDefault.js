import createRematchPersist from '@rematch/persist'
// see options API below
const options = {
  whitelist: ['clientModel','productModel','categoryModel'],
  throttle: 5000,
  version: 1,
}

export default createRematchPersist(options)