import { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";

const Home = () => {
    return (
        <Container fluid className="header-calc">
            <Row xs={1} md={2} className="row-span">
                <Col md={10} className="col-span">
                    <h1 >Finance Calculators</h1>
                    <p>
                        This Application is developed for learning purpose.<br></br>
                        This Application contains below calculator types. <br></br><br></br>
                        CAGR Calculator, EBITDA Calculator, Future Value Calculator, LumbSum Calculator, Simple Interest/ Compound Interest Calculator, Gold Rate Calculation<br></br><br></br>
                        You need to enter the values and click on Submit to get the result.<br></br><br></br>
                        The results can also be viewed in the charts to compare better.<br></br>
                        This application supports mobile view too. The types of calculations used in this application are useful in several ways.
                        Eventhough the application is created for developmental purposed, it is useful for financial calculations and the calculations are very accurate.
                    </p>
                </Col>
            </Row>
        </Container>
    );
}

export default Home;