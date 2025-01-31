import { ApexOptions } from "apexcharts";

export const AdmissionRatioChart : ApexOptions = {
        series: [
            {
                name: '',
                data: [30, 30, 32, 30, 31, 33, 35, 31, 33, 35, 34, 31, 33, 33, 35, 34, 33, 35, 32, 31, 34, 35, 33, 32, 32, 31],
            },
        ],
        chart: {
            type: 'area',
            height: 84,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        grid: {
            show: false,
            borderColor: 'var(--light)',
            padding: {
                top: 5,
                right: 0,
                bottom: -30,
                left: 0,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#015DBE'],
        xaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            opposite: false,
            min: 29,
            max: 35,
            logBase: 100,
            tickAmount: 4,
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: undefined,
            labels: {
                show: false,
                offsetX: -12,
                offsetY: -15,
                rotate: 0,
            },
        },
        legend: {
            horizontalAlign: 'left',
        },
      };

      export const OrderValueChart : ApexOptions = {
            series: [
                {
                    name: '',
                    data: [31, 32, 34, 33, 30, 33, 32, 35, 33, 35, 32, 34, 32, 31, 35, 34, 31, 32, 35, 33, 34, 35, 34, 33, 32, 32],
                },
            ],
            chart: {
                type: 'area',
                height: 84,
                toolbar: {
                    show: false,
                },
            },
            stroke: {
                width: 2,
                curve: 'smooth'
            },
            grid: {
                show: false,
                borderColor: 'var(--light)',
                padding: {
                    top: 5,
                    right: 0,
                    bottom: -30,
                    left: 0,
                },
            },
            fill: {
                type: "gradient",
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.5,
                    opacityTo: 0.1,
                    stops: [0, 80, 100]
                }
            },
            dataLabels: {
                enabled: false,
            },
            colors: ['#FFB70D'],
            xaxis: {
                labels: {
                    show: false,
                },
                tooltip: {
                    enabled: false,
                },
                axisBorder: {
                    show: false,
                },
                axisTicks: {
                    show: false,
                },
            },
            yaxis: {
                opposite: false,
                min: 29,
                max: 35,
                logBase: 100,
                tickAmount: 4,
                forceNiceScale: false,
                floating: false,
                decimalsInFloat: undefined,
                labels: {
                    show: false,
                    offsetX: -12,
                    offsetY: -15,
                    rotate: 0,
                },
            },
            legend: {
                horizontalAlign: 'left',
            },
            responsive: [
          
            ],
          };

export const DailyOrderChart : ApexOptions = {
        series: [
            {
                name: '',
                data: [33, 31, 35, 32, 33, 33, 32, 34, 35, 35, 33, 32, 33, 31, 34, 34, 32, 33, 32, 33, 35, 35, 32, 31, 32, 34],
            },
        ],
        chart: {
            type: 'area',
            height: 84,
            toolbar: {
                show: false,
            },
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        grid: {
            show: false,
            borderColor: 'var(--light)',
            padding: {
                top: 5,
                right: 0,
                bottom: -30,
                left: 0,
            },
        },
        fill: {
            type: "gradient",
            gradient: {
                shadeIntensity: 1,
                opacityFrom: 0.5,
                opacityTo: 0.1,
                stops: [0, 90, 100]
            }
        },
        dataLabels: {
            enabled: false,
        },
        colors: ['#61AE41'],
        xaxis: {
            labels: {
                show: false,
            },
            tooltip: {
                enabled: false,
            },
            axisBorder: {
                show: false,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            opposite: false,
            min: 29,
            max: 35,
            logBase: 100,
            tickAmount: 4,
            forceNiceScale: false,
            floating: false,
            decimalsInFloat: undefined,
            labels: {
                show: false,
                offsetX: -12,
                offsetY: -15,
                rotate: 0,
            },
        },
        legend: {
            horizontalAlign: 'left',
        },
        responsive: [
      
        ],
      };
