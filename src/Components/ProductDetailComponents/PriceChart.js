import React from "react"
import { Dimensions } from "react-native"
import { BarChart } from "react-native-chart-kit"

const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
        {
            data: [80, 45, 28, 20, 10, 43, 10, 20, 25, 14, 35, 60]
        }
    ]
}

export default () => {
    const { width } = Dimensions.get("window")
    return (
        <BarChart
            data={data}
            width={width - 50}
            height={220}
            yAxisLabel="$"
            chartConfig={chartConfig}
            verticalLabelRotation={30}
            fromZero={true}
            // withHorizontalLabels={false}
            withInnerLines={false}
        />
    )
}


const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0,
    color: (opacity = 1) => `#1F78B4`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  };