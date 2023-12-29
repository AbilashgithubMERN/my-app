import { Fragment } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ApexChart } from "../Charts/ApexChart";

const EBITDA = () => {
    const [initial, setInitial] = useState(0);
    const [rawMaterial, setRawMaterial] = useState(0);
    const [empCost, setEmpCosts] = useState(0);
    const [otherCost, setOtherCosts] = useState(0);
    const [result, setResult] = useState(0);
    const [margin, setMargin] = useState(0);
    const [chartValue, setChartValue] = useState([100, 0]);
    const [chartLabel, setChartLabel] = useState(["Initial Cost", "EBITDA"]);
    const validateInputs = () => {
        if (initial === "" || rawMaterial === "" || empCost === "") {
            alert("Please Enter all three values!");
        }
        else if (initial === 0 || rawMaterial === 0 || empCost === 0) {
            alert("Values should not be equal to 0!");
        }
        else
            return true;
    }
    const calculateValues = () => {
        if (validateInputs()) {
            var fv = 0;
            fv = initial - rawMaterial - empCost - otherCost;
            setResult(fv.toFixed(2));
            setMargin(100 * fv / initial);
            setChartValue([Number(initial), Number(fv.toFixed(2))]);
        }
    }
    return (
        <Fragment>
            <h2 className="header-calc">EBITDA CALCULATOR</h2>

            <Container fluid>
                <Row xs={1} md={2} className="row-span">
                    <Col md={10} className="col-span">
                        <p>
                            The EBITDA metric is a variation of operating income (EBIT) that
                            excludes certain non-cash expenses. The purpose of these deductions
                            is to remove the factors that business owners have discretion over,
                            such as debt financing, capital structure, methods of depreciation,
                            and taxes (to some extent). It can be used to showcase a firm’s financial
                            performance without the impact of its capital structure.
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
                                    <td>Raw Material Cost :</td>
                                    <td><input type="text" value={rawMaterial} onChange={e => setRawMaterial(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Employee Cost :</td>
                                    <td><input type="text" value={empCost} onChange={e => setEmpCosts(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Other Cost :</td>
                                    <td><input type="text" value={otherCost} onChange={e => setOtherCosts(e.target.value)}></input></td>
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
                        {result !== 0 &&
                            <Fragment>
                                <h3>Calculated EBITDA  : {result} </h3>
                                <h3>Calculated EBITDA Margin(FV) : {margin} %</h3>
                            </Fragment>}
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
}

export default EBITDA;