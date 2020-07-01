import React from 'react'
import PropTypes from 'prop-types'
import { reduxForm, Field } from 'redux-form/immutable'
import { withState } from 'recompose'

import {
  AlignWrapper,
  PageTitle,
  Button,
  ReduxFormInputFile,
  ReduxFormWysiwyg
} from '../'

import {
  Container,
  Form,
  Field as FieldContainer,
  MediaInputs,
  FieldFile
} from './styles'

function PostCreateForm ({
  categories,
  handleSubmit,
  createPost,
  videoVisible,
  toggleVideoVisible
}) {
  return (
    <Container>
      <AlignWrapper align='center'>
        <PageTitle text='Crear entrada de Blog' />
      </AlignWrapper>
      <Form onSubmit={handleSubmit(createPost)} encType='multipart/form-data'>
        <FieldContainer>
          <span>Elegir categoría</span>
          <Field name='articleCategoryId' component='select' required>
            <option value=''>Articulos y noticias</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </Field>
        </FieldContainer>
        <FieldContainer>
          <span>Titulo de la entrada</span>
          <Field
            name='name'
            component='input'
            placeholder='Ingresar titulo de entrada'
          />
        </FieldContainer>
        <FieldContainer className='editor'>
          <span>Contenido</span>
          <div>
            <Field name='body' component={ReduxFormWysiwyg} />
          </div>
        </FieldContainer>
        <MediaInputs>
          <FieldFile>
            <img src='/static/images/icons/picture.svg' />
            <Field name='image' component={ReduxFormInputFile} />
          </FieldFile>
          <FieldFile onClick={() => toggleVideoVisible(!videoVisible)}>
            <img src='/static/images/icons/video-camera.svg' />
          </FieldFile>
        </MediaInputs>
        {videoVisible && (
          <FieldContainer>
            <span>URL Video</span>
            <Field
              name='video'
              component='input'
              placeholder='https://www.youtube.com/watch?v=RPuVDkC0fy8'
            />
          </FieldContainer>
        )}
        <AlignWrapper align='center'>
          <Button>Publicar</Button>
        </AlignWrapper>
      </Form>
    </Container>
  )
}

PostCreateForm.propTypes = {
  categories: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  toggleVideoVisible: PropTypes.func.isRequired,
  videoVisible: PropTypes.bool.isRequired
}

const toggleInput = withState('videoVisible', 'toggleVideoVisible', false)

const createReduxForm = reduxForm({ form: 'postCreate' })

export default createReduxForm(toggleInput(PostCreateForm))
