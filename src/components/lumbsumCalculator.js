import { Fragment } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ApexChart } from "../Charts/ApexChart";

const LumpSumCalculator = () => {
    const [initial, setInitial] = useState(0);
    const [interest, setInterest] = useState(0);
    const [duration, setDuration] = useState(0);
    const [result, setResult] = useState(0);
    const [chartValue, setChartValue] = useState([100, 0]);
    const [chartLabel, setChartLabel] = useState(["Initial Amount", "LumbSum Cost"]);

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
            var ls = 0;
            ls = initial * Math.pow((1 + interest / 100), duration);
            setResult(ls.toFixed(2));
            setChartValue([Number(initial), Number(ls.toFixed(2))]);
        }
    }
    return (
        <Fragment>
            <h2 className="header-calc">LUMPSUM CALCULATOR</h2>

            <Container fluid>
                <Row xs={1} md={2} className="row-span">
                    <Col md={10} className="col-span">
                        <p>
                            A lumpsum calculator is an online tool that helps you
                            compute an estimated value of your lumpsum mutual fund investment.
                            It is a quick and easy way for you to calculate the returns on your investment.
                            By using the lump sum investment calculator, you can find the expected value of your mutual
                            fund investment at the end of the investment period.
                            This can help you understand whether your lumpsum investment will meet your financial goal.
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

                        <br></br> <br></br><br></br>
                        <ApexChart series={chartValue} label={chartLabel}></ApexChart>
                        {result !== 0 && <h3>Calculated LumpSum(Mutual funds) Value : {result} </h3>}
                    </Col>
                </Row>
            </Container>

        </Fragment>
    );
}

export default LumpSumCalculator;