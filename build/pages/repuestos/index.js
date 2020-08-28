import React, {Fragment} from 'react'
import Helmet from "react-helmet";
import {Wrapper, Column} from "../../common/src/components";
import ContainerText from "../../styles/privacy";
import {TitleContainer} from "../../styles/terms";
import {Container, HeroContent, Inner, Row, ColLg12, Boxes, SmartBox, Features} from "../../styles/repuestos";

const Repuestos = () => {

	return (
		<Fragment>
			<Helmet>
				<title>Repuestos BMW</title>
			</Helmet>

			<HeroContent>
				<div className="fondo-header"/>
				<Inner>
					<Container>
						<Row>
							<ColLg12 className="text-side">
								<h1 className="text-uppercase bold" style={{color: 'white'}}>Repuestos Originales</h1>
								<h2 className="text-uppercase bold" style={{color: 'white'}}>
									para tu BMW.
								</h2>
								{/*<p className="mt-2">
									Con BMW Shop podrás tener la mejor asesoría sin salir de casa.
								</p>*/}
								<Boxes className="push-lg-2">
									<Row>
										<div className="col-lg-4 col-md-6 mb-5">
											<SmartBox>
												<Row>
													<ColLg12>
														<span className="text-primary bold">1</span>
													</ColLg12>
													<ColLg12>
														<p className="thin text-uppercase">REGISTER</p>
														<p>
															There are many variations of passages of Lorem Ipsum
															available, but the majority have suffered alteration in some
															form.
														</p>
													</ColLg12>
												</Row>
											</SmartBox>
											<SmartBox className="mt-5">
												<Row>
													<ColLg12>
														<span className="text-primary bold">2</span>
													</ColLg12>
													<ColLg12>
														<p className="thin text-uppercase">SELECT PLAN</p>
														<p>
															There are many variations of passages of Lorem Ipsum
															available, but the majority have suffered alteration in some
															form.
														</p>
													</ColLg12>
												</Row>
											</SmartBox>
										</div>
										<div className="col-lg-4 col-md-6 pull-lg-0">
											<SmartBox className="item-center">
												<Row>
													<ColLg12>
														<span className="text-primary bold">3</span>
													</ColLg12>
													<ColLg12>
														<p className="thin text-uppercase">ENJOY</p>
														<p>
															There are many variations of passages of Lorem Ipsum
															available, but the majority have suffered alteration in some
															form.
														</p>
													</ColLg12>
												</Row>
											</SmartBox>
										</div>
									</Row>
								</Boxes>
							</ColLg12>
						</Row>
					</Container>
					<div className="box-overlay"/>
				</Inner>
			</HeroContent>
			<Features>
				<Container>

					<h2>
						Con BMW Shop podrás tener la mejor asesoría sin salir de casa, para que encuentres repuestos que
						proporcionan un rendimiento óptimo a tu BMW, gracias al desarrollo tecnológico y el cumplimiento
						de estrictos estándares de calidad de BMW GROUP. Nuestro compromiso es brindarte la mejor
						experiencia de compra, por eso todos nuestros repuestos cuentan con una garantía de 24 meses por
						defecto de producto.
					</h2>

					<Row style={{marginTop: "5rem"}}>
						<div className="col-lg-6 col-md-6 mb-5">
							<SmartBox>
								<Row>
									<ColLg12>
										<p className="bold" style={{textAlign: 'left'}}>
											BATERÍAS BMW
										</p>
									</ColLg12>
									<ColLg12>
										<p style={{textAlign: 'left'}}>
											Cuenta con la tecnología EfficientDynamics, la cual ofrece una gestión
											inteligente de la energía y actualmente garantiza una movilidad sustentable.
											La batería BMW tiene una larga vida útil, aún después de periodos largos de
											inmovilización. Permite mantener un excelente arranque en motores que
											requieren mayor corriente, como los motores diesel de alto rendimiento.
										</p>
										<img style={{maxHeight: "292px"}}
											 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmw+r1.jpg"
											 width="100%"/>
									</ColLg12>
								</Row>
							</SmartBox>
						</div>
						<div className="col-lg-6 col-md-6 mb-5">
							<SmartBox>
								<Row>
									<ColLg12>
										<p className="bold" style={{textAlign: 'left'}}>
											ACEITE BMW
										</p>
									</ColLg12>
									<ColLg12>
										<p style={{textAlign: 'left'}}>
											Responde a las exigencias de los motores de BMW permitiendo así un alto
											rendimiento, eficiencia y duración. Ofrece una mayor viscosidad, lo cual
											mejora los arranques en frío. Gracias al desarrollo exclusivo y de alta
											tecnología permite reducir el consumo de combustible, prolonga la vida útil
											del motor, y además, mantiene una limpieza activa que protege las
											principales piezas del motor.
										</p>
										<img style={{maxHeight: "292px"}}
											 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmw+r2.jpg"
											 width="100%"/>
									</ColLg12>
								</Row>
							</SmartBox>
						</div>
						<div className="col-lg-6 col-md-6 mb-sm-5">
							<SmartBox>
								<Row>
									<ColLg12>
										<p className="bold" style={{textAlign: 'left'}}>
											PLUMILLAS BMW
										</p>
									</ColLg12>
									<ColLg12>
										<p style={{textAlign: 'left'}}>
											Con las plumillas BMW podrás mantener siempre una visibilidad y seguridad
											óptimas, incluso en situaciones críticas. Tienen un rendimiento perfecto
											durante el limpiado gracias a la distribución uniforme de las fuerzas y la
											elevada presión. Son capaces de reconocer, gracias a la tecnología
											infrarroja, las gotas de lluvia que caen sobre el parabrisas, lo que le
											permite adaptar la velocidad de los limpiaparabrisas de acuerdo con la
											intensidad de la lluvia.
										</p>
										<img style={{maxHeight: "292px"}}
											 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmw+r3.jpg"
											 width="100%"/>
									</ColLg12>
								</Row>
							</SmartBox>
						</div>
						<div className="col-lg-6 col-md-6 mb-sm-5">
							<SmartBox>
								<Row>
									<ColLg12>
										<p className="bold" style={{textAlign: 'left'}}>
											PASTILLAS DE FRENO BMW
										</p>
									</ColLg12>
									<ColLg12>
										<p style={{textAlign: 'left'}}>
											Garantizan la óptima interacción con el sistema de frenos, gracias a la
											combinación de materiales que brindan los mejores valores en respuesta y
											máximo confort. Se caracterizan por ofrecer gran desempeño en cualquier
											condición climática.
										</p>
										<img style={{maxHeight: "292px"}}
											 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/bmwr4.png"
											 width="100%"/>
									</ColLg12>
								</Row>
							</SmartBox>
						</div>
					</Row>
				</Container>
			</Features>
		</Fragment>
	)

}

export default Repuestos;
