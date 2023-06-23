import React from "react";
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare, FaYoutubeSquare } from 'react-icons/fa';
import { TbTruckReturn } from "react-icons/tb";
import { Box, Container, Row, Column,  Heading } from "./FooterStyles.js";
import Typography from '@mui/material/Typography';
import { Link, } from 'react-router-dom';


function Copyright() {
	return (
        <Typography variant="body2" color="#2F58CD" sx={{ display: "flex", padding: "15px", fontWeight: "400", fontSize: "15px", lineHeight: "2", fontFamily: "Rubik", justifyContent : "center" }}>
			{'Copyright © '}
			2023 Yuvi
		</Typography>
	);
}

const Footer = () => {
	return (
		<>
			<Box>
				<Container>
					<Row>
						<Column>
							<Heading>About</Heading>
							{/* <FooterLink href="#">About Us</FooterLink> */}
							<Link to="/about" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>About Us</Link>
							<Link to="/contact" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Contact Us</Link>
							<Link to="/terms&conditions" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Terms & Conditions</Link>
						</Column>
						<Column>
							<Heading>Products</Heading>
							<Link to="/categories/men" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Men</Link>
							<Link to="/categories/women" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Women</Link>
							<Link to="/categories/kids" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Kids</Link>
						</Column>
						<Column>
							<Heading>Help</Heading>
							<Link to="/account/payments" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Payments</Link>
							<Link to="/account/shipping" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>Shipping</Link>
							<Link to="/faq" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>FAQ</Link>
						</Column>
						<Column style={{ display: "inline-block" }}>
							<Heading>Connect</Heading>
							<Link to="/facebook" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaFacebookSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
							<Link to="/instagram" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaInstagramSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
							<Link to="/twitter" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaTwitterSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
							<Link to="/youtube" style={{ color: "lightgrey", marginBottom: "20px", fontSize: "18px", textDecoration: "none" }}>
								<FaYoutubeSquare style={{ margin: "0px 15px 0px 0px", fontSize: "24px" }} />
							</Link>
						</Column>
						<Column style={{}}>
							<div style={{ margintop: "8px" }}>
								<p style={{ color: "lightgrey", display: "flex", fontWeight: "bold" }}>
									<img src="https://constant.myntassets.com/web/assets/img/6c3306ca-1efa-4a27-8769-3b69d16948741574602902452-original.png" alt="100%" style={{ width: "48px", height: "40px", marginRight: "10px" }} />100% ORIGINAL guarantee for all products
								</p>
								<p style={{ color: "lightgrey", display: "flex", fontWeight: "bold" }}>
									{/* <img src="https://constant.myntassets.com/web/assets/img/ef05d6ec-950a-4d01-bbfa-e8e5af80ffe31574602902427-30days.png" style={{ width: "48px", height: "40px", marginRight: "19px" }} /> */}
									<TbTruckReturn style={{ width: "70px", height: "40px", marginRight: "19px" }} />Return within 30days of receiving your order
								</p>
							</div>
						</Column>
					</Row>
				</Container>
				<div style={{
					backgroundColor: "#F4EDF2",
					paddingLeft: "30px", paddingRight: "30px",
					textAlign : "center"
				}}>
					<Copyright />
				</div>
			</Box>
		</>
	);
};
export default Footer;
