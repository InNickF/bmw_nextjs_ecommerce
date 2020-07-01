import React, { useState, useEffect } from "react";
import { withTheme } from "styled-components";

import {
  Form,
  FieldContainer,
  FormContainer,
  Row,
  Container,
  ShipContainer,
  CartContainer,
  BtnContainer,
  ShipItem,
  Content,
  ContentPay,
  TitleHeader,
  ContentPaySend,
  ContentPayPaid,
  AddresItemContainer,
  BackBtn,
} from "./styles";
import { priceFormatter } from "../../helpers";
import { RegisterAddress, LoginModal, RegisterModal } from "../../containers";

import Select from "react-select";
import InPartLoading from "../InPartLoading";
import Icon from "../Icon";
import { Button, Modal } from "../";
import FormRegisterInvited from "./FormRegisterInvited";
import { useSelector } from "react-redux";
import { TotalMobile } from "../CartItem/styles";

function ShipCartStep({
  step,
  action,
  addresses,
  shipping,
  setOrderAddress,
  addressSelected,
  isLoading,
  isLogged,
  total,
  back,
}) {
  const { signupInvitedSuccess, setSignupInvitedSuccess } = useSelector(
    (state) => ({
      signupInvitedSuccess: state.get("cart").get("signupInvitedSuccess"),
      setSignupInvitedSuccess: (data) =>
        state.get("cart").set("signupInvitedSuccess", data),
    })
  );
  const [actualStep, setStep] = useState(step);
  const [actualAddress, setAddress] = useState(0);
  const [selectedAddress, userSelectedAddress] = useState(false);

  useEffect(() => {
    if (signupInvitedSuccess) {
      setSignupInvitedSuccess(false);
      window.scrollTo(0, 0);
    }
  }, [signupInvitedSuccess]);

  //Select default --- Bug
  /*  if (addresses?.length > 0 && !addressSelected) {
     setOrderAddress(addresses[0].id)
   } */

  useEffect(() => {
    if (!addressSelected && addresses.length > 0 && isLoading) {
      setOrderAddress(addresses[0].id);
      setAddress(addresses[0].id);
    }

    if (
      addresses.length >= 1 &&
      addressSelected !== addresses[addresses.length - 1].id &&
      !isLoading &&
      !selectedAddress
    ) {
      setOrderAddress(addresses[addresses.length - 1].id);
      setAddress(addresses[addresses.length - 1].id);
    }
  }, [addresses]);
  return (
    <Container>
      <BackBtn onClick={() => setStep(0)}>
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 14C3.12941 14 0 10.8706 0 7.00001C0 3.12941 3.12941 0 7 0C10.8706 0 14 3.12941 14 7.00001C14 10.8706 10.8706 14 7 14ZM7 0.82353C3.58235 0.82353 0.82353 3.58236 0.82353 7.00001C0.82353 10.4177 3.58235 13.1765 7 13.1765C10.4177 13.1765 13.1765 10.4177 13.1765 7.00001C13.1765 3.58236 10.4177 0.82353 7 0.82353Z"
            fill="black"
          />
          <path
            d="M7.12351 10.9941L3.12939 6.99998L7.12351 3.00586L7.69999 3.58233L4.28234 6.99998L7.69999 10.4176L7.12351 10.9941Z"
            fill="black"
          />
          <path
            d="M3.70605 6.58789H10.7061V7.41142H3.70605V6.58789Z"
            fill="black"
          />
        </svg>
        <span
          style={{
            fontSize: "16px",
            marginLeft: "20px",
            fontWeight: "bold",
          }}
        >
          Seguir navegando
        </span>
      </BackBtn>
      {<TotalMobile>Total: {priceFormatter(total)}</TotalMobile>}
      {!isLogged ? (
        <>
          <FormContainer>
            <h3>1. Datos básicos</h3>
            <FormRegisterInvited />
          </FormContainer>
        </>
      ) : actualStep === 1 || addresses?.length <= 0 ? (
        <Content>
          <ContentPay>
            <TitleHeader>
              <h3>{isLogged ? "1" : "2"}. Envío.</h3>
              {addresses.length > 0 && (
                <button onClick={() => setStep(2)}>Volver</button>
              )}
            </TitleHeader>
            <RegisterAddress setStep={setStep} />
          </ContentPay>
          <FormContainer>
            <h3>{isLogged ? "2" : "3"}. Pago.</h3>
          </FormContainer>
        </Content>
      ) : (
            <Content>
              <>
                <ContentPay>
                  <TitleHeader>
                    <h3>{isLogged ? "1" : "2"}. Envío.</h3>
                    <button onClick={() => setStep(1)}>Editar</button>
                  </TitleHeader>
                  {isLogged ? (
                    <ContentPaySend>
                      <div>
                        <h2 style={{ fontWeight: "bold" }}>Dirección de envío</h2>
                        {addresses.map((data) => (
                          <AddresItemContainer
                            selected={addressSelected === data.id}
                            onClick={() => {
                              setOrderAddress(data.id);
                              userSelectedAddress(true);
                            }}
                          >
                            <div className="square-checked">
                              <div className="square-check" />
                            </div>
                            <p>{data.value}</p>
                            <p className="difuminated">{data.city.name}</p>
                            <p className="difuminated">
                              {data.phone != 0 && data.phone}
                            </p>
                          </AddresItemContainer>
                        ))}
                        <InPartLoading isLoading={isLoading} canAbsolute />
                      </div>
                      <div>
                        {shipping > 0 && (
                          <>
                            <h2 className="metodo" style={{ fontWeight: "bold" }}>
                              Costo de envío
                        </h2>
                            <div>
                              {/* <p>Standard</p> */}{" "}
                              <p>{priceFormatter(shipping)}</p>
                            </div>
                          </>
                        )}
                        {/* <p><strong>Lo recibes el Martes, 1 de Diciembre</strong></p> */}
                      </div>
                    </ContentPaySend>
                  ) : (
                      <RegisterModal noModalRegister={true} setStep={setStep} />
                    )}
                </ContentPay>
                <ContentPay>
                  <TitleHeader>
                    <h3>
                      {isLogged ? "2" : "3"}. Pago
                  <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z"
                          fill="#DCDCDC"
                        />
                      </svg>
                    </h3>
                  </TitleHeader>
                  <ContentPayPaid>
                    <img
                      src={
                        "https://i.imgur.com/wCphgWD.png" ||
                        "https://autogermana.s3.amazonaws.com/no%20-foto.png"
                      }
                      alt="Mercado Pago"
                    />
                    <button onClick={action}>
                      <svg
                        width="16"
                        height="21"
                        viewBox="0 0 16 21"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 7H13V5C13 2.24 10.76 0 8 0C5.24 0 3 2.24 3 5V7H2C0.9 7 0 7.9 0 9V19C0 20.1 0.9 21 2 21H14C15.1 21 16 20.1 16 19V9C16 7.9 15.1 7 14 7ZM8 16C6.9 16 6 15.1 6 14C6 12.9 6.9 12 8 12C9.1 12 10 12.9 10 14C10 15.1 9.1 16 8 16ZM11.1 7H4.9V5C4.9 3.29 6.29 1.9 8 1.9C9.71 1.9 11.1 3.29 11.1 5V7Z"
                          fill="white"
                        />
                      </svg>
                  Pagar
                </button>
                    <p>
                      Al hacer clic en pagar está usted confirmando la compra y que
                      leyó los términos y condiciones, términos de privacidad, y
                      términos de retornos
                </p>
                  </ContentPayPaid>
                </ContentPay>
              </>
            </Content>
          )}
    </Container>
  );
}

export default withTheme(ShipCartStep);
