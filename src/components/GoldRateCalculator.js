import { Fragment } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ApexChart } from "../Charts/ApexChart";

const GoldRateCalculator = () => {
    const [goldRate, setGoldRate] = useState(0);
    const [goldWeight, setGoldWeight] = useState(0);
    const [wastage, setWastage] = useState(0);
    const [making, setMaking] = useState(0);
    const [purity, setPurity] = useState(91.6);
    const [total, setTotal] = useState(0);
    const [chartValue, setChartValue] = useState([100, 0, 0]);
    const [chartLabel, setChartLabel] = useState(["Gold Cost", "Wastage and GST Cost", "Total Cost"]);

    const validateInputs = () => {
        if (goldRate === "" || goldWeight === "" || wastage === "" || purity === "") {
            alert("Please Enter all three values!");
        }
        else if (goldRate === 0 || goldWeight === 0 || wastage === 0 || purity === 0) {
            alert("Values should not be equal to 0!");
        }
        else if (wastage <= 0) {
            alert("Wastage should be greater than zero");
        }
        else if (purity <= 0) {
            alert("Purity should be greater than zero");
        }
        else if (making < 0) {
            alert("Making should be greater than zero");
        }
        else
            return true;
    }
    const calculateValues = () => {
        if (validateInputs()) {
            var gr = 0, gst = 3;
            gr = goldRate * (purity / 91.6) * goldWeight * ((Number(wastage) + gst + 100) / 100) + Number(making);
            setTotal(Number(gr).toFixed(2));
            setChartValue([Number(goldRate * purity * goldWeight / 100), Number((goldWeight / 100) * purity * wastage * goldRate / 100), Number(gr.toFixed(2))]);
        }
    }
    return (
        <Fragment>
            <h2 className="header-calc">GOLD ORNAMENT PRICE CALCULATOR</h2>
           
            <Container fluid>
                <Row xs={1} md={2} className="row-span">
                    <Col md={10} className="col-span">
                        <p>
                            Gold Rate calculation is the calculation of total amount of money a customer need to pay
                            to the vendor to get gold Ornament in a specific design. For making a gold ornament the vendor has
                            making charges, wastage of gold, Gst that is paid to the government and the purity of gold. So with these
                            charges, the vendor calculated the rate of gold.
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row xs={1} md={2} className="row-span">
                    <Col md={5} className="col-span">
                        <table className="table-form">
                            <tbody>
                                <tr>
                                    <td>Gold Rate Per Gram :</td>
                                    <td><input type="text" value={goldRate} onChange={e => setGoldRate(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Gold Weight :</td>
                                    <td><input type="text" value={goldWeight} onChange={e => setGoldWeight(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Wastage</td>
                                    <td><input type="range" value={wastage} onChange={e => setWastage(e.target.value)}></input>{wastage}</td>
                                </tr>
                                <tr>
                                    <td>Making Charges</td>
                                    <td><input type="making" value={making} onChange={e => setMaking(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Purity</td>
                                    <td><input type="range" value={purity} onChange={e => setPurity(e.target.value)}></input>{purity}</td>
                                </tr>
                                <tr>
                                    <td><Button onClick={calculateValues}>Submit</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={5} className="col-span">
                        <br></br> <br></br><br></br>
                        <ApexChart series={chartValue} label={chartLabel}></ApexChart>
                        {total !== 0 &&
                            <Fragment>
                                <h3>Calculated Wastage Price : {Number(goldRate * goldWeight * purity * wastage / (91.6 * 100)).toFixed(2)} </h3>
                                <h3>Calculated Gold Ornament Price : {total} </h3>
                            </Fragment>
                        }
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
}

export default GoldRateCalculator;