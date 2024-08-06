import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';

// Register the necessary chart components
Chart.register(ArcElement);

const HalfDoughnutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const options = {
    rotation: -90, // Start angle (in degrees)
    circumference: 180, // Sweep angle (in degrees)
    cutoutPercentage: 50, // Percentage of the chart that is cut out
  };

  return (
    <View style={styles.container}>
      <Doughnut data={data} options={options} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HalfDoughnutChart;
