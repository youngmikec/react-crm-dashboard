export const stats = {
    "line": {
        chartType: "LineChart",
        data : [
            ["Year", "Sales", "Expenses", "Profit"],
            ["2004", 1000, 400, 200],
            ["2005", 1170, 460, 250],
            ["2006", 660, 1120, 300],
            ["2007", 1030, 540, 267],
            ["2008", 2080, 740, 865],
            ["2009", 1949, 690, 598],

        ],
        options : {
            title: "Company Performance",
            curveType: "function",
            legend: { position: "bottom" },
            backgroundColor: "#f2f4f7"
        }
    },
    "bar": {
        chartType: "Bar",
        data : [
            ["Year", "Sales", "Expenses"],
            ["2014", 1000, 400],
            ["2015", 1170, 460],
            ["2016", 660, 1120],
            ["2017", 1030, 540],
          ],
          options : {
                legend: {position: "none"},
                chart: {
                    title: "Company Revenue",
                    subtitle: "Sales, Expenses, and Profit: 2014-2017",
                },
          }
    },
    "pie": {
        chartType: "PieChart",
        data : [
            ["Task", "Hours per Day"],
            ["Work", 11],
            ["Eat", 2],
            ["Commute", 2],
            ["Watch TV", 2],
            ["Sleep", 7],
        ],
        options : {
            legend: {position: "none"},
            title: "My Daily Activities",
            is3D: true,
        }
    },
}
