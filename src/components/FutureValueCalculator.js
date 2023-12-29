import { Fragment } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ApexChart } from "../Charts/ApexChart";

const FVCalculator = () => {
    const [initial, setInitial] = useState(0);
    const [interest, setInterest] = useState(0);
    const [duration, setDuration] = useState(0);
    const [result, setResult] = useState(0);
    const [chartValue, setChartValue] = useState([100, 0]);
    const [chartLabel, setChartLabel] = useState(["Initial Cost", "Future Value"]);

    const validateInputs = () => {
        if (initial === "" || interest === "" || duration === "") {
            alert("Please Enter all three values!");
        }
        else if (initial === 0 || interest === 0 || duration === 0) {
            alert("Values should not be equal to 0!");
        }
        else
            return true;
    }
    const calculateValues = () => {
        if (validateInputs()) {
            var fv = 0;
            fv = initial * Math.pow((1 + interest / 100), duration);
            setResult(fv.toFixed(2));
            setChartValue([Number(initial), Number(fv.toFixed(2))]);
        }
    }
    return (
        <Fragment>
            <h2 className="header-calc">(Future Value)FV CALCULATOR</h2>

            <Container fluid>
                <Row xs={1} md={2} className="row-span">
                    <Col md={10} className="col-span">
                        <p>
                            The future value formula is based on two main assumptions. 
                            First, it assumes that the current value of the asset will be 
                            untouched during the period of the investment, and will be delivered 
                            as a lump sum, or single payment, in the future. Second, the future
                            value formula is based on a constant growth rate during the investment 
                            period. In addition to that, the formula used to calculate the future
                             value is based on the type of interest being earned.
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row xs={1} md={2} className="row-span">
                    <Col md={5} className="col-span">
                        <table className="table-form">
                            <tbody>
                                <tr>
                                    <td>Initial Cost :</td>
                                    <td><input type="text" value={initial} onChange={e => setInitial(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Interest :</td>
                                    <td><input type="range" value={interest} onChange={e => setInterest(e.target.value)}></input>{interest}</td>
                                </tr>
                                <tr>
                                    <td>Duration (In  Years) :</td>
                                    <td><input type="range" value={duration} onChange={e => setDuration(e.target.value)}></input>{duration}</td>
                                </tr>
                                <tr>
                                    <td><Button onClick={calculateValues}>Submit</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={5} className="col-span">
                        <ApexChart series={chartValue} label={chartLabel}></ApexChart>
                        <br></br> <br></br><br></br>
                        {result !== 0 && <h3>Calculated Future Value(FV) : {result} </h3>}
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
}

export default FVCalculator;