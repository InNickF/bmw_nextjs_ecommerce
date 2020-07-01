import React from 'react'
import PropTypes from 'prop-types'
import { withTheme } from 'styled-components'
import { reduxForm, Field } from 'redux-form/immutable'

import { Button, Icon } from '../'

import {
  Container,
  SubmitButton,
  SelectContainer,
  ClearButton
} from './styles'

function ModelFilterForm({
  buttonTextInMobile,
  checkIfAuthenticated,
  handleSubmit,
  hideModelSearch,
  onSubmit,
  theme,
  series,
  models,
  years,
  submitting,
  isResponsive,
  getModels,
  totalProducts,
  closeModal,
  hiddenTotal,
  quit
}) {

  if (process.env.BRAND_ID == 2 && Array.isArray(models) && models.length == 0) {
    getModels(163)
  }
  return (
    <Container>
      {isResponsive ?
        <form onSubmit={handleSubmit(values => { (onSubmit(values.toJS())); if (closeModal) closeModal() })}>
          <div className='fields responsive'>
            <SelectContainer>
              <label value=''>Año</label>
              <Field component='select' name='year' required>
                <option value=""></option>
                {years.map((item, i) => (
                  <option key={i} value={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </SelectContainer>
            {process.env.BRAND_ID == '3' &&
              <SelectContainer>
                <label value=''>Serie</label>
                <Field component='select' name='serie' required onChange={e => getModels(e.target.value)}>
                  <option value=""></option>
                  {series.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Field>
              </SelectContainer>
            }
            <SelectContainer>
              <label value=''>Modelo</label>
              <Field component='select' name='model' required>
                <option value=""></option>
                {models.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
            </SelectContainer>
          </div>
          <div className="flex-btn-container">
            <ClearButton onClick={() => { quit() }} >
              <Icon
                name='cancel-button'
                fill={theme.colors.mainAccentText}
                height={24}
                width={24}
              />
              <span>Borrar</span>
            </ClearButton>
            <SubmitButton disabled={submitting}>
              Ver
          <span> artículos compatibles</span>
            </SubmitButton>
          </div>
          {false && <div className='mobileButton'>
            <Button isSubmit disabled={submitting}>
              {buttonTextInMobile}
            </Button>
          </div>}
        </form>
        :
        <form onSubmit={handleSubmit(values => { (onSubmit(values.toJS())); if (closeModal) closeModal() })}>
          <div className='fields'>
            <ClearButton onClick={() => { quit() }} >
              <Icon
                name='cancel-button'
                fill={theme.colors.mainAccentText}
                height={24}
                width={24}
              />
              <span>Borrar</span>
            </ClearButton>
            <SelectContainer className="font-year">
              <label value=''>Año</label>
              <Field component='select' name='year' required>
                <option value=""></option>
                {years.map((item, i) => (
                  <option key={i} defaultValue={item}>
                    {item}
                  </option>
                ))}
              </Field>
            </SelectContainer>
            {process.env.BRAND_ID == '3' &&
              <SelectContainer>
                <label value=''>Serie</label>
                <Field component='select' name='serie' required onChange={e => getModels(e.target.value)}>
                  <option value=""></option>
                  {series.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Field>
              </SelectContainer>}
            <SelectContainer>
              <label value=''>{process.env.BRAND_ID !== '2' ? 'Modelo' : 'Clase'}</label>
              <Field component='select' name='model' required>
                <option value=""></option>
                {models.map(item => (
                  <option key={item.id} value={item.id}>
                    {item.name}
                  </option>
                ))}
              </Field>
            </SelectContainer>
            {/* {process.env.BRAND_ID === 2 &&
              <SelectContainer>
                <label value=''>Carroceria</label>
                <Field component='select' name='bodywork' required onChange={e => getbodywork()}>
                  {models.map(item => (
                    <option key={item.id} value={item.id}>
                      {item.name}
                    </option>
                  ))}
                </Field>
              </SelectContainer>
            } */}
            <SubmitButton disabled={submitting} >
              Ver
             <span>{hiddenTotal && totalProducts} artículos compatibles</span>
            </SubmitButton>
          </div>
          {false && <div className='mobileButton'>
            <Button isSubmit disabled={submitting}>
              {buttonTextInMobile}
            </Button>
          </div>}
        </form>
      }</Container>
  )
}

ModelFilterForm.defaultProps = {
  buttonTextInMobile: 'Buscar',
  hideModelSearch: false
}

ModelFilterForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  checkIfAuthenticated: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
  series: PropTypes.array.isRequired,
  models: PropTypes.array.isRequired,
  years: PropTypes.array.isRequired,
  submitting: PropTypes.bool.isRequired,
  getModels: PropTypes.func.isRequired,
  buttonTextInMobile: PropTypes.string,
  theme: PropTypes.object,
  hideModelSearch: PropTypes.bool
}

const modelFilter = reduxForm({
  form: 'modelFilter'
})

export default modelFilter(ModelFilterForm)
