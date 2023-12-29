import React, { useState } from "react";
import ReactApexChart from "react-apexcharts";

export const ApexChart = (props)=> {
    const [spec,setSpec]=useState({
            options: {
                chart: {
                    type: 'donut',
                    foreColor: 'white'
                },
                labels: props.label,                 
                responsive: [{
                    breakpoint: 400,
                    options: {
                        chart: {
                            width: 300
                        },
                        legend: {
                            position: 'bottom'
                        }
                    }
                }]
            }});



 
        return (


            <div id="chart">
                <ReactApexChart options={spec.options} series={props.series} label={props.label} width="350px" type="donut"/>
            </div>
        );
    
}
