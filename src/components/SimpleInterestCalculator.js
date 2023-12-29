import { Fragment } from "react";
import { useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ApexChart } from "../Charts/ApexChart";

const interestTypes = [
    'simple',
    'compound'
]

const SimpleInterest = () => {
    const [initial, setInitial] = useState(0);
    const [interest, setInterest] = useState(0);
    const [duration, setDuration] = useState(0);
    const [result, setResult] = useState(0);
    const [total, setTotal] = useState(0);
    const [type, setType] = useState('simple');
    const [frequency, setFrequency] = useState(1);
    const [chartValue, setChartValue] = useState([100, 0, 0]);
    const [chartLabel, setChartLabel] = useState(["Initial Amount", "Final Amount", "Interest"]);

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
            var finalValue = 0, totalValue = 0;
            if (type === 'simple') {
                finalValue = initial * interest * duration;
                finalValue = finalValue / 100;
            }
            else {
                finalValue = initial * Math.pow((1 + (interest / (frequency * 100))), frequency * duration);
            }

            setResult(finalValue.toFixed(2));
            totalValue = Number(initial) + finalValue;
            setTotal(totalValue.toFixed(2));
            setChartValue([Number(initial), Number(totalValue.toFixed(2)), Number(finalValue.toFixed(2))]);
        }
    }
    return (
        <Fragment>
            <h2 className="header-calc">Simple/Compound Interest CALCULATOR</h2>
            <br></br>

            <Container fluid>
                <Row xs={1} md={2} className="row-span">
                    <Col md={10} className="col-span">
                        <h3>Simple Interest</h3>
                        <p>Simple interest is an interest charge that borrowers pay lenders for a loan.
                            It is calculated using the principal only and does not include compounding interest.
                            Simple interest relates not just to certain loans. It's also the type of interest
                            that banks pay customers on their savings accounts.
                        </p>
                        <h3>Compound Interest</h3>
                        <p>
                            Compound interest is interest accumulated from a principal sum and previously accumulated
                            interest. It is the result of reinvesting or retaining interest that would otherwise be
                            paid out, or of the accumulation of debts from a borrower.
                            <br></br>
                            Compound interest is contrasted with simple interest, where previously accumulated
                            interest is not added to the principal amount of the current period. Compounded interest
                            depends on the simple interest rate applied and the frequency at which the interest is
                            compounded
                        </p>
                    </Col>
                </Row>
                <br></br>
                <Row xs={1} md={2} className="row-span">
                    <Col md={5} className="col-span">
                        <table className="table-form">
                            <tbody>
                                <tr>
                                    <td>Interest Type :</td>
                                    <td><select value={type} onChange={e => (setType(e.target.value), setResult(0))}>
                                        {interestTypes.map(item => {
                                            return <option key={item} value={item}>{item.toUpperCase()}</option>
                                        })}
                                    </select></td>
                                </tr>
                                <tr>
                                    <td>Principal Amount :</td>
                                    <td><input type="text" value={initial} onChange={e => setInitial(e.target.value)}></input></td>
                                </tr>
                                <tr>
                                    <td>Rate Of Interest :</td>
                                    <td><input type="range" value={interest} onChange={e => setInterest(e.target.value)}></input>{interest}</td>
                                </tr>
                                <tr>
                                    <td>Duration (In Years):</td>
                                    <td><input type="range" value={duration} onChange={e => setDuration(e.target.value)}></input>{duration}</td>
                                </tr>
                                {type === 'compound' &&
                                    <tr>
                                        <td>Compound Frequency :</td>
                                        <td><select value={frequency} onChange={e => setFrequency(e.target.value)}>
                                            <option value="1">Annual</option>
                                            <option value="2">Half Yearly</option>
                                            <option value="4">Quarterly</option>
                                        </select>
                                        </td>
                                    </tr>
                                }
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
                                <h3>Calculated Net Interest : {result} </h3>
                                <br></br>
                                <h3>Calculated Net Amount after {duration} Years : {(total)}</h3>
                            </Fragment>
                        }
                    </Col>
                </Row>
            </Container>
        </Fragment>
    );

}

export default SimpleInterest;