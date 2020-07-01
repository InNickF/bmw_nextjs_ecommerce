import React, { useState } from 'react'

import { Icon } from '../'

import {
  PqrQuestion, PqrHeader, PqrQuestionContent, SearchContent, SearchBox, QuestionContent, QuestionItem
} from './styles'

const dumyQuestionBmw = [
  {
    id: 1,
    question: '¿Cuáles son los canales de atención?',
    description: '',
    items: [
      { id: 1, name: "Chat de pagina" },
      { id: 2, name: "PBX: 6578080" },
      { id: 3, name: "WhatsApp: 320 2572769" },
      { id: 4, name: "Correo electrónico: soporteenlinea@autogermana.com.co" },
    ],
    footer: "",
  },
  {
    id: 2,
    question: '¿Cómo comprar?',
    description: 'Comprar en BMWshop es muy sencillo. Es necesario seguir los siguientes pasos:',
    items: [
      { id: 1, name: "Debe registrarse con un correo electrónico, cuenta de Gmail o su cuenta de Facebook o comprar como usuario invitado." },
      { id: 2, name: "A continuación, va a encontrar un perfil donde puede evidenciar sus datos, sus vehículos, historial de compras y pedidos en curso. Recuerde que es importante diligenciar todos sus datos personales para así realizar compras por este medio." },
      { id: 3, name: "Para buscar el producto que desea comprar, puede navegar a través de las categorías en nuestro menú o utilizar la barra de búsqueda." },
      { id: 4, name: "Una vez haya elegido el producto que desea, seleccionado, color y talla, agréguelo a su bolsa de compra, dando clic en el botón Añadir al carrito." },
      { id: 5, name: "Una vez haya agregado todos los productos que desea comprar, vaya a su bolsa o carrito de compras que se encuentra en la parte superior derecha, allí puede verificar todos los productos que ha seleccionado." },
      { id: 6, name: "También en esta misma pantalla va a poder agregar su dirección para calcular el costo de envío." },
      { id: 7, name: "Para continuar debe dar clic en resumen de compra allí aparecen todos los productos que usted ha agregado, es importante verificar dirección de envío antes de dar clic en Pagar." },
      { id: 8, name: "Al dar clic sobre pagar, la plataforma lo llevará hasta la pasarela de pagos elegida donde podrá realizar el pago por el medio que lo desee: tarjeta de crédito, PSE, efecty o baloto." },
      { id: 9, name: "Una vez aprobado el pago, podrá retornar al sitio donde realizó la compra." },
    ],
    footer: "",
  },
  {
    id: 3,
    question: '¿Cómo puedo revisar compatibilidad de un accesorio con mi vehículo?',
    description: 'En la página web va a encontrar en la búsqueda de accesorios unos donde debe ingresar el año, la serie y el modelo de su vehículo para saber qué accesorios son compatibles. Sino los conoce, puede comunicarse con servicio al cliente por cualquiera de los canales de atención y preguntar por la compatibilidad de su vehículo. Es importante que tenga el número de chasis a la mano para facilitar así la búsqueda.   ',
    items: [],
    footer: "",
  },
  {
    id: 4,
    question: '¿Cuáles son los tiempos de envío?',
    description: 'Los tiempos de envío son:',
    items: [
      { id: 1, name: "Bogotá:  3 días hábiles" },
      { id: 2, name: "Resto del país: 3 a 8 días hábiles" },
    ],
    footer: "Puede haber situaciones que pueden retrasar estos tiempos. En caso de no haberlo recibido, por favor comunicarse con las líneas de atención estipuladas.",
  },
  {
    id: 5,
    question: '¿Puedo cambiar la dirección donde quiero recibir mi producto?',
    description: 'El producto se despachará a la dirección especificada al momento de realizar la compra. En caso de haber ingresado mal o no querer recibirlos en esta dirección, se podrá contactar lo antes posible con soporte en línea de Autogermana y verificar si el pedido aún no ha sido despachado. En caso de haber sido despachado, ya no se podrá realizar cambio. En caso de no haber sido despachado, soporte en línea recibirá la nueva dirección y hará el cambio solo si es en la misma ciudad ingresada en la orden. ',
    items: [],
    footer: "",
  },
  {
    id: 6,
    question: '¿Qué pasa si mi compra no llegó en la fecha que se tenía previsto?',
    description: 'Puede ser por causas externas a Autogermana. En este caso y para recibir más información puede comunicarse a cualquiera de nuestros canales de atención y preguntar sobre el estado de la orden. ',
    items: [],
    footer: "",
  },
  {
    id: 7,
    question: '¿Qué hago si no estaba en el momento de la entrega?',
    description: 'Otra persona autorizada podrá recibir el pedido. La empresa encargada de la distribución y entrega del producto realiza 2 intentos de entrega en su dirección, si finalmente no logra entregarlo, deberá asumir los costos de envío para enviarlos nuevamente.',
    items: [],
    footer: "",
  },
  {
    id: 8,
    question: '¿Qué hago si mi producto no es el que pedí?',
    description: 'Podrá hacer la reclamación de producto errado a través del correo soporteenlinea@autogermana.com.co. Revisar la política de cambios, retractos y garantías la cual podrá encontrar en la parte inferior de la página web donde se especifica el paso a paso y condiciones generales. Incluír enlace aquí de la política',
    items: [],
    footer: "",
  },
  {
    id: 9,
    question: 'Medios de pago: ',
    description: 'Tarjeta de crédito, PSE, Efecty y Baloto.',
    items: [],
    footer: "",
  },
  {
    id: 10,
    question: '¿Puedo utilizar varios medios de pago a la vez en la pagina?',
    description: 'No es posible. A la hora de efectuar el pago de su compra en la pagina web, es necesario suministrar un único medio de pago.',
    items: [],
    footer: "",
  },
  {
    id: 11,
    question: '¿Cómo usar cupones de descuento?',
    description: 'Si tiene un cupón o bono de descuento, debe ingresarlo en el campo que dice código de descuento que se encuentra en el resumen de compra; automáticamente se descontará la cantidad establecida en el valor total de su compra, recuerde escribir correctamente el código del bono, respetando las mayúsculas, minúsculas y números. Revise los términos y condiciones explicitas en el cupón o bono de descuento para saber sobre fechas de vencimiento y valores o porcentajes de descuento.',
    items: [],
    footer: "",
  },
  {
    id: 12,
    question: '¿A quién se contacta para una instalación?',
    description: 'Para la instalación de un producto, debe contactarse con la línea de atención de Autogermana a nivel nacional PBX 6578080 y elegir la opción correspondiente.',
    items: [],
    footer: "",
  },
  {
    id: 13,
    question: '¿Cuánto tiempo tengo para devolver o cambiar mi producto?',
    description: 'Autogermana ofrece a los clientes que adquieran productos por la página web, la posibilidad de devolver los productos de la categoría Lifestyle dentro de los15 días calendario siguientes a la entrega y los de categoría Accesorios y Llantas dentro de los 8 días calendarios siguientes a la entrega Es importante cumplir con las condiciones generales establecidas en la política de cambios, retractos y garantías que se encuentra en la parte inferior de la página web o en el siguiente enlace: ',
    items: [],
    footer: "",
  },
  {
    id: 14,
    question: '¿Puedo solicitar el reembolso de mi pedido?',
    description: 'El reembolso sólo opera para los retractos que se efectúen dentro de los cinco (5) días hábiles siguientes al recibo del producto. Si el retracto cumple con las condiciones establecidas, el reembolso del dinero se realizará a través del mismo medio de pago utilizado en la compra en un plazo de hasta 30 días hábiles.',
    items: [],
    footer: "",
  },
  {
    id: 15,
    question: '¿Si quiero cambiar mi producto por otro y el que quiero cuesta menos, me devuelven el dinero?',
    description: 'Si el cambio de producto es por otro diferente, el cliente recibirá un bono con un saldo a favor por el valor del producto al momento de la compra. Este bono solo podrá ser utilizado una única vez. En caso de adquirir un producto de mayor valor, se debe pagar la diferencia. Si el producto que va a adquirir tiene un menor valor, no se devolverá el excedente. ',
    items: [],
    footer: "",
  },
  {
    id: 16,
    question: '¿Cómo presentar un recurso de PQR?',
    description: 'En la pagina web va a encontrar un formulario en la parte inferior (Incluír enlace aquí de las PQR), que podrá ser diligenciado y se radicará la PQR. La respuesta le llegará al correo electrónico indicado.',
    items: [],
    footer: "",
  },

];
const dumyQuestionMini = [
  {
    id: 1,
    question: '¿Cuáles son los canales de atención?',
    description: '',
    items: [
      { id: 1, name: "Chat de pagina" },
      { id: 2, name: "PBX: 6578080" },
      { id: 3, name: "WhatsApp: 320 2572769" },
      { id: 4, name: "Correo electrónico: soporteenlinea@autogermana.com.co" },
    ],
    footer: "",
  },
  {
    id: 2,
    question: '¿Cómo comprar?',
    description: 'Comprar en MINIshop es muy sencillo. Es necesario seguir los siguientes pasos:',
    items: [
      { id: 1, name: "Debe registrarse con un correo electrónico, cuenta de Gmail o su cuenta de Facebook o comprar como usuario invitado." },
      { id: 2, name: "A continuación, va a encontrar un perfil donde puede evidenciar sus datos, sus vehículos, historial de compras y pedidos en curso. Recuerde que es importante diligenciar todos sus datos personales para así realizar compras por este medio." },
      { id: 3, name: "Para buscar el producto que desea comprar, puede navegar a través de las categorías en nuestro menú o utilizar la barra de búsqueda." },
      { id: 4, name: "Una vez haya elegido el producto que desea, seleccionado, color y talla, agréguelo a su bolsa de compra, dando clic en el botón Añadir al carrito." },
      { id: 5, name: "Una vez haya agregado todos los productos que desea comprar, vaya a su bolsa o carrito de compras que se encuentra en la parte superior derecha, allí puede verificar todos los productos que ha seleccionado." },
      { id: 6, name: "También en esta misma pantalla va a poder agregar su dirección para calcular el costo de envío." },
      { id: 7, name: "Para continuar debe dar clic en resumen de compra allí aparecen todos los productos que usted ha agregado, es importante verificar dirección de envío antes de dar clic en Pagar." },
      { id: 8, name: "Al dar clic sobre pagar, la plataforma lo llevará hasta la pasarela de pagos elegida donde podrá realizar el pago por el medio que lo desee: tarjeta de crédito, PSE, efecty o baloto." },
      { id: 9, name: "Una vez aprobado el pago, podrá retornar al sitio donde realizó la compra." },
    ],
    footer: "",
  },
  {
    id: 3,
    question: '¿Cómo puedo revisar compatibilidad de un accesorio con mi vehículo?',
    description: 'En la página web va a encontrar en la búsqueda de accesorios unos donde debe ingresar el año y clase de su vehículo para saber qué accesorios son compatibles. Sino los conoce, puede comunicarse con servicio al cliente por cualquiera de los canales de atención y preguntar por la compatibilidad de su vehículo. Es importante que tenga el número de chasis a la mano para facilitar así la búsqueda.   ',
    items: [],
    footer: "",
  },
  {
    id: 4,
    question: '¿Cuáles son los tiempos de envío?',
    description: 'Los tiempos de envío son:',
    items: [
      { id: 1, name: "Bogotá:  3 días hábiles" },
      { id: 2, name: "Resto del país: 3 a 8 días hábiles" },
    ],
    footer: "Puede haber situaciones que pueden retrasar estos tiempos. En caso de no haberlo recibido, por favor comunicarse con las líneas de atención estipuladas.",
  },
  {
    id: 5,
    question: '¿Puedo cambiar la dirección donde quiero recibir mi producto?',
    description: 'El producto se despachará a la dirección especificada al momento de realizar la compra. En caso de haber ingresado mal o no querer recibirlos en esta dirección, se podrá contactar lo antes posible con soporte en línea de Autogermana y verificar si el pedido aún no ha sido despachado. En caso de haber sido despachado, ya no se podrá realizar cambio. En caso de no haber sido despachado, soporte en línea recibirá la nueva dirección y hará el cambio solo si es en la misma ciudad ingresada en la orden. ',
    items: [],
    footer: "",
  },
  {
    id: 6,
    question: '¿Qué pasa si mi compra no llegó en la fecha que se tenía previsto?',
    description: 'Puede ser por causas externas a Autogermana. En este caso y para recibir más información puede comunicarse a cualquiera de nuestros canales de atención y preguntar sobre el estado de la orden. ',
    items: [],
    footer: "",
  },
  {
    id: 7,
    question: '¿Qué hago si no estaba en el momento de la entrega?',
    description: 'Otra persona autorizada podrá recibir el pedido. La empresa encargada de la distribución y entrega del producto realiza 2 intentos de entrega en su dirección, si finalmente no logra entregarlo, deberá asumir los costos de envío para enviarlos nuevamente.',
    items: [],
    footer: "",
  },
  {
    id: 8,
    question: '¿Qué hago si mi producto no es el que pedí?',
    description: 'Podrá hacer la reclamación de producto errado a través del correo soporteenlinea@autogermana.com.co. Revisar la política de cambios, retractos y garantías la cual podrá encontrar en la parte inferior de la página web donde se especifica el paso a paso y condiciones generales. Incluír enlace aquí de la política',
    items: [],
    footer: "",
  },
  {
    id: 9,
    question: 'Medios de pago: ',
    description: 'Tarjeta de crédito, PSE, Efecty y Baloto.',
    items: [],
    footer: "",
  },
  {
    id: 10,
    question: '¿Puedo utilizar varios medios de pago a la vez en la pagina?',
    description: 'No es posible. A la hora de efectuar el pago de su compra en la pagina web, es necesario suministrar un único medio de pago.',
    items: [],
    footer: "",
  },
  {
    id: 11,
    question: '¿Cómo usar cupones de descuento?',
    description: 'Si tiene un cupón o bono de descuento, debe ingresarlo en el campo que dice código de descuento que se encuentra en el resumen de compra; automáticamente se descontará la cantidad establecida en el valor total de su compra, recuerde escribir correctamente el código del bono, respetando las mayúsculas, minúsculas y números. Revise los términos y condiciones explicitas en el cupón o bono de descuento para saber sobre fechas de vencimiento y valores o porcentajes de descuento.',
    items: [],
    footer: "",
  },
  {
    id: 12,
    question: '¿A quién se contacta para una instalación?',
    description: 'Para la instalación de un producto, debe contactarse con la línea de atención de Autogermana a nivel nacional PBX 6578080 y elegir la opción correspondiente.',
    items: [],
    footer: "",
  },
  {
    id: 13,
    question: '¿Cuánto tiempo tengo para devolver o cambiar mi producto?',
    description: 'Autogermana ofrece a los clientes que adquieran productos por la página web, la posibilidad de devolver los productos de la categoría Lifestyle dentro de los15 días calendario siguientes a la entrega y los de categoría Accesorios y Llantas dentro de los 8 días calendarios siguientes a la entrega Es importante cumplir con las condiciones generales establecidas en la política de cambios, retractos y garantías que se encuentra en la parte inferior de la página web o en el siguiente enlace: ',
    items: [],
    footer: "",
  },
  {
    id: 14,
    question: '¿Puedo solicitar el reembolso de mi pedido?',
    description: 'El reembolso sólo opera para los retractos que se efectúen dentro de los cinco (5) días hábiles siguientes al recibo del producto. Si el retracto cumple con las condiciones establecidas, el reembolso del dinero se realizará a través del mismo medio de pago utilizado en la compra en un plazo de hasta 30 días hábiles.',
    items: [],
    footer: "",
  },
  {
    id: 15,
    question: '¿Si quiero cambiar mi producto por otro y el que quiero cuesta menos, me devuelven el dinero?',
    description: 'Si el cambio de producto es por otro diferente, el cliente recibirá un bono con un saldo a favor por el valor del producto al momento de la compra. Este bono solo podrá ser utilizado una única vez. En caso de adquirir un producto de mayor valor, se debe pagar la diferencia. Si el producto que va a adquirir tiene un menor valor, no se devolverá el excedente. ',
    items: [],
    footer: "",
  },
  {
    id: 16,
    question: '¿Cómo presentar un recurso de PQR?',
    description: 'En la pagina web va a encontrar un formulario en la parte inferior (Incluír enlace aquí de las PQR), que podrá ser diligenciado y se radicará la PQR. La respuesta le llegará al correo electrónico indicado.',
    items: [],
    footer: "",
  },

];

function PqrQuestions() {
  const questionCurrent = process.env.BRAND_ID == 2 ? dumyQuestionMini : dumyQuestionBmw;
  const [question, setQuestion] = useState(process.env.BRAND_ID == 2 ? dumyQuestionMini : dumyQuestionBmw)
  return (
    <PqrQuestion>
      <PqrHeader>Preguntas frecuentes.</PqrHeader>
      <PqrQuestionContent>
        <SearchContent>
          <SearchBox>
            <Icon name='find' width={20} height={20} />
            <input type="search" onChange={(e) => { setQuestion(questionCurrent.filter(data => data.question.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "").includes(e.target.value.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, "")))) }} placeholder="Devoluciones, quejas, reclamos, etc..." />
          </SearchBox>
        </SearchContent>
        <QuestionContent>
          <div className="content">
            {question.length > 0 ? question.map((item, index) =>
              <QuestionItem key={index}>
                <h3>{item.id} {item.question}</h3>
                <p>{item.description}</p>
                <div>
                  {item.items.map((data, index) =>
                    <p key={index}>
                      <span>{data.id}.</span> {data.name}
                    </p>
                  )
                  }
                </div>
              </QuestionItem>
            )
              :
              <div className="no-results">No se encontraron resultados.</div>
            }
          </div>
          {/* {[...Array(6)].map((e, i) =>
            <QuestionItem>
              <h3>Pregunta común {i + 1}</h3>
              <p>Malesuada risus mauris risus pharetra. Massa interdum eu bibendum eget adipiscing et, adipiscing nam.</p>
            </QuestionItem>
          )} */}

        </QuestionContent>
      </PqrQuestionContent>
    </PqrQuestion>
  )
}

export default PqrQuestions
