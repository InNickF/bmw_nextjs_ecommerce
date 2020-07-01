import { createActions } from 'reduxsauce'

const { Types, Creators } = createActions({
  getPqrServices: null,
  setChangeTypes: ['data'],
  setReasonTypes: ['data'],
  requestPqr: ['data']
})

export const Actions = Types
export default Creators
