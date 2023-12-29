import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const About = () => {
    return (
        <Container fluid className="header-calc">
            <Row xs={1} md={2} className="row-span">
                <Col md={10} className="col-span">
                    <h1 >About US</h1>
                    <p>
                        This Application is developed for learning purpose.<br></br>
                        This application supports mobile view too. The types of calculations used in this application are useful in several ways.
                        Eventhough the application is created for developmental purposed, it is useful for financial calculations and the calculations are very accurate.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default About;