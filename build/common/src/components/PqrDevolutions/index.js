import React, { useState, useEffect } from "react";
import { priceFormatter } from "../../helpers";
import PropTypes from "prop-types";
import Select from "react-select";
import moment from "moment";
import { Icon } from "..";

import {
  PqrDevolution,
  PqrHeader,
  PqrQuestionContent,
  SearchContent,
  SearchBox,
  Content,
  QuestionItem,
  DevolutionFilter,
  DevolutionList,
  DevolutionItem,
  DevolutionItemHeader,
  DevolutionItemHeaderItem,
  DevolutionItemContent,
  DevolutionItemContentItem,
  DevolutionItemContentItemLeft,
  DevolutionItemContentItemRight,
  SelectContainer,
  DevolutionItemContentForm,
  DevolutionItemGreeting,
} from "./styles";

const customStyles = {
  control: (provided, state) => ({
    ...provided,
    border: "none",
    background: "transparent",
    textAlign: "center",
    width: "100%",
    minWidth: 120,
    fontSize: 12,
  }),
  option: (provided, state) => ({
    ...provided,
    background: state.isSelected ? "rgb(28, 105, 212)" : "#ffff",
    fontWeight: 900,
    minWidth: 120,
    "&:hover": {
      background: "rgb(28, 105, 212)",
      color: "#ffff",
    },
  }),
  indicatorSeparator: (styles) => ({ ...styles, display: "none" }),
};
const options = [
  { value: "1", label: "Más nuevo" },
  { value: "2", label: "Más Viejo" },
];

function PqrDevolutions({ getDevolutions, orders, onSubmit, goToProduct }) {
  const [lastStep, setLastStep] = useState(false);
  const [returnForm, setReturnForm] = useState(false);
  const [reason, setReason] = useState();
  return (
    <PqrDevolution>
      <PqrHeader>Devoluciones.</PqrHeader>
      {/*       <SearchContent>
        <SearchBox>
          <Icon name="find" width={20} height={20} />
          <input
            type="search"
            placeholder="Devoluciones, quejas, reclamos, etc..."
          />
        </SearchBox>
      </SearchContent> */}
      <Content>
        <DevolutionFilter>
          <SelectContainer>
            <span>Ordenar por</span>
            <Select
              options={options}
              styles={customStyles}
              placeholder="Más nuevo"
            />
          </SelectContainer>
        </DevolutionFilter>
        {!lastStep ? (
          <DevolutionList>
            {orders.length > 0 ? (
              orders.map((item) =>
                item.orderDetails.map((detail, i) => {
                  return (
                    <DevolutionItem key={i}>
                      <DevolutionItemHeader>
                        <DevolutionItemHeaderItem>
                          <p>Fecha de orden</p>
                          <p>
                            {moment(item.updatedAt)
                              .add(1, "day")
                              .format("YYYY-MM-DD")}
                          </p>
                        </DevolutionItemHeaderItem>
                        <DevolutionItemHeaderItem>
                          <p># de orden</p>
                          <p>{item.transactionCode}</p>
                        </DevolutionItemHeaderItem>
                        <DevolutionItemHeaderItem>
                          <p>Total de compra</p>
                          <p> {priceFormatter(detail.total)}</p>
                        </DevolutionItemHeaderItem>
                      </DevolutionItemHeader>
                      <DevolutionItemContent>
                        <DevolutionItemContentItem>
                          <DevolutionItemContentItemLeft>
                            <img
                              src={
                                detail.image ||
                                "https://autogermana.s3.amazonaws.com/no%20-foto.png"
                              }
                              alt={name}
                            />
                            <div className="content-data">
                              <div>
                                <p>{detail.name}</p>
                                <p> {priceFormatter(detail.total)}</p>
                                {/* <p>Accesorios / Exterior</p> */}
                              </div>
                              <div>
                                {/* <p>Compatible con The Z4 2019</p> */}
                                {/* <p>$ {detail.total}</p> */}
                              </div>
                            </div>
                          </DevolutionItemContentItemLeft>
                          <DevolutionItemContentItemRight>
                            <button onClick={() => goToProduct(detail.productId)}>
                              <svg
                                width="24"
                                height="18"
                                viewBox="0 0 24 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M1 9C1 9 5 1 12 1C19 1 23 9 23 9C23 9 19 17 12 17C5 17 1 9 1 9Z"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                                <path
                                  d="M12 12C13.6569 12 15 10.6569 15 9C15 7.34315 13.6569 6 12 6C10.3431 6 9 7.34315 9 9C9 10.6569 10.3431 12 12 12Z"
                                  stroke="white"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                />
                              </svg>
                              Ir a producto
                            </button>
                            <button onClick={() => setReturnForm(returnForm != detail.productId ? detail.productId : '')}>
                              <svg
                                width="24"
                                height="26"
                                viewBox="0 0 24 26"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M0.523361 16.7972L10.7434 20.337C11.0758 19.7796 11.5464 19.3281 12.1046 19.0313C12.6627 18.7345 13.2873 18.6036 13.9109 18.6527L19.3125 1.3695L23.6152 0.959473L23.7666 2.72938L20.5655 3.02437L15.5199 19.2043C16.0375 19.5475 16.4592 20.0291 16.7421 20.6C17.0249 21.1708 17.1587 21.8104 17.1298 22.4535C17.1009 23.0966 16.9103 23.72 16.5775 24.2602C16.2447 24.8004 15.7816 25.2379 15.2355 25.5282C14.6894 25.8184 14.08 25.9509 13.4693 25.9121C12.8587 25.8734 12.2687 25.6647 11.7598 25.3075C11.2508 24.9503 10.8411 24.4574 10.5724 23.879C10.3037 23.3006 10.1857 22.6576 10.2305 22.0155L0.0103951 18.4757L0.523361 16.7972ZM12.0749 23.1188C12.2045 23.3949 12.3969 23.633 12.6351 23.8119C12.8733 23.9908 13.1498 24.105 13.4401 24.1442C13.7304 24.1833 14.0253 24.1464 14.2987 24.0365C14.5721 23.9267 14.8155 23.7474 15.0071 23.5146C15.1987 23.2819 15.3326 23.0028 15.3969 22.7024C15.4612 22.402 15.4539 22.0894 15.3756 21.7927C15.2974 21.496 15.1506 21.2242 14.9483 21.0016C14.7461 20.779 14.4947 20.6125 14.2165 20.517C13.9953 20.4397 13.7618 20.4092 13.5294 20.4274C13.297 20.4457 13.0704 20.5122 12.8626 20.6232C12.6543 20.7336 12.4687 20.8862 12.3165 21.0722C12.1643 21.2582 12.0485 21.4739 11.9756 21.7071C11.9027 21.9403 11.8742 22.1862 11.8917 22.431C11.9092 22.6758 11.9724 22.9145 12.0777 23.1335L12.0749 23.1188Z"
                                  fill="#1C69D4"
                                />
                                <path
                                  d="M0.749982 14.4936L4.25385 3.28418L15.2588 7.09834L11.7549 18.3078L0.749982 14.4936ZM5.32743 5.52017L2.87473 13.3638L10.6841 16.0718L13.1368 8.22518L5.32743 5.52017Z"
                                  fill="#1C69D4"
                                />
                              </svg>
                              Devolución
                            </button>
                          </DevolutionItemContentItemRight>
                        </DevolutionItemContentItem>
                      </DevolutionItemContent>
                      {returnForm == detail.productId && (
                        <DevolutionItemContentForm>
                          <form style={{
                            display: 'flex',
                            flexDirection: 'column', maxWidth: '600px'
                          }} onSubmit={(event) => { event.preventDefault(); onSubmit({ orderId: detail.orderId, sku: detail.sku, reason: reason }); setLastStep(!lastStep); window.scrollTo(0, 100); }}>
                            <p>
                              Lamentamos la molestia causada, por favor
                              indícanos la razón de devolución
                            </p>
                            <label>Razón de devolución</label>
                            <textarea
                              name="textarea"
                              rows="10"
                              cols="50"
                              onChange={(e) => setReason(e.target.value)}
                              required
                            ></textarea>
                            <button type="submit" >
                              Enviar
                            </button>
                          </form>
                        </DevolutionItemContentForm>
                      )
                      }
                    </DevolutionItem>
                  );
                })
              )
            ) : (
                <h3 className="no-petitions">No hay peticiones pendientes.</h3>
              )}
            {/*  {!returnForm && */}
          </DevolutionList>
        ) : (
            <DevolutionItemGreeting>
              <svg
                width="136"
                height="106"
                viewBox="0 0 136 106"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M120.5 3H15.5C8.59644 3 3 8.59644 3 15.5V90.5C3 97.4036 8.59644 103 15.5 103H120.5C127.404 103 133 97.4036 133 90.5V15.5C133 8.59644 127.404 3 120.5 3Z"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M23 23L68 58L113 23"
                  stroke="black"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <p>
                Gracias por tu tiempo, te informaremos los pasos a seguir por correo electrónico.
            </p>
            </DevolutionItemGreeting>
          )}
      </Content>
    </PqrDevolution >
  );
}

export default PqrDevolutions;
