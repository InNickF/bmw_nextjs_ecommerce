import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  Container,
  TopContent,
  Wrapper,
  Nav,
  SocialIcons,
  BottomContent,
  BottomLinks,
  Copyright,
  ContactContent,
  SecureText,
  BtnNotification,
  SeparatorFooter,
} from "./styles";
import { Link } from "../../common/src/routes/bmw";
import { ProductBtnBuy } from "../../common/src/components/CartResume/styles";
import { Icon } from "../../common/components";
import Collapsible from "react-collapsible";
import FacebookCircular from "../../common/src/components/Icon/icons/facebook-circular";
import TwitterCircular from "../../common/src/components/Icon/icons/twitter-circular";
import InstagramCircular from "../../common/src/components/Icon/icons/instagram-circular";
import { user as userActions } from '../../common/redux'

const year = new Date().getFullYear();
const { createSuscription } = userActions.actions

function Footer(props) {
  const dispatch = useDispatch()
  const { bgUrl } = props;

  const sendSuscription = useSelector(state => state.get("user").get('sendSuscription'))
  const [emailContact, setEmailContact] = useState();

  useEffect(() => {
    if (sendSuscription) {
      setEmailContact()
      document.getElementById("emailContactWeb").value = ""
      document.getElementById("emailContactMobile").value = ""
      document.getElementById("termsWeb").checked = false
      document.getElementById("termsMobile").checked = false
    }
  }, [sendSuscription])

  const sendContact = async (e) => {
    e.preventDefault();
    dispatch(createSuscription(emailContact))
  }

  return (
    <Container bgUrl={bgUrl}>
      <SeparatorFooter />
      <Wrapper>
        <BottomLinks className="flex-responsive">
          <form
            className="newsletter show-responsive"
            onSubmit={sendContact}
          >
            <h2>Permanezcamos en contacto.</h2>
            <p>
              Te informaremos sobre nuevos productos, promociones, descuentos,
              eventos y noticias relacionadas a tus intereses
            </p>
            <input
              id="emailContactMobile"
              pattern={`/^(([^<>()\[\]\\.,;:\s@"]<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`}
              required
              type="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmailContact(e.target.value)}
            />
            <div className="check-terms">
              <label className="checkbox-button">
                <input
                  type="checkbox"
                  className="checkbox-button__input"
                  id="termsMobile"
                  name="acepto"
                  required
                />
                <span className="checkbox-button__control"></span>
                <span className="checkbox-button__label">
                  He leído los términos y condiciones y politicas de privacidad
                </span>
              </label>
            </div>
            <BtnNotification type="submit">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6556 18.9147L14.6543 18.914C14.6589 19.1795 14.6106 19.4433 14.5122 19.6899C14.4137 19.9366 14.2672 20.1612 14.081 20.3506C13.8949 20.54 13.6729 20.6904 13.428 20.7931C13.1831 20.8958 12.9201 20.9487 12.6546 20.9487C12.389 20.9487 12.1261 20.8958 11.8812 20.7931C11.6363 20.6904 11.4143 20.54 11.2281 20.3506C11.042 20.1612 10.8954 19.9366 10.797 19.6899C10.6986 19.4433 10.6503 19.1795 10.6549 18.914L10.6556 18.9147ZM20.6901 16.4094L20.6894 17.4085H4.70882L4.70811 16.4094L5.59836 15.7412C6.20788 15.2844 6.7071 14.4599 6.70639 13.9119L6.7071 8.41837C6.7221 6.83885 7.36008 5.32912 8.4823 4.2175C9.60453 3.10588 11.1202 2.48226 12.6998 2.48226C14.2794 2.48226 15.7951 3.10588 16.9174 4.2175C18.0396 5.32912 18.6776 6.83885 18.6926 8.41837L18.6933 13.9133C18.6933 14.462 19.1918 15.2858 19.8013 15.7426L20.6901 16.4094Z"
                  fill="white"
                />
              </svg>
              ¡Notifíquenme por correo!
            </BtnNotification>
          </form>
        </BottomLinks>
        <TopContent>
          <Nav>
            <ContactContent>
              <Collapsible
                trigger="Contáctanos"
                open={true}
                className="show-responsive"
                openedClassName="show-responsive"
              >
                <a
                  className="infoWithIcon btn-whatsapp"
                  href="https://wa.me/573202572769"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95893 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1536C2.63036 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1214 3.0375 18.9857 4.90714C20.85 6.77679 21.9964 9.25714 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7732 14.7375C13.6018 14.9357 13.425 14.9625 13.1304 14.8125C11.3839 13.9393 10.2375 13.2536 9.08571 11.2768C8.78036 10.7518 9.39107 10.7893 9.95893 9.65357C10.0554 9.45536 10.0071 9.28393 9.93214 9.13393C9.85714 8.98393 9.2625 7.52143 9.01607 6.92679C8.775 6.34821 8.52857 6.42857 8.34643 6.41786C8.175 6.40714 7.97679 6.40714 7.77857 6.40714C7.58036 6.40714 7.25893 6.48214 6.98571 6.77679C6.7125 7.07679 5.94643 7.79464 5.94643 9.25714C5.94643 10.7196 7.0125 12.1339 7.15714 12.3321C7.30714 12.5304 9.25179 15.5304 12.2357 16.8214C14.1214 17.6357 14.8607 17.7054 15.8036 17.5661C16.3768 17.4804 17.5607 16.8482 17.8071 16.1518C18.0536 15.4554 18.0536 14.8607 17.9786 14.7375C17.9089 14.6036 17.7107 14.5286 17.4161 14.3839Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <p>¿Alguna pregunta?</p>
                    <span>Escríbenos</span>
                  </div>
                </a>
                <a
                  className="infoWithIcon"
                  href="mailto:soporteenlinea@autogermana.com.co"
                >
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0H0.00999999L0 16H20V0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z"
                      fill="white"
                    />
                  </svg>
                  <span>soporteenlinea@autogermana.com.co</span>
                </a>
              </Collapsible>
              <div className="hide-responsive">
                <h5 className="ContactContent__contact">Contáctanos</h5>
                <a
                  className="infoWithIcon btn-whatsapp"
                  href="https://wa.me/573202572769"
                  target="_blank"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.4054 3.4875C18.1607 1.2375 15.1714 0 11.9946 0C5.4375 0 0.101786 5.33571 0.101786 11.8929C0.101786 13.9875 0.648214 16.0339 1.6875 17.8393L0 24L6.30536 22.3446C8.04107 23.2929 9.99643 23.7911 11.9893 23.7911H11.9946C18.5464 23.7911 24 18.4554 24 11.8982C24 8.72143 22.65 5.7375 20.4054 3.4875ZM11.9946 21.7875C10.2161 21.7875 8.475 21.3107 6.95893 20.4107L6.6 20.1964L2.86071 21.1768L3.85714 17.5286L3.62143 17.1536C2.63036 15.5786 2.11071 13.7625 2.11071 11.8929C2.11071 6.44464 6.54643 2.00893 12 2.00893C14.6411 2.00893 17.1214 3.0375 18.9857 4.90714C20.85 6.77679 21.9964 9.25714 21.9911 11.8982C21.9911 17.3518 17.4429 21.7875 11.9946 21.7875ZM17.4161 14.3839C17.1214 14.2339 15.6589 13.5161 15.3857 13.4196C15.1125 13.3179 14.9143 13.2696 14.7161 13.5696C14.5179 13.8696 13.95 14.5339 13.7732 14.7375C13.6018 14.9357 13.425 14.9625 13.1304 14.8125C11.3839 13.9393 10.2375 13.2536 9.08571 11.2768C8.78036 10.7518 9.39107 10.7893 9.95893 9.65357C10.0554 9.45536 10.0071 9.28393 9.93214 9.13393C9.85714 8.98393 9.2625 7.52143 9.01607 6.92679C8.775 6.34821 8.52857 6.42857 8.34643 6.41786C8.175 6.40714 7.97679 6.40714 7.77857 6.40714C7.58036 6.40714 7.25893 6.48214 6.98571 6.77679C6.7125 7.07679 5.94643 7.79464 5.94643 9.25714C5.94643 10.7196 7.0125 12.1339 7.15714 12.3321C7.30714 12.5304 9.25179 15.5304 12.2357 16.8214C14.1214 17.6357 14.8607 17.7054 15.8036 17.5661C16.3768 17.4804 17.5607 16.8482 17.8071 16.1518C18.0536 15.4554 18.0536 14.8607 17.9786 14.7375C17.9089 14.6036 17.7107 14.5286 17.4161 14.3839Z"
                      fill="white"
                    />
                  </svg>
                  <div>
                    <p>¿Alguna pregunta?</p>
                    <span>Escríbenos</span>
                  </div>
                </a>
                <a
                  className="infoWithIcon"
                  href="mailto:soporteenlinea@autogermana.com.co"
                >
                  <svg
                    width="20"
                    height="16"
                    viewBox="0 0 20 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20 0H0.00999999L0 16H20V0ZM18 14H2V4L10 9L18 4V14ZM10 7L2 2H18L10 7Z"
                      fill="white"
                    />
                  </svg>
                  <span>soporteenlinea@autogermana.com.co</span>
                </a>
              </div>
            </ContactContent>
          </Nav>
          <BottomContent>
            <div>
              <SocialIcons>
                <a
                  href={
                    process.env.BRAND_ID == 3
                      ? "https://www.facebook.com/BMW.Colombia"
                      : process.env.BRAND_ID == 2
                        ? "https://www.facebook.com/minicolombia"
                        : "https://www.facebook.com/BMWMotorradColombia/"
                  }
                  target="_blank"
                >
                  <FacebookCircular width={30} height={30} fill="#fff" />
                </a>
                <a
                  href={
                    process.env.BRAND_ID == 3
                      ? "https://twitter.com/bmwcolombia"
                      : process.env.BRAND_ID == 2
                        ? "https://twitter.com/minicolombia"
                        : "https://twitter.com/bmwmotorrad_co?lang=es"
                  }
                  target="_blank"
                >
                  <TwitterCircular width={30} height={30} fill="#fff" />
                </a>
                <a
                  href={
                    process.env.BRAND_ID == 3
                      ? "https://www.instagram.com/bmw.colombia"
                      : process.env.BRAND_ID == 2
                        ? "https://www.instagram.com/minicolombia"
                        : "https://www.instagram.com/bmwmotorrad_co/?hl=es-la"
                  }
                  target="_blank"
                >
                  <InstagramCircular width={30} height={30} fill="#fff" />
                </a>
              </SocialIcons>
            </div>
          </BottomContent>
        </TopContent>
        <BottomLinks>
          <Collapsible
            trigger="Autogermana"
            className="show-responsive"
            openedClassName="show-responsive"
          >
            <Link route="terms">
              <a>Términos y condiciones</a>
            </Link>
            <Link route="privacy">
              <a>Política de privacidad</a>
            </Link>
            <Link route="politicas-de-cambio">
              <a>Cambios y garantías </a>
            </Link>
            <Link route="pqr">
              <a>Peticiones, quejas y reclamos</a>
            </Link>
            {process.env.BRAND_ID == 3 &&
              <Link route="//bmw.com.co/es/all-models.html">
                <a>Configura tu BMW</a>
              </Link>
            }
            <Link route=
              {
                process.env.BRAND_ID == 3
                  ? "//bmw.com.co/es/fastlane/dealer-locator.html#/dlo/CO/es/BMW_BMWM"
                  : process.env.BRAND_ID == 2
                    ? "//mini.com.co/es_CO/home/concesionarios.html"
                    : "//colombia.bmw-motorrad.co/es/home.html#/filter-todo"
              }
            >
              <a>Ubicaciones</a>
            </Link>
          </Collapsible>
          <Collapsible
            trigger={
              parseInt(process.env.BRAND_ID) === 1
                ? "MOTORRAD"
                : parseInt(process.env.BRAND_ID) === 2
                  ? "MINI"
                  : "BMW"
            }
            className="show-responsive"
            openedClassName="show-responsive"
          >
            <Link
              route={
                process.env.BRAND_ID == 3
                  ? "//bmw.com.co/es/fastlane/dealer-locator.html#/dlo/CO/es/BMW_BMWM"
                  : process.env.BRAND_ID == 2
                    ? "//mini.com.co/es_CO/home.html"
                    : "//colombia.bmw-motorrad.co/es/home.html"
              }
            >
              <a>
                Red Oficial{" "}
                {process.env.BRAND_ID == 3
                  ? "BMW"
                  : process.env.BRAND_ID == 2
                    ? "MINI"
                    : "BMW MOTORRAD"}
              </a>
            </Link>
            {process.env.BRAND_ID != 1 &&
              <>
                <Link route="products" params={{ c: "accesorios-para-carros", level: 1 }}>
                  <a>Accesorios para carros </a>
                </Link>
                <Link route="products" params={{ c: "lifestyle", level: 1 }}>
                  <a>Lifestyle </a>
                </Link>
              </>
            }
            {process.env.BRAND_ID == 1 &&
              <>
                <Link route="products" params={{ c: "accesorios-para-motos", level: 1 }}>
                  <a>Accesorios para motos </a>
                </Link>
                <Link route="products" params={{ c: "Style", level: 1 }}>
                  <a>Style </a>
                </Link>
                <Link route="products" params={{ c: "rider-equipment", level: 1 }}>
                  <a>Rider Equipment </a>
                </Link>
              </>
            }
            <Link route="blog">
              <a>Novedades</a>
            </Link>
          </Collapsible>

          <div className="footer-list hide-responsive">
            <h2>Autogermana</h2>
            <Link route="terms">
              <a>Términos y condiciones</a>
            </Link>
            <Link route="privacy">
              <a>Política de privacidad </a>
            </Link>
            <Link route="change-policies">
              <a>Cambios y garantías </a>
            </Link>
            <Link route="pqr">
              <a>Peticiones, quejas y reclamos</a>
            </Link>
            {process.env.BRAND_ID == 3 &&
              <Link route="//bmw.com.co/es/all-models.html">
                <a>Configura tu BMW</a>
              </Link>
            }
            <Link route=
              {
                process.env.BRAND_ID == 3
                  ? "//bmw.com.co/es/fastlane/dealer-locator.html#/dlo/CO/es/BMW_BMWM"
                  : process.env.BRAND_ID == 2
                    ? "//mini.com.co/es_CO/home/concesionarios.html"
                    : "//colombia.bmw-motorrad.co/es/home.html#/filter-todo"
              }>
              <a>Ubicaciones</a>
            </Link>
          </div>
          <div className="footer-list hide-responsive">
            <h2>
              {process.env.BRAND_ID == 3
                ? "BMW"
                : process.env.BRAND_ID == 2
                  ? "MINI"
                  : "BMW MOTORRAD"}
            </h2>
            <Link
              route={process.env.BRAND_ID == 3
                ? "//bmw.com.co/es/fastlane/dealer-locator.html#/dlo/CO/es/BMW_BMWM"
                : process.env.BRAND_ID == 2
                  ? "//mini.com.co/es_CO/home.html"
                  : "BMW MOTORRAD"}
            >
              <a>
                Red Oficial{" "}
                {process.env.BRAND_ID == 3
                  ? "BMW"
                  : process.env.BRAND_ID == 2
                    ? "MINI"
                    : "BMW MOTORRAD"}
              </a>
            </Link>
            {process.env.BRAND_ID != 1 &&
              <>
                <Link route="products" params={{ c: "accesorios-para-carros", level: 1 }}>
                  <a>Accesorios para carros </a>
                </Link>
                <Link route="products" params={{ c: "lifestyle", level: 1 }}>
                  <a>Lifestyle </a>
                </Link>
              </>
            }
            {process.env.BRAND_ID == 1 &&
              <>
                <Link route="products" params={{ c: "accesorios-para-motos", level: 1 }}>
                  <a>Accesorios para motos </a>
                </Link>
                <Link route="products" params={{ c: "Style", level: 1 }}>
                  <a>Style </a>
                </Link>
                <Link route="products" params={{ c: "rider-equipment", level: 1 }}>
                  <a>Rider Equipment </a>
                </Link>
              </>
            }
            <Link route="blog">
              <a>Novedades</a>
            </Link>
          </div>
          <form
            className="newsletter hide-responsive"
            onSubmit={sendContact}
          >
            <h2>Permanezcamos en contacto.</h2>
            <p>
              Te informaremos sobre nuevos productos, promociones, descuentos,
              eventos y noticias relacionadas a tus intereses
            </p>
            <input
              id="emailContactWeb"
              pattern={`/^(([^<>()\[\]\\.,;:\s@"]<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\.[0-9]{1, 3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/`}
              required
              type="email"
              placeholder="Correo electrónico"
              onChange={(e) => setEmailContact(e.target.value)}
            />
            <div className="check-terms">
              <label className="checkbox-button">
                <input
                  type="checkbox"
                  className="checkbox-button__input"
                  id="termsWeb"
                  name="acepto"
                  required
                />
                <span className="checkbox-button__control"></span>
                <span className="checkbox-button__label">
                  He leído los términos y condiciones y politicas de privacidad
                </span>
              </label>
            </div>
            <BtnNotification type="submit">
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.6556 18.9147L14.6543 18.914C14.6589 19.1795 14.6106 19.4433 14.5122 19.6899C14.4137 19.9366 14.2672 20.1612 14.081 20.3506C13.8949 20.54 13.6729 20.6904 13.428 20.7931C13.1831 20.8958 12.9201 20.9487 12.6546 20.9487C12.389 20.9487 12.1261 20.8958 11.8812 20.7931C11.6363 20.6904 11.4143 20.54 11.2281 20.3506C11.042 20.1612 10.8954 19.9366 10.797 19.6899C10.6986 19.4433 10.6503 19.1795 10.6549 18.914L10.6556 18.9147ZM20.6901 16.4094L20.6894 17.4085H4.70882L4.70811 16.4094L5.59836 15.7412C6.20788 15.2844 6.7071 14.4599 6.70639 13.9119L6.7071 8.41837C6.7221 6.83885 7.36008 5.32912 8.4823 4.2175C9.60453 3.10588 11.1202 2.48226 12.6998 2.48226C14.2794 2.48226 15.7951 3.10588 16.9174 4.2175C18.0396 5.32912 18.6776 6.83885 18.6926 8.41837L18.6933 13.9133C18.6933 14.462 19.1918 15.2858 19.8013 15.7426L20.6901 16.4094Z"
                  fill="white"
                />
              </svg>
              ¡Notifíquenme por correo!
            </BtnNotification>
          </form>
        </BottomLinks>
        <Copyright>Copyright © {year} Autogermana</Copyright>
        <SecureText>¿Certificados de seguridad?</SecureText>
      </Wrapper>
    </Container >
  );
}

export default Footer;
