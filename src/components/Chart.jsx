import React from 'react';
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import Card from 'react-bootstrap/Card';
// import HC_more from "highcharts/highcharts-more";
import highcharts3d from "highcharts/highcharts-3d";

// HC_more(Highcharts);
highcharts3d(Highcharts);

function Donutchart({ title, chartTitle }) {

    const options = {
        title: {
            text: 'Beijing 2022 gold medals by country',
            // align: 'left'
        },
        title: {
            text: !chartTitle ? 'Donute Title' : chartTitle,
            fontSize: '10px',
            fontWeight: 'bold',
            align: 'center',
            verticalAlign: 'middle',
            y: 25
        },
        // accessibility: {
        //     description: 'This is the most used desktop screen reader'
        // },

        chart: {
            type: 'pie',
            options3d: {
                enabled: false,
                alpha: 100
            }
        },

        // subtitle: {
        //     text: '3D donut in Highcharts',
        //     align: 'left'
        // },
        plotOptions: {
            pie: {
                innerSize: 120,
                depth: 45
            }
        },
        // plotOptions: {
        //     pie: {
        //         allowPointSelect: true,
        //         cursor: 'pointer',
        //         depth: 35,
        //         dataLabels: {
        //             enabled: true,
        //             format: '{point.name}'
        //         }
        //     }
        // },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        series: [{
            name: 'Medals',
            data: [
                ['Norway', 16],
                ['Germany', 12],
                ['USA', 8],
                ['Sweden', 8],
                ['Netherlands', 8],
                ['ROC', 6],
                ['Austria', 7],
                ['Canada', 4],
                ['Japan', 3]

            ]
        }],

        credits: {
            enabled: false
        },
        accessibility: {
            enabled: false
        }
    };
    return (
        <React.Fragment >
            <div style={{ padding: '10px' }}>
                <Card variant="standerd" sx={{ borderRadius: '12px', border: '1px solid #E6EAEF' }}>
                    <div className='title' style={{ fontSize: 22, textAlign: 'center', fontWeight: '700' }}>
                        {title}
                    </div>
                    <HighchartsReact highcharts={Highcharts} options={options} />
                </Card>
            </div>

        </React.Fragment >
    )
}

export default Donutchart; 