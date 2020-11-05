import React from "react";
import PropTypes from "prop-types";
import { reduxForm, Field } from "redux-form/immutable";

import { Button, Icon, InPartLoading } from "../../components";
import request from "../../helpers/request";

import { InputSimple, SelectSimple } from "../../fields";

import {
  Container,
  UserImage,
  ContentData,
  RowLine,
  TitleHeader,
} from "./styles";

import withStore from "./store";
import { Link } from "../../../../common/src/routes/bmw";

const validate = (values) => {
  const errors = {};

  if (!values.get("firstName")) {
    errors.firstName = "El nombre es obligatorio";
  } else if (
    values.get("firstName") &&
    !/^([A-Za-zÁÉÍÓÚñáéíóúÑ'\s]){3,20}$/.test(values.get("firstName"))
  ) {
    errors.firstName = "Únicamente letras";
  }

  if (!values.get("lastName")) {
    errors.lastName = "Apellido obligatorio";
  } else if (
    values.get("lastName") &&
    !/^([A-Za-zÁÉÍÓÚñáéíóúÑ'\s]){3,20}$/.test(values.get("lastName"))
  ) {
    errors.lastName = "Únicamente letras";
  }
  if (!values.get("phone")) {
    errors.phone = "Teléfono obligatorio";
  }
  /*   if (!values.get('birth')) {
      errors.birth = 'La fecha de nacimiento es obligatoria'
    } */
  if (!values.get("email")) {
    errors.email = "El correo es obligatorio";
  } else if (
    values.get("email") &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get("email"))
  ) {
    errors.email = "Correo inválido";
  }

  if (!values.get("identification")) {
    errors.identification = "Identificación obligatoria";
  } else if (
    values.get("identification") &&
    !/^\d{6,20}$/.test(values.get("identification"))
  ) {
    errors.identification =
      "Únicamente números, mínimo 6 y máximo 20 caracteres";
  }

  if (!values.get("taxPayer")) {
    errors.taxPayer = "El tipo de contribuyente es obligatorio";
  }

  if (!values.get("docType")) {
    errors.docType = "El tipo de documento es obligatorio";
  }

  return errors;
};

const warn = (values) => {
  // IMPORTANT: values is an Immutable.Map here!
  const errors = {};

  if (
    values.get("firstName") &&
    !/^([A-Za-zÁÉÍÓÚñáéíóúÑ'\s]){3,20}$/.test(values.get("firstName"))
  ) {
    errors.firstName = "Únicamente letras";
  }

  if (
    values.get("lastName") &&
    !/^([A-Za-zÁÉÍÓÚñáéíóúÑ'\s]){3,20}$/.test(values.get("lastName"))
  ) {
    errors.lastName = "Únicamente letras";
  }

  if (
    values.get("email") &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.get("email"))
  ) {
    errors.email = "Correo inválido";
  }

  if (
    values.get("identification") &&
    !/^\d{6,20}$/.test(values.get("identification"))
  ) {
    errors.identification =
      "Únicamente números, mínimo 6 y máximo 20 caracteres";
  }

  if (!values.get("taxPayer")) {
    errors.taxPayer = "El tipo de contribuyente es obligatorio";
  }

  if (!values.get("docType")) {
    errors.docType = "El tipo de documento es obligatorio";
  }
  return errors;
};

const taxPayers = [
  {
    value: 'Persona Natural - No responsable del IVA',
  },
  {
    value: 'Persona Natural - Impuestos sobre las ventas - IVA',
  },
  {
    value: 'Persona Jurídica - Impuestos sobre las ventas - IVA',
  },
]

const docTypes = [
  {
    value: 'Registro Civil',
  },
  {
    value: 'Tarjeta de identidad',
  },
  {
    value: 'Cédula de ciudadanía',
  },
  {
    value: 'Tarjeta de Extranjería',
  },
  {
    value: 'Cédula de Extranjería',
  },
  {
    value: 'NIT',
  },
  {
    value: 'Pasaporte',
  },
  {
    value: 'Documento de Identificación Extranjero',
  },
  {
    value: 'NUIP',
  },
  {
    value: 'NIT de otro país',
  },
]

class ProfileEditData extends React.Component {
  constructor(props) {
    super(props);
    this._handleAvatarUpload = this._handleAvatarUpload.bind(this);
    this.state = {
      percent: 0,
      loading: false,
    };
  }
  async _handleAvatarUpload(event) {
    const file = event.target.files[0];
    if (file && typeof window !== "undefined") {
      this.setState({ loading: true });
      const data = new window.FormData();
      data.append("avatar", file, file.name);
      data.append("userId", this.props.userId);

      const result = await request.post(`/my-users/updateAvatar`, data, {
        onUploadProgress: (ProgressEvent) => {
          this.setState({
            percent: (ProgressEvent.loaded / ProgressEvent.total) * 100,
          });
        },
      });

      this.setState({ loading: false });

      this.props.updateAvatar(result.data.avatar);
    }
  }
  render() {
    const { props } = this;
    return (
      <Container className="user-edit-container">
        <div className="bread-profile">
          <Link route="/">
            <a>Home</a>
          </Link>
          <span>/</span>
          <p>Perfil</p>
        </div>
        <TitleHeader>Editar perfil</TitleHeader>
        <ContentData>
          <UserImage
            className="user-photo"
            image={
              props.avatar ||
              "https://autogermana.s3.amazonaws.com/static/images/photo-placeholder.png"
            }
          >
            <span>
              <svg
                width="13"
                height="13"
                viewBox="0 0 13 13"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.80467 12.138L10 5.94267L7.05733 3L0.862 9.19533C0.776709 9.28073 0.716123 9.38762 0.686667 9.50467L0 13L3.49467 12.3133C3.612 12.284 3.71933 12.2233 3.80467 12.138ZM12 3.94267C12.25 3.69263 12.3904 3.35355 12.3904 3C12.3904 2.64645 12.25 2.30737 12 2.05733L10.9427 1C10.6926 0.75004 10.3536 0.609619 10 0.609619C9.64645 0.609619 9.30737 0.75004 9.05733 1L8 2.05733L10.9427 5L12 3.94267Z"
                  fill="#1C69D4"
                />
              </svg>
              <input type="file" onChange={this._handleAvatarUpload} />
              <InPartLoading canAbsolute isLoading={this.state.loading} />
            </span>
          </UserImage>
          <form
            className="user-data"
            onSubmit={props.handleSubmit(props.handleProfileEdit)}
          >
            <RowLine>
              <Field
                name="firstName"
                component={InputSimple}
                label="Nombres"
                placeholder="Ingresa nombres"
                type="text"
              />
              <Field
                name="lastName"
                component={InputSimple}
                label="Apellidos"
                placeholder="Ingresa apellidos"
                type="text"
              />
            </RowLine>
            <RowLine>
              <Field
                name="phone"
                component={InputSimple}
                label="Teléfono"
                placeholder="Ingresar teléfono"
                type="number"
              />
              <Field
                name="email"
                component={InputSimple}
                label="Correo electrónico"
                placeholder="Ingresar correo electrónico"
                type="email"
              />
            </RowLine>
            <RowLine>
              <div className="document">
                <Field
                  name="docType"
                  disabled
                  component={SelectSimple}
                  label="Tipo de documento"
                >
                  <option value="" disabled selected>
                    Seleccione el tipo de documento
                  </option>
                  {docTypes.map(option => 
                    <option value={option.value}>
                      {option.value}
                    </option>
                  )}
                </Field>
              </div>
              <div>
                <Field
                  name="identification"
                  component={InputSimple}
                  label="Número de documento"
                  placeholder="Ingresar número de documento"
                  type="number"
                />
              </div>
            </RowLine>
            <RowLine>
              <div className="document">
                <Field
                  name="taxPayer"
                  component={SelectSimple}
                  label="Tipo de contribuyente"
                >
                  <option value="" disabled selected>
                    Seleccione el tipo de contribuyente
                  </option>
                  {taxPayers.map(option => 
                    <option value={option.value}>
                      {option.value}
                    </option>
                  )}
                </Field>
              </div>
              <Field
                name="birth"
                component={InputSimple}
                label="Fecha de nacimiento"
                type="date"
              />
            </RowLine>
            <div className="button-container">
              <Button isSubmit>Guardar</Button>
            </div>
          </form>
        </ContentData>
      </Container>
    );
  }
}

ProfileEditData.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleProfileEdit: PropTypes.func.isRequired,
  initialValues: PropTypes.object,
};

ProfileEditData.defaultProps = {
  initialValues: {},
};

const ReduxForm = reduxForm({
  form: "personal-information",
  enableReinitialize: true,
  validate,
  warn,
})(ProfileEditData);

export default withStore(ReduxForm);
