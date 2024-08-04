
const HomeImage = document.getElementById("home");
const TransferImage = document.getElementById("transfer");
const UserImage = document.getElementById("User");
const EconomicImage = document.getElementById("Economic");
const CreditImage = document.getElementById("Credit");
const LoanImage = document.getElementById("Loan");
const ServiceImage = document.getElementById("Service");
const EconometricsImage = document.getElementById("Econometrics");
const SettingsImage = document.getElementById("Settings");
const linke = document.getElementById("link1");
const linke2 = document.getElementById("link2");
const linke3 = document.getElementById("link3");
const linke4 = document.getElementById("link4");
const linke5 = document.getElementById("link5");
const linke6 = document.getElementById("link6");
const linke7 = document.getElementById("link7");
const linke8 = document.getElementById("link8");
const linke9 = document.getElementById("link9");
function HomeHover() {
    HomeImage.setAttribute("src", "./image/home 2.svg");
    linke.style.color = "#2D60FF";
}
function DisHomeHover() {
    HomeImage.setAttribute("src", "./image/home.svg");
    linke.style.color = "#B1B1B1";
}
// =============================================================
function TransferHover() {
    TransferImage.setAttribute("src", "./image/Transfer 2.svg");
    linke2.style.color = "#2D60FF";
}
function DisTransferHover() {
    TransferImage.setAttribute("src", "./image/Transfer 1.svg");
    linke2.style.color = "#B1B1B1";
}
// =============================================================
function UserHover() {
    UserImage.setAttribute("src", "./image/user 3 2.svg");
    linke3.style.color = "#2D60FF";
}
function DisUserHover() {
    UserImage.setAttribute("src", "./image/user 3 1.svg");
    linke3.style.color = "#B1B1B1";
}
// =============================================================
function EconomicHover() {
    EconomicImage.setAttribute("src", "./image/economic-investment 2.svg");
    linke4.style.color = "#2D60FF";
}
function DisEconomicHover() {
    EconomicImage.setAttribute("src", "./image/economic-investment 1.svg");
    linke4.style.color = "#B1B1B1";
}
// =============================================================
function CreditHover() {
    CreditImage.setAttribute("src", "./image/credit-card 2.svg");
    CreditImage.style.width = "25px";
    linke5.style.color = "#2D60FF";
}
function DisCreditHover() {
    CreditImage.setAttribute("src", "./image/credit-card 1.svg");
    CreditImage.style.height = "25px";
    linke5.style.color = "#B1B1B1";
}
// =============================================================
function LoanHover() {
    LoanImage.setAttribute("src", "./image/loan 2.svg");
    linke6.style.color = "#2D60FF";
}
function DisLoanHover() {
    LoanImage.setAttribute("src", "./image/loan 1.svg");
    linke6.style.color = "#B1B1B1";
}
// =============================================================
function ServiceHover() {
    ServiceImage.setAttribute("src", "./image/service 2.svg");
    linke7.style.color = "#2D60FF";
}
function DisServiceHover() {
    ServiceImage.setAttribute("src", "./image/service 1.svg");
    linke7.style.color = "#B1B1B1";
}
// =============================================================
function EconometricsHover() {
    EconometricsImage.setAttribute("src", "./image/econometrics 2.svg");
    linke8.style.color = "#2D60FF";
}
function DisEconometricsHover() {
    EconometricsImage.setAttribute("src", "./image/econometrics 1.svg");
    linke8.style.color = "#B1B1B1";
}
// =============================================================
function SettingsHover() {
    SettingsImage.setAttribute("src", "./image/settings solid 2.svg");
    linke9.style.color = "#2D60FF";
}
function DisSettingsHover() {
    SettingsImage.setAttribute("src", "./image/settings solid 1.svg");
    linke9.style.color = "#B1B1B1";
}
// chart from apexcharts
var options = {
    chart: {
      height: 210,
      type: "area"
    },
    dataLabels: {
      enabled: false
    },
    series: [
      {
        name: "Series 1",
        data: [100,300,780,200,580,280,630],
      }
    ],
    fill: {
      type: "gradient",
      gradient: {
        shadeIntensity: 1,
        opacityFrom: 0.6,
        opacityTo: 0.01,
        stops: [0, 90, 100],
      },
      colors: ['#2D60FF']
    },
    xaxis: {
      categories: [
        "JUl",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
        "Jan"
      ],
      labels:{
        style: {
          fontSize:  '14px',
          fontWeight:  '500',
          fontFamily:  undefined,
          colors:  '#718EBF'
        }
      }
    },
    yaxis:{
      labels:{
        style: {
          fontSize:  '13px',
          fontWeight:  '500',
          fontFamily:  undefined,
          colors:  '#718EBF',
        }
      }
    },
    grid: {
        strokeDashArray: 4,
        borderColor: '#DFE5EE',
        xaxis: {
            lines: {
              show: true
            },
        },
        yaxis: {
          labels: [0, 200,400,600,800],
          lines: {
            show: true,
          },
        }
    },
    stroke: {
      colors: ['#1814F3']
    }
  };
  
var chart = new ApexCharts(document.querySelector("#chart"), options);
  
chart.render();