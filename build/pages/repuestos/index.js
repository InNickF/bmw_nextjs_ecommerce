import React, {Fragment} from 'react'
import Helmet from "react-helmet";
import {Wrapper, Column, Row} from "../../common/src/components";
import ContainerText from "../../styles/privacy";
import {TitleContainer} from "../../styles/terms";

const Repuestos = () => {

	return (
		<Fragment>
			<Helmet>
				<title>Repuestos BMW</title>
			</Helmet>
			<Wrapper>
				<TitleContainer>
					<div style={{
						background: "url(https://repuestos-landing.s3.us-east-2.amazonaws.com/banner-bmw.jpg)",
						minHeight: "350px",
						backgroundSize: "cover",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "center",
						display: "flex",
						alignItems: "center",
					}}>
						<h1 style={{
							paddingLeft: "16px",
							color: "white",
							fontWeight: "bold!important",
							textShadow: "rgb(0, 0, 0) 2px 0px 4px",
							fontFamily: "BMWGroup-Bold',sans-serif !important;"
						}}>
							REPUESTOS ORIGINALES PARA TU BMW.
						</h1>
					</div>
				</TitleContainer>
				<ContainerText>
					<p style={{marginTop: "20px"}}>
						Con BMW Shop podrás tener la mejor asesoría sin salir de casa, para que encuentres repuestos que
						proporcionan un rendimiento óptimo a tu BMW, gracias al desarrollo tecnológico y el cumplimiento de
						estrictos estándares de calidad de BMW GROUP. Nuestro compromiso es brindarte la mejor
						experiencia de compra, por eso todos nuestros repuestos cuentan con una
						garantía de 24 meses por defecto de producto.
					</p>
				</ContainerText>
				<ContainerText>
					<Row>
						<Column style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}>
							<h2 style={{marginTop: "30px", marginBottom: "20px", textAlign: "left"}}>Baterías BMW</h2>
							<p style={{padding: "0"}}>
								Cuenta con la tecnología EfficientDynamics, la cual ofrece una gestión inteligente de la
								energía y actualmente garantiza una movilidad sustentable. La batería BMW tiene una
								larga vida útil, aún después de periodos largos de inmovilización. Permite mantener un
								excelente arranque en motores que requieren mayor corriente, como los motores diesel de
								alto rendimiento.
							</p>
							<img style={{maxHeight: "292px"}}
								 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmw+r1.jpg" width="100%"/>
						</Column>
						<Column style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}>
							<h2 style={{marginTop: "30px", marginBottom: "20px", textAlign: "left"}}>Aceite BMW</h2>
							<p style={{padding: "0"}}>
								Responde a las exigencias de los motores de BMW permitiendo así un alto rendimiento,
								eficiencia y duración. Ofrece una mayor viscosidad, lo cual mejora los arranques en
								frío. Gracias al desarrollo exclusivo y de alta tecnología permite reducir el consumo de
								combustible, prolonga la vida útil del motor, y además, mantiene una limpieza activa que
								protege las piezas principales.
							</p>
							<img style={{maxHeight: "292px"}}
								 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmw+r2.jpg" width="100%"/>
						</Column>
					</Row>
				</ContainerText>

				<ContainerText>
					<Row>
						<Column style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}>
							<h2 style={{marginTop: "30px", marginBottom: "20px", textAlign: "left"}}>
								Plumillas BMW
							</h2>
							<p style={{padding: "0"}}>
								Con las plumillas BMW podrás mantener siempre una visibilidad y seguridad óptimas,
								incluso en situaciones críticas. Tienen un rendimiento perfecto durante el limpiado
								gracias a la distribución uniforme de las fuerzas y la elevada presión. Son capaces de
								reconocer, gracias a la tecnología infrarroja, las gotas de lluvia que caen sobre el
								parabrisas, lo que le permite adaptar la velocidad de los limpiaparabrisas de acuerdo
								con la intensidad de la lluvia.
							</p>
							<img style={{maxHeight: "292px"}}
								 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmw+r3.jpg" width="100%"/>
						</Column>
						<Column style={{
							display: "flex",
							flexDirection: "column",
							justifyContent: "space-between",
						}}>
							<h2 style={{marginTop: "30px", marginBottom: "20px", textAlign: "left"}}>Pastillas de freno
								BMW</h2>
							<p style={{padding: "0"}}>
								Garantizan la óptima interacción con el sistema de frenos, gracias a la combinación de 
								materiales que brindan los mejores valores en respuesta y máximo confort. Se caracterizan
								por ofrecer gran desempeño en cualquier condición climática.
							</p>
							<img style={{maxHeight: "292px"}}
								 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmwr4.png" width="100%"/>
						</Column>
					</Row>
				</ContainerText>

				<ContainerText>
					<p style={{marginTop: "20px"}}>Puedes recibir asesoría ó realizar tu compra asistida a través de
						nuestro WhatsApp y nuestro chat
						online.</p>
				</ContainerText>

			</Wrapper>
		</Fragment>
	)

}

export default Repuestos;
