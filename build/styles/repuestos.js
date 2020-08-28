import styled from 'styled-components';


export const HeroContent = styled.section`
    width: 100%;
    color: rgba(34, 34, 34, 0.8);
    position: relative;
    padding-top: 230px;
    text-align: left;
    display: block;
    max-width: 1440px;
    margin-left: auto;
    margin-right: auto;
    box-sizing: border-box;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: #292b2c;
    & .text-side {
    	margin-top: 0;
    }
    .fondo-header{
    	width: 100%;
		height: 100%;
		background: url(https://repuestos-landing.s3.us-east-2.amazonaws.com/banner-bmw.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		position: absolute;
		top: 0;
		max-height: 650px;
    }
    .fondo-header::before{
    	content:'';
    	background: rgba(0,0,0,0.35);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
    }
    h1 {
    	line-height: 1.3!important;
    	font-size: 3rem!important;
    	margin: 0;
    	color: inherit;
    	box-sizing: border-box;
		margin-bottom: 10px;
    }
    h2{
    	font-size: 3rem;
    	margin: 0;
    	line-height: 1.1;
    	color: inherit;
    }
    span.text-primary {
    	color:#0166b1!important;
    	font-weight: 600;
    }
    .bold {
    	font-weight: 600!important;
    }
    .text-uppercase{
    	text-transform: uppercase!important;
    }
    .mt-2{
    	font-size: 1.5rem;
    	margin-top: .5rem!important;
    	margin: 0;
    	color: white;
    }
    .mt-5 {
    	margin-top: 3rem!important;
	}
    
    .mb-5 {
    	margin-bottom: 3rem!important;
	}
	.item-center{
		margin-top: 10rem;
	}
	.thin{
		font-size: 18px;
		font-size: 1rem;
		color: #7F8C8D;
		font-weight: 200;
		margin: 20px 0;
    }
    
    .box-overlay {
		position: absolute;
		width: 100%;
		height: 65%;
		top: 56%;
		left: 0;
		background: #fafafa;
		z-index: 0;
    }
    
    * {
    	box-sizing: border-box;
    }
	
	
	.col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9 {
    	position: relative;
		width: 100%;
		min-height: 1px;
    	padding-right: 15px;
    	padding-left: 15px;
    }
	
    @media (min-width: 768px){
		.col-md-6 {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 50%;
			-ms-flex: 0 0 50%;
			flex: 0 0 50%;
			max-width: 50%;
		}
	}
	@media (min-width: 992px){
		.pull-lg-0 {
			right: auto;
		}
	}
    @media (min-width: 992px){
    	.push-lg-2 {
    		left: 16.666667%;
		}
	}
	@media (min-width: 992px){
		.col-lg-4 {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 33.333333%;
			-ms-flex: 0 0 33.333333%;
			flex: 0 0 33.333333%;
			max-width: 33.333333%;
		}
	}
	
`;

export const Inner = styled.div``;

export const Container = styled.div`
	position: relative;
    margin-left: auto;
    margin-right: auto;
    padding-right: 15px;
    padding-left: 15px;
    box-sizing: border-box;
    @media (min-width: 576px){
    	& {
    		width: 540px;
			max-width: 100%;
			padding-right: 15px;
			padding-left: 15px;
		}
    }
    @media (min-width: 768px){
		& {
			width: 720px;
			max-width: 100%;
			padding-right: 15px;
			padding-left: 15px;
		}
	}
	@media (min-width: 992px){
		& {
			width: 960px;
			max-width: 100%;
			padding-right: 15px;
			padding-left: 15px;
    	}
	}	
	@media (min-width: 1200px){
		& {
			width: 1140px;
			max-width: 100%;
			padding-right: 15px;
			padding-left: 15px;
    	}
	}
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
    box-sizing: border-box;
`

export const ColLg12 = styled.div`
	position: relative;
    width: 100%;
    min-height: 1px;
	padding-right: 15px;
	padding-left: 15px;
	box-sizing: border-box;
	@media (min-width: 992px){
		-webkit-box-flex: 0;
		-webkit-flex: 0 0 100%;
		-ms-flex: 0 0 100%;
		flex: 0 0 100%;
		max-width: 100%;
	}
`

export const Boxes = styled.div`
	position: relative;
    top: 10rem;
    z-index: 1;
    box-sizing: border-box;
`

export const SmartBox = styled.div`
	text-align: center;
    padding: 30px;
    background: #ffffff;
    border-radius: 4px;
    box-shadow: 0 15px 24px rgba(0, 0, 0, 0.02), 0 19px 76px rgba(0, 0, 0, 0.05);
    box-sizing: border-box;
    span {
    	font-size: 4rem;
    }
    p {
    	font-weight: 300;
		font-size: 12px;
		font-size: 0.9rem;
		margin: 20px 10px;
    }
`

export const Features = styled.section`
	padding-top: 100px;
    padding-bottom: 100px;
    background: #ffffff;
    box-sizing: border-box;
    display: block;
    content: "";
    clear: both;
    position: relative;
    margin-top: 70px;
    color: black;
    
    h2 {
    	text-transform: inherit!important;
    }
    
    *{
    	box-sizing: border-box;
    }
    
    .mb-5 {
    	margin-bottom: 3rem!important;
    }
    
    .bold{
    	font-weight: bold;
    }
    
    .col, .col-1, .col-10, .col-11, .col-12, .col-2, .col-3, .col-4, .col-5, .col-6, .col-7, .col-8, .col-9, .col-lg, .col-lg-1, .col-lg-10, .col-lg-11, .col-lg-12, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-md, .col-md-1, .col-md-10, .col-md-11, .col-md-12, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-sm, .col-sm-1, .col-sm-10, .col-sm-11, .col-sm-12, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-xl, .col-xl-1, .col-xl-10, .col-xl-11, .col-xl-12, .col-xl-2, .col-xl-3, .col-xl-4, .col-xl-5, .col-xl-6, .col-xl-7, .col-xl-8, .col-xl-9 {
    	position: relative;
		width: 100%;
		min-height: 1px;
    	padding-right: 15px;
    	padding-left: 15px;
    }
    
    @media (min-width: 576px){
		.mb-sm-5 {
			margin-bottom: 3rem!important;
		}
	}
    @media (min-width: 768px){
    	.espacio-img{
    		margin-bottom: 85px;
    	}
		.col-md-6 {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 50%;
			-ms-flex: 0 0 50%;
			flex: 0 0 50%;
			max-width: 50%;
		}
	}
	@media (min-width: 992px){
		.col-lg-6 {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 50%;
			-ms-flex: 0 0 50%;
			flex: 0 0 50%;
			max-width: 50%;
		}
	}
	@media (min-width: 992px){
		.col-lg-4 {
			-webkit-box-flex: 0;
			-webkit-flex: 0 0 33.333333%;
			-ms-flex: 0 0 33.333333%;
			flex: 0 0 33.333333%;
			max-width: 33.333333%;
		}
	}
`
