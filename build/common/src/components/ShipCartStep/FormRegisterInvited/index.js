import React, { useEffect, useState } from 'react';
import { createForm, formShape } from 'rc-form';
import { FormRegisterContainer, FieldContainer, FormContainer, BtnContainer, ContBtn, CheckBoxContainer } from '../styles'
import { useDispatch, useSelector } from 'react-redux';

import { cart } from '../../../redux'
import { Button } from '../../../components'

const { signupInvited } = cart.actions

function FormRegisterInvited({ form }) {

  const dispatch = useDispatch()
  const { getFieldProps, getFieldError } = form;
  let errors;

  const [term, setTerm] = useState(false)
  const [priv, setPriv] = useState(false)

  const { signupInvitedSuccess } = useSelector(state => ({
    signupInvitedSuccess: state.get('cart').get('signupInvitedSuccess')
  }))

  const submit = (event) => {
    event.preventDefault()
    form.validateFields((error, value) => {
      if (!error && term && priv) {
        dispatch(signupInvited(value))
      }
    });
  }

  return (
    <div className="mb-40">
      <FormRegisterContainer>
        <FieldContainer>
          <label>Nombre y apellido</label>
          <input {...getFieldProps('name', {
            initialValue: undefined,
            rules: [{ required: true, message: 'El nombre es requerido' }]
          })} />
          <span className="error-span">{(errors = getFieldError('name')) ? errors.join(',') : null}</span>
        </FieldContainer>

        <FieldContainer>
          <label>Teléfono</label>
          <input type="number" {...getFieldProps('phone', {
            rules: [{ required: true, message: 'El teléfono es requerido' }]
          })} />
          <span className="error-span">{(errors = getFieldError('phone')) ? errors.join(',') : null}</span>
        </FieldContainer>

        <FieldContainer>
          <label>Tipo de documento</label>
          <select disabled {...getFieldProps('docType', {
            initialValue: 'CC',
            rules: [{ required: true, message: 'El tipo de documento es requerido' }]
          })} >
            <option value="CC">Cédula de ciudadanía</option>
          </select>
          <span className="error-span">{(errors = getFieldError('docType')) ? errors.join(',') : null}</span>
        </FieldContainer>
        <FieldContainer>
          <label>Identificación</label>
          <input type="number" {...getFieldProps('identification', {
            rules: [{ required: true, message: 'El tipo de identificación es requerido' }]
          })} />
          <span className="error-span">{(errors = getFieldError('identification')) ? errors.join(',') : null}</span>
        </FieldContainer>
        {/*      <FieldContainer>
          <label>Cumpleaños</label>
          <input type="date" {...getFieldProps('birth', {
            rules: [{ required: true, message: 'El cumpleaños es requerido' }]
          })} />
          <span className="error-span">{(errors = getFieldError('birth')) ? errors.join(',') : null}</span>
        </FieldContainer> */}

        <FieldContainer>
          <label>Correo</label>
          <input type="email" {...getFieldProps('email', {
            rules: [
              { required: true, message: 'El correo es requerido' },
              { type: 'email', message: 'El correo no es válido' }
            ]
          })} />
          <span className="error-span">{(errors = getFieldError('email')) ? errors.join(',') : null}</span>
        </FieldContainer>
        <CheckBoxContainer>
          <FieldContainer>
            <label className="checkbox-label-invited">
              <input onClick={() => setTerm(!term)} className="checkbox-confirmation-invited" type="checkbox" {...getFieldProps('term', {
                rules: [
                  { required: true, message: 'Debe aceptar los términos y condiciones' }
                ]
              })} />
              <a target='_blank' href='/terminos-y-condiciones'>
                Aceptar términos y condiciones
            </a>
            </label>
            <span className="error-span">{(errors = getFieldError('term')) ? errors.join(',') : null}</span>
          </FieldContainer>
          <FieldContainer>
            <label className="checkbox-label-invited">
              <input onClick={() => setPriv(!priv)} className="checkbox-confirmation-invited" type="checkbox" {...getFieldProps('prev', {
                rules: [
                  { required: true, message: 'Debe aceptar las políticas de privacidad' }
                ]
              })} />
              <a target='_blank' href='/nota-legal'>
                Aceptar política de privacidad
            </a>
            </label>
            <span className="error-span">{(errors = getFieldError('prev')) ? errors.join(',') : null}</span>
          </FieldContainer>
        </CheckBoxContainer>
      </FormRegisterContainer>
      {true &&
        <ContBtn onClick={submit}>
          <div className="cont">
            <Button>Guardar y continuar</Button>
          </div>
        </ContBtn>
      }
    </div>
  )
}

export default createForm()(FormRegisterInvited)
