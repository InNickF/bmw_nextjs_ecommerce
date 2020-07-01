import { connect } from 'react-redux'
import { change } from 'redux-form'

import { nextRouter } from '../../helpers'

const { Router } = nextRouter

import { withTheme } from 'styled-components'
import { withState, lifecycle, withHandlers, compose } from 'recompose'

import { app as coreApp, product as coreProduct } from '../../redux'


const lifecycles = lifecycle({
  componentDidMount() {
    this.props.getSeries()
    const tablet = 768
    const $window = window
    if (typeof $window !== 'undefined') {
      this.props.setIsMobile($window.innerWidth <= tablet)
      $window.addEventListener('resize', e => {
        const width = $window.innerWidth
        this.props.setIsMobile(width <= tablet)
      })
    }
  },
  componentWillUnmount() {
    const abortController = new AbortController();
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', () => { })
    }
    abortController.abort();
  }
})

const isMobile = withState('isMobile', 'setIsMobile', false)
const isHelpModalOpen = withState('isHelpModalOpen', 'setHelpModalOpen', false)
const isModelModalOpen = withState(
  'isModelModalOpen',
  'setModelModalOpen',
  false
)
const isChassisModalOpen = withState(
  'isChassisModalOpen',
  'setChassisModalOpen',
  false
)

const showingFilter = withState('showingFilter', 'setShowingFilter', {
  showing: false,
  filter: 'chassis'
})

const dialogs = withHandlers({
  toggleHelpModal: props => () => {
    props.setHelpModalOpen(!props.isHelpModalOpen)
  },
  toggleModelModal: props => () => {
    props.setModelModalOpen(!props.isModelModalOpen)
  },
  toggleChassisModal: props => () => {
    props.setChassisModalOpen(!props.isChassisModalOpen)
  }
})

const funcs = withHandlers({
  showModelFilter: props => () => {
    if (!props.isMobile) {
      props.setShowingFilter({
        showing: true,
        filter: 'model'
      })
      return
    }

    props.toggleModelModal()
  },
  showChassisFilter: props => () => {
    if (!props.isMobile) {
      props.setShowingFilter({
        showing: true,
        filter: 'chassis'
      })
      return
    }

    props.toggleChassisModal()
  },
  closeFilters: props => () => {
    props.setShowingFilter({
      showing: false,
      filter: 'chassis'
    })
  },
  onChassisFilterSubmit: props => values => {
    Router.push(`/productos?chassis=${values.chassis}`)
  },
  change: props => () => {
    props.setCompatibility({})
    props.getProducts(props.query)
  },
  onModelFilterSubmit: props => ({ year, serie, model }) => {
    /* props.getProductsFilter({ anio: year, serie, modelo: model }) */
    /* this.setCompatibility() */
    /* props.getSeries() */
    let serieCurrent = process.env.BRAND_ID == 2 ? 163 : serie;
    /* props.getProductsFilter({ anio: year, serie: serieCurrent, modelo: model }) */
    props.setCompatibility({ year: year, serie: props.series.find(serieCurrentFind => serieCurrentFind.id == serieCurrent), model: props.models.find(modelCurrent => modelCurrent.id == model) })
    /*   Router.pushRoute('products', {
        anio: year,
        serie: serie,
        modelo: model
      }) */
    /*    `/productos?anio=${year}&serie=${serie}&modelo=${model}`
        ) */
  },
  checkIfAuthenticated: props => (formName, fieldName, isChecked) => {
    if (!props.isAuthenticated) {
      props.showLogin()
      props.changeFormField(formName, fieldName, false)
    }
  }
})

function mapStateToProps(store) {
  const user = store
    .get('user')
    .get('user')
    .toJS()
  const selectedCar = store
    .get('product')
    .get('compatibility')
    .toJS()
  const { years, series, models } = store
    .get('product')
    .get('modelFilter')
    .toJS()
  return {
    isAuthenticated: Object.hasOwnProperty.call(user, 'id'),
    models,
    series,
    years,
    selectedCar
  }
}

function mapDispatchToProps(dispatch) {
  const { setDialogState } = coreApp.actions
  const { getSeries, getModels, getProducts, setCompatibility } = coreProduct.actions

  return {
    getSeries: () => dispatch(getSeries()),
    getProductsFilter: (query) => { dispatch(getProducts(query)); },
    getModels: vehicleSerieId => dispatch(getModels(vehicleSerieId)),
    changeFormField: (formName, fieldName, value) =>
      dispatch(change(formName, fieldName, value)),
    showLogin: () => dispatch(setDialogState('login', true)),
    setCompatibility: (compatibility) => dispatch(setCompatibility(compatibility))
  }
}

const redux = connect(
  mapStateToProps,
  mapDispatchToProps
)

const enhance = compose(
  redux,
  withTheme,
  isMobile,
  isHelpModalOpen,
  isModelModalOpen,
  isChassisModalOpen,
  showingFilter,
  dialogs,
  funcs,
  lifecycles
)

export default enhance
