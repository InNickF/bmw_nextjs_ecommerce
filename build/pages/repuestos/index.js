import React, {Fragment, useState} from 'react'
import Helmet from "react-helmet";
import {Accordion, Card, Button, Form} from 'react-bootstrap';
import {Container, HeroContent, Inner, Row, ColLg12, Boxes, SmartBox, Features} from "../../styles/repuestos";
import {FeedbackModal} from "../../common/src/components";


const modelos = [
	{serie: 'i3', modelos: ['i3 120Ah IB1', 'i4 60Ah IB1']},
	{serie: 'i8', modelos: ['i8', 'i8 I12 LCI B38X']},
	{
		serie: 'Serie 1',
		modelos: [
			'114i N13',
			'116i N13',
			'116i N45',
			'116i N45N',
			'118d N47N',
			'118i B38C',
			'118i N13',
			'120d N47',
			'120d N47N',
			'120i N13',
			'120i N46',
			'120i N46N',
			'125i N52N',
			'130i N52',
			'135i N54',
			'M135i N55',
			'M135iX B48E',
			'M135iX N55',
			'M140i B58',
			'M3 S65',
			'M Coupé N54T',
		]
	},
	{
		serie: 'Serie 2',
		modelos: [
			'218i B38',
			'218i B38C',
			'220i N20',
			'225xe B38X',
			'M235i N55',
			'M235iX B48E',
			'M240i B58',
			'M2 Competition S55',
			'M2 N55'
		]
	},
	{
		serie: 'Serie 3',
		modelos: [
			'316i N13',
			'316i N45N',
			'318i B38',
			'318i N46N',
			'320d N47',
			'320d N47N',
			'320i B48C',
			'320i M54',
			'320i N20',
			'320i N46',
			'320i N46N',
			'325Ci M54',
			'325i N52',
			'325i N52N',
			'328i N20',
			'330Ci M54',
			'330e B48X',
			'330i B48',
			'330i B48D',
			'330i M54',
			'330i N52',
			'330i N52N',
			'335i N54',
			'340i B58',
			'M340iX B58D',
			'M3 S55'
		]
	},
	{
		serie: 'Serie 4',
		modelos: [
			'418i B38',
			'420i B48',
			'420i N20',
			'428i N20',
			'430i B48',
			'435i N55',
			'440i B58',
			'M4 S55'
		]
	},
	{
		serie: 'Serie 5',
		modelos: [
			'520d N47N',
			'520i B48',
			'520i N20',
			'523i N25N',
			'525i M54',
			'530d N57',
			'530e B48X',
			'530i B48D',
			'530i N52N',
			'535i N55',
			'540i B58',
			'545i N62',
			'550i N52N',
			'550i N62N',
			'550i N63',
			'M5 S63M',
			'M5 S63N',
			'M5 S85',
		]
	},
	{
		serie: 'Serie 6',
		modelos: [
			'630i N52N',
			'630i N52N',
			'640i N55',
			'645Ci N62',
			'650i N62N',
			'M6 S63N',
		],
	},
	{
		serie: 'Serie 7',
		modelos: [
			'730d B57',
			'730d N57',
			'730i N52N',
			'740i B58C',
			'740i N54',
			'740i N62N',
			'745e B58X',
			'745i N62',
			'750i N63',
			'750Li N62N',
			'750Li N63'
		]
	},
	{
		serie: 'Serie 8',
		modelos: ['M850iX N63B']
	},
	{
		serie: 'X1',
		modelos: [
			'X1 18d N47N',
			'X1 18i N46N',
			'X1 20dX N47',
			'X1 20i B42',
			'X1 20i N20',
			'X1 25iX N52N',
			'X1 28iX N52N',
		]
	},
	{
		serie: 'X2',
		modelos: [
			'18i B38C',
			'20i B48C',
			'M3535iX B48E',
		]
	},
	{
		serie: 'X3',
		modelos: [
			'X3 2.0d N47',
			'X3 20dX B47',
			'X3 20dX N47N',
			'X3 2.5i M54',
			'X3 2.5si N52N',
			'X3 28iX N20',
			'X3 28iX N20',
			'X3 30dX B57',
			'X3 30dX N57N',
			'X3 3.0i M54',
			'X3 30iX B48',
			'X3 30iX B48D',
			'X3 3.0si N52N',
			'X3 35iX N55',
			'X3 M40iX B58',
			'X3 M S58',
		]
	}

]

const Repuestos = () => {

	const [serie, setSerie] = useState(0);
	const [modelo, setModelo] = useState(0);
	const [nombre, setNombre] = useState('');
	const [correo, setCorreo] = useState('');
	const [telefono, setTelefono] = useState('');
	const [terminos, setTerminos] = useState(false);
	const [mensaje, setMensaje] = useState('');
	const [chasis, setChasis] = useState('');

	const [mostrar, setMostrar] = useState(false)


	const enviarFormulario = () => {

		fetch(`${process.env.API}/api/ecommerce/correo`, {
			method: 'POST',
			headers: {
				"Content-Type": "application/json",
				accept: 'application/json'
			},
			body: JSON.stringify({
				marca: 'BMW',
				nombre,
				correo,
				telefono,
				serie: modelos[serie].serie,
				modelo: modelos[serie].modelos[modelo],
				chasis,
				mensaje
			})
		})
			.then(result => result.json())
			.then(result => {
				setMostrar(true);
			})
			.catch(e => console.log(e));

	}

	return (
		<Fragment>
			<Helmet>
				<title>Repuestos BMW</title>
				<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"/>
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
														<span style={{fontSize: '2.5rem'}}
															  className="text-primary bold">1</span>
													</ColLg12>
													<ColLg12>
														<p>
															Asegúrate de conocer el número de chasis o placa.
														</p>
													</ColLg12>
												</Row>
											</SmartBox>
											<SmartBox className="mt-5">
												<Row>
													<ColLg12>
														<span style={{fontSize: '2.5rem'}}
															  className="text-primary bold">2</span>
													</ColLg12>
													<ColLg12>
														<p>
															Contacta a nuestro asesor dando click en el botón.
															<img style={{width: '80px', marginLeft: '8px'}}
																 src="https://repuestos-landing.s3.us-east-2.amazonaws.com/Captura+de+pantalla+de+2020-08-28+15-19-09.png"/>
														</p>
													</ColLg12>
												</Row>
											</SmartBox>
										</div>
										<div className="col-lg-4 col-md-6 pull-lg-0">
											<SmartBox className="item-center">
												<Row>
													<ColLg12>
														<span style={{fontSize: '2.5rem'}}
															  className="text-primary bold">3</span>
													</ColLg12>
													<ColLg12>
														<p>
															Compra y recibe en tu casa.
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
										<p className="espacio-img" style={{textAlign: 'left'}}>
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
			<div style={{
				padding: '100px 0',
				background: 'rgba(236, 240, 241, 0.3)'
			}}>
				<Container>
					<Row>
						<ColLg12>
							<h1>Preguntas frecuentes</h1>
						</ColLg12>
						<ColLg12 style={{marginTop: '3rem'}}>
							<Accordion>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="text" eventKey="0">
											¿Necesitas asesoría?
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="0">
										<Card.Body>
											Dale click al botón que encontrarás dentro de la página, allí podrás
											comunicarte con uno de nuestros asesores para brindarte la información
											necesaria y resolver todas tus dudas.
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="text" eventKey="1">
											¿Cuál es el tiempo de garantía de tus repuestos?
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="1">
										<Card.Body>
											En BMW Shop te ofrecemos 24 meses de garantía por defecto del producto. (No
											incluye desgastes, daños por agentes externos y/o aboyaduras).
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="text" eventKey="2">
											¿Costo del envío?
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="2">
										<Card.Body>
											Si tu compra es igual o mayor a $200.000 es totalmente gratis el envío. Si
											por el contrario tu compra es menor al precio indicado, el costo del envío
											es de $16.000.
										</Card.Body>
									</Accordion.Collapse>
								</Card>
								<Card>
									<Card.Header>
										<Accordion.Toggle as={Button} variant="text" eventKey="3">
											¿Requieres una devolución?
										</Accordion.Toggle>
									</Card.Header>
									<Accordion.Collapse eventKey="3">
										<Card.Body>
											La devolución será válida solo por retracto. los repuestos no deben estar
											montados en el vehículo, estar en perfecto estado y en su empaque original.
										</Card.Body>
									</Accordion.Collapse>
								</Card>
							</Accordion>
						</ColLg12>
					</Row>
				</Container>
			</div>

			<div style={{padding: '100px 0',}}>
				<Container>
					<Row>
						<ColLg12>
							<h1>¿Tienes alguna consulta?</h1>
						</ColLg12>
						<div className="col-md-6" style={{marginTop: '30px'}}>
							<Form.Group controlId="nombre">
								<Form.Label>Nombre completo (*)</Form.Label>
								<Form.Control type="text" onChange={e => setNombre(e.target.value)}/>
							</Form.Group>
							<Form.Group controlId="formBasicEmail">
								<Form.Label>Correo electrónico (*)</Form.Label>
								<Form.Control type="email" onChange={e => setCorreo(e.target.value)}/>
							</Form.Group>

							<Form.Group controlId="formBasicPassword">
								<Form.Label>Teléfono (*)</Form.Label>
								<Form.Control type="number" onChange={e => setTelefono(e.target.value)}/>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlSelect1">
								<Form.Label>Serie</Form.Label>
								<Form.Control as="select" onChange={(e) => setSerie(e.target.value)}>
									{
										modelos.map((item, i) => <option value={i}>{item.serie}</option>)
									}
								</Form.Control>
							</Form.Group>
							<Form.Group controlId="exampleForm.ControlSelect2">
								<Form.Label>Modelo</Form.Label>
								<Form.Control as="select" onChange={e => setModelo(e.target.value)}>
									{
										modelos[serie].modelos.map((item, i) => <option value={i}>{item}</option>)
									}
								</Form.Control>
							</Form.Group>
							<Form.Group>
								<Form.Label>Numero de chasis</Form.Label>
								<Form.Control type="text" onChange={e => setChasis(e.target.value)}/>
							</Form.Group>
							<Form.Group>
								<Form.Label>Mensaje (*)</Form.Label>
								<Form.Control as="textarea" rows="3" onChange={e => setMensaje(e.target.value)}/>
							</Form.Group>
							<Form.Group controlId="formBasicCheckbox">
								<Form.Check type="checkbox" label="Acepto terminos y condiciones."
											onChange={e => setTerminos(e.target.checked)}/>
							</Form.Group>
							<Button disabled={!(terminos == true
								&& nombre.trim() !== '' && nombre.length > 5
								&& correo.trim() !== '' && /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(correo)
								&& telefono.trim() !== '' && telefono.length > 6
								&& mensaje.trim() !== '')} variant="primary" type="submit"
									onClick={() => enviarFormulario()}>
								Enviar
							</Button>
						</div>
					</Row>
				</Container>

			</div>

			<FeedbackModal toggleModal={() => {
				window.location.reload();
			}} title='Pronto nos pondremos en contacto' isVisible={mostrar}/>

		</Fragment>
	)

}

export default Repuestos;
