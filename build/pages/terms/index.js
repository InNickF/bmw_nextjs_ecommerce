import React, { Component } from 'react'
import Helmet from 'react-helmet'

import {
  AlignWrapper,
  PageTitle,
  Wrapper
} from '../../common/components'

import { Header } from '../../common/containers'

import Footer from '../../components/Footer'

import { TitleContainer, ContainerText } from '../../styles/terms'

class Terms extends Component {
  render() {
    return (
      <>
        <Helmet>
          <title>Términos y condiciones</title>
        </Helmet>
        <Wrapper>
          {parseInt(process.env.BRAND_ID) === 1 ?
            <div>
              <TitleContainer>
                <h1>
                  TÉRMINOS Y CONDICIONES PLATAFORMA E-COMMERCE AUTOGERMANA
              </h1>
              </TitleContainer>
              <ContainerText>
                <div className="parrafo">
                  <p>
                    Este documento describe los términos, las condiciones generales y las políticas de privacidad aplicables y establecidas para el acceso y uso de los servicios ofrecidos por Autogermana SAS dentro del sitio www.minishop.com.co y/u otros dominios (urls) relacionados.                </p>
                  <p>
                    Cualquier persona que desee acceder y/o suscribirse y/o usar el dominio www.minishop.com.co y/o los servicios ofrecidos, podrá hacerlo sujetándose a estos Términos y Condiciones Generales y a las demás políticas y principios que rigen el sitio web y que son incorporados al presente directamente o por referencia o que son explicados y/o detallados en otras secciones del sitio.                 </p>
                  <p>
                    En consecuencia, todas las visitas, todos los contratos y todas las transacciones que se realicen en este sitio, así como sus efectos jurídicos, quedarán regidos por estas reglas y sometidos a la legislación aplicable en Colombia.                </p>
                  <p>
                    Los Términos y Condiciones y las Políticas de Privacidad contenidos en este instrumento se aplicarán y se entenderán como parte integral de todos los actos y contratos que se ejecuten o celebren para la compra de bienes y/o servicios entre los usuarios de este sitio y Autogermana SAS, y por cualquiera de las otras sociedades o empresas que sean vinculadas a ella, y que hagan uso de este sitio.                </p>
                  <p>
                    El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad de Autogermana SAS así como en los demás documentos incorporados a los mismos por referencia, previo a su registro como Usuario de Autogermana.com.co y/o a la adquisición de productos o servicios y/o entrega de cualquier dato con cualquier fin.                </p>
                  <p>
                    Si el usuario hiciera uso del sitio de Autogermana, ello implicará la aceptación plena de las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Autogermana SAS. Por dicha utilización del sitio y/o sus servicios, el Usuario se obligará a cumplir expresamente con las mismas, no pudiendo alegar el desconocimiento de tales Términos y Condiciones Generales y de la Política de Privacidad.                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>1. CAPACIDAD LEGAL</h2>
                  <p>
                    Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios las personas que no tengan esa capacidad ni los menores de edad. Los actos que éstos realicen en este sitio serán responsabilidad de sus padres, tutores, encargados o curadores, y por tanto se considerarán realizados por éstos en ejercicio de la representación legal con la que cuentan. Quien registre un Usuario como empresa, deberá tener capacidad para contratar a nombre de tal entidad y de obligar a la misma en los términos de este Acuerdo.                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>2. REGISTRO Y USO DEL SITIO</h2>
                  <p>
                    Es obligatorio completar el formulario de registro en todos sus campos con datos válidos para convertirse en Usuario autorizado de minishop.com.co, acceder a las promociones, y para la adquisición de productos y/o servicios ofrecidos en este sitio. El futuro Miembro deberá completar el formulario de registro con su información personal de manera exacta, precisa y verdadera ("Datos Personales") y asume el compromiso de actualizar los Datos Personales conforme resulte necesario.                 </p>
                  <p>
                    Autogermana podrá utilizar diversos medios para identificar a sus Miembros, pero Autogermana NO se responsabiliza por la certeza de los Datos Personales provistos por sus Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la exactitud, veracidad, vigencia y autenticidad de los Datos Personales ingresados. Cada miembro sólo podrá ser titular de una (1) cuenta, no pudiendo acceder a más de una (1) cuenta con distintas direcciones de correo electrónico o falseando, modificando y/o alterando sus datos personales de cualquier manera posible. Si se verificara o sospechara un uso fraudulento y/o malintencionado y/o contrario a estos Términos y Condiciones y/o contrarios a la buena fe, Autogermana SAS tendrá el derecho inapelable de dar por terminados los créditos, dar de baja las cuentas y perseguir judicialmente a los infractores si así lo considera.                </p>
                  <p>
                    Autogermana SAS se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. En estos casos de inhabilitación, Autogermana podrá dar de baja la compra efectuada, sin que ello genere derecho alguno a resarcimiento, pago y/o indemnización.                </p>
                  <p>
                    El Miembro, una vez registrado, dispondrá de su dirección de email y una clave secreta que le permitirá el acceso personalizado, confidencial y seguro. En caso de poseer estos datos, el Usuario tendrá la posibilidad de cambiar la Clave de acceso, para lo cual deberá sujetarse al procedimiento establecido en el sitio respectivo. El Usuario se obliga a mantener la confidencialidad de su Clave de acceso, asumiendo totalmente la responsabilidad por el mantenimiento de la confidencialidad de su Clave secreta registrada en este sitio web, la cual le permite efectuar compras, solicitar servicios y obtener información. Dicha Clave es de uso personal, y su entrega a terceros no involucra responsabilidad de Autogermana SAS o de las empresas en caso de utilización indebida, negligente y/o incorrecta.                </p>
                  <p>
                    El Usuario será responsable por todas las operaciones efectuadas en y desde su Cuenta, pues el acceso a la misma está restringido al ingreso y uso de una Clave secreta, de conocimiento exclusivo del Usuario. El Miembro se compromete a notificar Autogermana SAS en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta y/o Clave, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión, préstamo o transferencia de la Clave y/o Cuenta bajo ningún título.                </p>
                  <p>
                    Autogermana SAS se reserva el derecho de rechazar cualquier solicitud de registro o de cancelar un registro previamente aceptado, sin que esté obligado a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>3. MODIFICACIONES DEL ACUERDO</h2>
                  <p>
                    Autogermana SAS podrá modificar los Términos y Condiciones Generales así como la Política de Privacidad  en cualquier momento, haciendo públicos en el Sitio los términos modificados. Todos los términos modificados entrarán en vigor a los diez (10) días calendario de su publicación. Dentro de los cinco (5) días siguientes a la publicación de las modificaciones introducidas, el Usuario deberá contactarnos, si no acepta las mismas; en ese caso quedará disuelto el vínculo contractual y será inhabilitado como Miembro. Vencido este plazo, se considerará que el Usuario acepta los nuevos términos y el contrato continuará vinculando a ambas partes.                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>4. MEDIOS DE PAGO QUE SE PODRÁN UTILIZAR EN EL SITIO</h2>
                  <p>
                    Los productos y servicios ofrecidos en el Sitio, salvo que se señale una forma diferente para casos particulares u ofertas de determinados bienes o servicios, sólo pueden ser pagados con los medios que en cada caso específicamente se indiquen. El uso de tarjetas de crédito se sujetará a lo establecido en estos Términos y Condiciones y, en relación con su emisor. En caso de contradicción, predominará lo expresado en ese último instrumento. El Sitio podrá indicar determinadas condiciones de compra según el medio de pago que se utilice por el usuario.                 </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>5. PLAZO DE VALIDEZ DE LA OFERTA Y PRECIO</h2>
                  <p>
                    El plazo de validez de la oferta es aquel que coincide con la fecha de vigencia indicada en la promoción o en virtud del agotamiento de las cantidades de productos disponibles para esa promoción debidamente informados al Usuario, o mientras la oferta se mantenga disponible, el menor de éstos plazos. Cuando quiera que en una promoción no se indique una fecha de terminación se entenderá que la actividad se extenderá hasta el agotamiento de los inventarios correspondientes.                </p>
                  <p>
                    Los precios de los productos y servicios disponibles en el Sitio, mientras aparezcan en él, solo tendrán vigencia y aplicación en éste y no serán aplicables a otros canales de venta utilizados por las empresas, tales como tiendas físicas, venta telefónica, otros sitios de venta por vía electrónica, catálogos u otros. Los precios de los productos ofrecidos en el Sitio están expresados en Pesos colombianos salvo que se manifieste lo contrario. Los precios ofrecidos corresponden exclusivamente al valor del bien ofrecido y no incluyen gastos de transporte, manejo, envío, instalación en caso de requerirse, accesorios que no se describan expresamente ni ningún otro ítem adicional.                </p>
                  <p>
                    Adicionalmente, es posible que cierto número de productos puedan tener un precio incorrecto. De existir un error tipográfico en alguno de los precios de los productos, si el precio correcto del artículo es más alto que el que figura en la página, a nuestra discreción, Autogermana SAS lo contactará antes de que el producto sea enviado, y/o cancelaremos el pedido y le notificaremos acerca de la cancelación.                </p>
                  <p>
                    El cliente reconoce y acepta que puede existir diferente información y condiciones de venta para los productos y servicios ofrecidos a través de otros canales de venta. Lo cual no compromete a Autogermana a variar sus precios y/o condiciones.                 </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>6. PROMOCIONES</h2>
                  <p>
                    Las promociones que se ofrezcan en este Sitio web no son necesariamente las mismas que ofrezcan otros canales de venta utilizados por Autogermana SAS, tales como tiendas físicas, venta telefónica, catálogos u otros, a menos que se señale expresamente en este sitio o en la publicidad. Cuando el Sitio ofrezca promociones que consistan en la entrega gratuita o rebajada de un producto por la compra de otro, el despacho del bien que se entregue gratuitamente o a precio rebajado, se hará en el mismo lugar en el cual se despacha el producto comprado. Autogermana somete sus promociones y actividades promocionales al cumplimiento de las normas vigentes y específicamente a las disposiciones de la ley 1480 de 2011.                </p>
                  <p>
                    El Usuario reconoce y acepta que los datos de ubicación suministrados para que Autogermana o la empresa por esta designada efectúe la entrega de los productos adquiridos a través del Sitio son verdaderos y actuales. Por lo anterior, el Usuario voluntariamente declara que, al suministrar tales datos, AUTORIZA irrevocablemente a la persona que para el momento de la entrega se encuentre en la dirección suministrada por el usuario, reciba el producto. En virtud de lo anterior quien se encuentre en la dirección indicada por el Usuario y declare de buena fe su disposición para recibir los productos, actuará en nombre y representación del Usuario y por lo tanto Autogermana, sus aliados y/o la empresa transportadora designada estarán facultados para entregar los productos adquiridos a través del Sitio. Esta autorización incluye, pero no se limita, a las personas que ocupen continua o temporalmente cargos tales como porteros de edificios y copropiedades, empleadas del servicio doméstico, conserjes y en general a cualquier persona que al momento de la entrega manifieste estar autorizada para recibir los productos. Por lo anterior, Autogermana no será responsable frente a la pérdida o daños que puedan sufrir los productos una vez éstos hayan sido debidamente entregados en la dirección suministrada por el Usuario. Autogermana estará exento de responsabilidad siempre que pueda acreditar la entrega de los productos en la dirección suministrada por el Usuario.                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>7. CANCELACIÓN UNILATERAL DE PEDIDO POR AUSENCIA DE INVENTARIO</h2>
                  <p>
                    Aunque haremos todo lo posible para garantizar que los artículos que se adquieran se encuentren disponibles en el inventario, eventualmente podría suceder que una compra no cuente con unidades suficientes en nuestro inventario. Si ello llegase a presentarse, nos reservaremos el derecho de anular unilateralmente la compra y/o pedido. En ese caso se garantizará la devolución total del dinero cancelado o pagado al mismo método de pago utilizado por el cliente en la compra. El reverso del pago podrá verse reflejado hasta 30 días hábiles después de aprobado.                 </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>8. ACCESORIOS Y/O ELEMENTOS QUE REQUIERAN INSTALACIÓN</h2>
                  <p>
                    Algunos de los artículos comercializados en la presente página requieren instalación profesional y/o especializada. En las especificaciones de los productos se indica si requieren o no requieren instalación; en caso de indicarse que, si requieren instalación, la misma debe hacerse por un profesional certificado en un centro de servicio autorizado para BMW, MINI y/o BMW Motorrad. La instalación efectuada en un centro de servicio no autorizado o por terceros, anula automáticamente la garantía del producto.                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>9. TARIFAS Y COSTOS DE ENVÍO</h2>
                  <p>
                    Los precios indicados NO incluyen las tarifas y los costos de envío. Dichas tarifas serán calculadas e informadas al momento que el usuario / cliente indique la dirección de envío y se sumarán al costo del producto.                 </p>
                  <p>
                    Algunos productos tendrán tarifas preferenciales o nulas de envío, lo cual puede varias en cualquier momento y no compromete a Autogermana a mantenerlo, y lo puede cambiar unilateralmente.
                </p>
                  <p>
                    Autogermana SAS solo realiza envíos dentro del territorio colombiano.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>TIEMPOS DE ENTREGA</h2>
                  <p>
                    Autogermana entrega los productos únicamente en el territorio de Colombia. Los Productos serán entregados en la dirección y lugar que el Cliente nos informe en el momento de la compra.                 </p>
                  <p>
                    Los tiempos estimados y establecidos inicialmente para la entrega son: 3 días hábiles en Bogotá y de 3 a 8 días hábiles en el resto del país. Las entregas se realizan únicamente en días hábiles siguientes a la fecha en que se haya validado el pago, siempre y cuando no se presenten causas ajenas a la voluntad de Autogermana que retrasen la entrega dentro de este plazo.                </p>
                  <p>
                    Estos tiempos son estimados y podrán sufrir modificaciones por parte de Autogermana SAS y/o por la transportadora sin considerarse eso un incumplimiento por parte de Autogermana y que el cliente deberá aceptar.                </p>
                  <p>
                    Si el pedido fue realizado después de las 3 pm, se empezará a contar a partir del siguiente hábil.
                </p>
                  <p>
                    Cualquier duda que tengan sobre el estado de su pedido, pueden consultar en la página de la transportadora con el número de guía enviado al correo electrónico ingresado al realizar la compra, o a la línea 6578080 opción 3.                </p>
                  <p>
                    Advertencia: Autogermana SAS no puede garantizar el envío a algunas regiones del país de productos considerados sobredimensionados o con peso excesivo por las empresas de correo. Cuando esto suceda, nos reservamos el derecho de revocar los pedidos que se encuentren en estas condiciones, caso en el cual la orden será reversada y el valor del precio será reembolsado al cliente en el menor tiempo posible.                </p>
                </div>
              </ContainerText>
            </div>
            :
            <div>
              <TitleContainer>
                <h1>
                  TÉRMINOS Y CONDICIONES PLATAFORMA E-COMMERCE AUTOGERMANA
              </h1>
              </TitleContainer>
              <ContainerText>
                <div className="parrafo">
                  <p>
                    Este documento describe los términos, las condiciones generales y las políticas de privacidad aplicables y establecidas para el acceso y uso de los servicios ofrecidos por Autogermana SAS dentro del sitio www.bmwshop.com.co y/u otros dominios (urls) relacionados.
                </p>
                  <p>
                    Cualquier persona que desee acceder y/o suscribirse y/o usar el dominio www.bmwshop.com.co y/o los servicios ofrecidos, podrá hacerlo sujetándose a estos Términos y Condiciones Generales y a las demás políticas y principios que rigen el sitio web y que son incorporados al presente directamente o por referencia o que son explicados y/o detallados en otras secciones del sitio.
                </p>
                  <p>
                    En consecuencia, todas las visitas, todos los contratos y todas las transacciones que se realicen en este sitio, así como sus efectos jurídicos, quedarán regidos por estas reglas y sometidos a la legislación aplicable en Colombia.
                </p>
                  <p>
                    Los Términos y Condiciones y las Políticas de Privacidad contenidos en este instrumento se aplicarán y se entenderán como parte integral de todos los actos y contratos que se ejecuten o celebren para la compra de bienes y/o servicios entre los usuarios de este sitio y Autogermana SAS, y por cualquiera de las otras sociedades o empresas que sean vinculadas a ella, y que hagan uso de este sitio.
                </p>
                  <p>
                    El Usuario debe leer, entender y aceptar todas las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Privacidad de Autogermana SAS así como en los demás documentos incorporados a los mismos por referencia, previo a su registro como Usuario de Autogermana.com.co y/o a la adquisición de productos o servicios y/o entrega de cualquier dato con cualquier fin.
                </p>
                  <p>
                    Si el usuario hiciera uso del sitio de Autogermana, ello implicará la aceptación plena de las condiciones establecidas en los Términos y Condiciones Generales y en las Políticas de Autogermana SAS. Por dicha utilización del sitio y/o sus servicios, el Usuario se obligará a cumplir expresamente con las mismas, no pudiendo alegar el desconocimiento de tales Términos y Condiciones Generales y de la Política de Privacidad.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>1. CAPACIDAD LEGAL</h2>
                  <p>
                    Los Servicios sólo están disponibles para personas que tengan capacidad legal para contratar. No podrán utilizar los servicios las personas que no tengan esa capacidad ni los menores de edad. Los actos que éstos realicen en este sitio serán responsabilidad de sus padres, tutores, encargados o curadores, y por tanto se considerarán realizados por éstos en ejercicio de la representación legal con la que cuentan. Quien registre un Usuario como empresa, deberá tener capacidad para contratar a nombre de tal entidad y de obligar a la misma en los términos de este Acuerdo.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>2. REGISTRO Y USO DEL SITIO</h2>
                  <p>
                    Es obligatorio completar el formulario de registro en todos sus campos con datos válidos para convertirse en Usuario autorizado de bmwshop.com.co, acceder a las promociones, y para la adquisición de productos y/o servicios ofrecidos en este sitio. El futuro Miembro deberá completar el formulario de registro con su información personal de manera exacta, precisa y verdadera ("Datos Personales") y asume el compromiso de actualizar los Datos Personales conforme resulte necesario.
                </p>
                  <p>
                    Autogermana podrá utilizar diversos medios para identificar a sus Miembros, pero Autogermana NO se responsabiliza por la certeza de los Datos Personales provistos por sus Usuarios. Los Usuarios garantizan y responden, en cualquier caso, de la exactitud, veracidad, vigencia y autenticidad de los Datos Personales ingresados. Cada miembro sólo podrá ser titular de una (1) cuenta, no pudiendo acceder a más de una (1) cuenta con distintas direcciones de correo electrónico o falseando, modificando y/o alterando sus datos personales de cualquier manera posible. Si se verificara o sospechara un uso fraudulento y/o malintencionado y/o contrario a estos Términos y Condiciones y/o contrarios a la buena fe, Autogermana SAS tendrá el derecho inapelable de dar por terminados los créditos, dar de baja las cuentas y perseguir judicialmente a los infractores si así lo considera.
                </p>
                  <p>
                    Autogermana SAS se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. En estos casos de inhabilitación, Autogermana podrá dar de baja la compra efectuada, sin que ello genere derecho alguno a resarcimiento, pago y/o indemnización.
                </p>
                  <p>
                    Autogermana SAS se reserva el derecho de solicitar algún comprobante y/o dato adicional a efectos de corroborar los Datos Personales, así como de suspender temporal o definitivamente a aquellos Usuarios cuyos datos no hayan podido ser confirmados. En estos casos de inhabilitación, Autogermana podrá dar de baja la compra efectuada, sin que ello genere derecho alguno a resarcimiento, pago y/o indemnización.
                </p>
                  <p>
                    El Usuario será responsable por todas las operaciones efectuadas en y desde su Cuenta, pues el acceso a la misma está restringido al ingreso y uso de una Clave secreta, de conocimiento exclusivo del Usuario. El Miembro se compromete a notificar Autogermana SAS en forma inmediata y por medio idóneo y fehaciente, cualquier uso no autorizado de su Cuenta y/o Clave, así como el ingreso por terceros no autorizados a la misma. Se aclara que está prohibida la venta, cesión, préstamo o transferencia de la Clave y/o Cuenta bajo ningún título.
                </p>
                  <p>
                    Autogermana SAS se reserva el derecho de rechazar cualquier solicitud de registro o de cancelar un registro previamente aceptado, sin que esté obligado a comunicar o exponer las razones de su decisión y sin que ello genere algún derecho a indemnización o resarcimiento.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>3. MODIFICACIONES DEL ACUERDO</h2>
                  <p>
                    Autogermana SAS podrá modificar los Términos y Condiciones Generales así como la Política de Privacidad  en cualquier momento, haciendo públicos en el Sitio los términos modificados. Todos los términos modificados entrarán en vigor a los diez (10) días calendario de su publicación. Dentro de los cinco (5) días siguientes a la publicación de las modificaciones introducidas, el Usuario deberá contactarnos, si no acepta las mismas; en ese caso quedará disuelto el vínculo contractual y será inhabilitado como Miembro. Vencido este plazo, se considerará que el Usuario acepta los nuevos términos y el contrato continuará vinculando a ambas partes.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>4. MEDIOS DE PAGO QUE SE PODRÁN UTILIZAR EN EL SITIO</h2>
                  <p>
                    Los productos y servicios ofrecidos en el Sitio, salvo que se señale una forma diferente para casos particulares u ofertas de determinados bienes o servicios, sólo pueden ser pagados con los medios que en cada caso específicamente se indiquen. El uso de tarjetas de crédito se sujetará a lo establecido en estos Términos y Condiciones y, en relación con su emisor. En caso de contradicción, predominará lo expresado en ese último instrumento. El Sitio podrá indicar determinadas condiciones de compra según el medio de pago que se utilice por el usuario.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>5. PLAZO DE VALIDEZ DE LA OFERTA Y PRECIO</h2>
                  <p>
                    El plazo de validez de la oferta es aquel que coincide con la fecha de vigencia indicada en la promoción o en virtud del agotamiento de las cantidades de productos disponibles para esa promoción debidamente informados al Usuario, o mientras la oferta se mantenga disponible, el menor de éstos plazos. Cuando quiera que en una promoción no se indique una fecha de terminación se entenderá que la actividad se extenderá hasta el agotamiento de los inventarios correspondientes.
                </p>
                  <p>
                    Los precios de los productos y servicios disponibles en el Sitio, mientras aparezcan en él, solo tendrán vigencia y aplicación en éste y no serán aplicables a otros canales de venta utilizados por las empresas, tales como tiendas físicas, venta telefónica, otros sitios de venta por vía electrónica, catálogos u otros. Los precios de los productos ofrecidos en el Sitio están expresados en Pesos colombianos salvo que se manifieste lo contrario. Los precios ofrecidos corresponden exclusivamente al valor del bien ofrecido y no incluyen gastos de transporte, manejo, envío, instalación en caso de requerirse, accesorios que no se describan expresamente ni ningún otro ítem adicional.
                </p>
                  <p>
                    Adicionalmente, es posible que cierto número de productos puedan tener un precio incorrecto. De existir un error tipográfico en alguno de los precios de los productos, si el precio correcto del artículo es más alto que el que figura en la página, a nuestra discreción, Autogermana SAS lo contactará antes de que el producto sea enviado, y/o cancelaremos el pedido y le notificaremos acerca de la cancelación.
                </p>
                  <p>
                    El cliente reconoce y acepta que puede existir diferente información y condiciones de venta para los productos y servicios ofrecidos a través de otros canales de venta. Lo cual no compromete a Autogermana a variar sus precios y/o condiciones.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>6. PROMOCIONES</h2>
                  <p>
                    El cliente reconoce y acepta que puede existir diferente información y condiciones de venta para los productos y servicios ofrecidos a través de otros canales de venta. Lo cual no compromete a Autogermana a variar sus precios y/o condiciones.
                </p>
                  <p>
                    El Usuario reconoce y acepta que los datos de ubicación suministrados para que Autogermana o la empresa por esta designada efectúe la entrega de los productos adquiridos a través del Sitio son verdaderos y actuales. Por lo anterior, el Usuario voluntariamente declara que, al suministrar tales datos, AUTORIZA irrevocablemente a la persona que para el momento de la entrega se encuentre en la dirección suministrada por el usuario, reciba el producto. En virtud de lo anterior quien se encuentre en la dirección indicada por el Usuario y declare de buena fe su disposición para recibir los productos, actuará en nombre y representación del Usuario y por lo tanto Autogermana, sus aliados y/o la empresa transportadora designada estarán facultados para entregar los productos adquiridos a través del Sitio. Esta autorización incluye, pero no se limita, a las personas que ocupen continua o temporalmente cargos tales como porteros de edificios y copropiedades, empleadas del servicio doméstico, conserjes y en general a cualquier persona que al momento de la entrega manifieste estar autorizada para recibir los productos. Por lo anterior, Autogermana no será responsable frente a la pérdida o daños que puedan sufrir los productos una vez éstos hayan sido debidamente entregados en la dirección suministrada por el Usuario. Autogermana estará exento de responsabilidad siempre que pueda acreditar la entrega de los productos en la dirección suministrada por el Usuario.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>7. CANCELACIÓN UNILATERAL DE PEDIDO POR AUSENCIA DE INVENTARIO</h2>
                  <p>
                    Aunque haremos todo lo posible para garantizar que los artículos que se adquieran se encuentren disponibles en el inventario, eventualmente podría suceder que una compra no cuente con unidades suficientes en nuestro inventario. Si ello llegase a presentarse, nos reservaremos el derecho de anular unilateralmente la compra y/o pedido. En ese caso se garantizará la devolución total del dinero cancelado o pagado al mismo método de pago utilizado por el cliente en la compra. El reverso del pago podrá verse reflejado hasta 30 días hábiles después de aprobado.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>8. ACCESORIOS Y/O ELEMENTOS QUE REQUIERAN INSTALACIÓN</h2>
                  <p>
                    Algunos de los artículos comercializados en la presente página requieren instalación profesional y/o especializada. En las especificaciones de los productos se indica si requieren o no requieren instalación; en caso de indicarse que, si requieren instalación, la misma debe hacerse por un profesional certificado en un centro de servicio autorizado para BMW, MINI y/o BMW Motorrad. La instalación efectuada en un centro de servicio no autorizado o por terceros, anula automáticamente la garantía del producto.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>9. TARIFAS Y COSTOS DE ENVÍO</h2>
                  <p>
                    Los precios indicados NO incluyen las tarifas y los costos de envío. Dichas tarifas serán calculadas e informadas al momento que el usuario / cliente indique la dirección de envío y se sumarán al costo del producto.
                </p>
                  <p>
                    Algunos productos tendrán tarifas preferenciales o nulas de envío, lo cual puede varias en cualquier momento y no compromete a Autogermana a mantenerlo, y lo puede cambiar unilateralmente.
                </p>
                  <p>
                    Autogermana SAS solo realiza envíos dentro del territorio colombiano.
                </p>
                  <h2 style={{ marginTop: "30px", marginBottom: "20px" }}>TIEMPOS DE ENTREGA</h2>
                  <p>
                    Autogermana entrega los productos únicamente en el territorio de Colombia. Los Productos serán entregados en la dirección y lugar que el Cliente nos informe en el momento de la compra.
                </p>
                  <p>
                    Los tiempos estimados y establecidos inicialmente para la entrega son: 3 días hábiles en Bogotá y de 3 a 8 días hábiles en el resto del país. Las entregas se realizan únicamente en días hábiles siguientes a la fecha en que se haya validado el pago, siempre y cuando no se presenten causas ajenas a la voluntad de Autogermana que retrasen la entrega dentro de este plazo.
                </p>
                  <p>
                    Estos tiempos son estimados y podrán sufrir modificaciones por parte de Autogermana SAS y/o por la transportadora sin considerarse eso un incumplimiento por parte de Autogermana y que el cliente deberá aceptar.
                </p>
                  <p>
                    Si el pedido fue realizado después de las 3 pm, se empezará a contar a partir del siguiente hábil.
                </p>
                  <p>
                    Cualquier duda que tengan sobre el estado de su pedido, pueden consultar en la página de la transportadora con el número de guía enviado al correo electrónico ingresado al realizar la compra, o a la línea 6578080 opción 3.
                </p>
                  <p>
                    Advertencia: Autogermana SAS no puede garantizar el envío a algunas regiones del país de productos considerados sobredimensionados o con peso excesivo por las empresas de correo. Cuando esto suceda, nos reservamos el derecho de revocar los pedidos que se encuentren en estas condiciones, caso en el cual la orden será reversada y el valor del precio será reembolsado al cliente en el menor tiempo posible.
                </p>
                </div>
              </ContainerText>
            </div>
          }

        </Wrapper>
      </>
    )
  }
}

export default Terms
