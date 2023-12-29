import { Fragment, useEffect } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import Slider from "react-input-slider";
import { ApexChart } from "../Charts/ApexChart";

const CAGRCalculator = () => {
    const [initial, setInitial] = useState(0);
    const [finalCost, setFinalCost] = useState(0);
    const [duration, setDuration] = useState(0);
    const [result, setResult] = useState(0);
    const [chartValue, setChartValue] = useState([100, 0]);
    const [chartLabel, setChartLabel] = useState(["Initial Amount", "Final Amount"]);
    const validateInputs = () => {
        if (initial === "" || finalCost === "" || duration === "") {
            alert("Please Enter all three values!");
        }
        else if (initial === 0 || finalCost === 0 || duration === 0) {
            alert("Values should not be equal to 0!");
        }
        else
            return true;
    }
    const calculateValues = () => {
        if (validateInputs()) {
            var cagr = 0;
            cagr = Math.pow((finalCost / initial), (1 / duration));
            cagr = (cagr - 1) * 100;

            setResult(cagr.toFixed(2));
            setChartValue([Number(initial), Number(finalCost)]);
        }
    }
    return (
        <Fragment>

            <h2 className="header-calc">(Compound Annual Growth Rate)CAGR CALCULATOR</h2>

            <h1></h1>
            <Container fluid>
                <Row xs={1} md={2} className="row-span">
                    <Col md={10} className="col-span">
                        <p>
                            The compound annual growth rate (CAGR) is the rate of return (RoR)
                            that would be required for an investment to grow from its beginning balance
                            to its ending balance, assuming the profits were reinvested at the end of each
                            period of the investment’s life span.
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
                                    <td>Final Cost :</td>
                                    <td><input type="text" value={finalCost} onChange={e => setFinalCost(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Duration (In  Years) :</td>
                                    <td><input type="range" value={duration} onChange={e => setDuration(e.target.value)}></input>{duration}</td>
                                </tr>
                                <tr>
                                    <td rowSpan={2} ><Button variant="success" onClick={calculateValues}>Submit</Button></td>
                                </tr>
                            </tbody>
                        </table>
                    </Col>
                    <Col md={5} className="col-span">
                        <br></br> <br></br><br></br>
                        <ApexChart series={chartValue} label={chartLabel}></ApexChart>
                        {result != 0 && <h3>Calculated CAGR : {result} %</h3>}
                    </Col>
                </Row>
            </Container>


        </Fragment>
    );
}

export default CAGRCalculator;