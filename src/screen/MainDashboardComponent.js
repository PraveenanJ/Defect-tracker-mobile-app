import React from 'react';
import { View, StyleSheet, Text, ScrollView } from 'react-native';
import DoughnutChart from './DoughnutChart';
import HalfDoughnutChart from './HalfDoughnutChart';
import SimpleDoughnut from './SimpleDoughnut';
import PieChartScreen from './PieChartScreen';


const doughnutData = [
    { x: 'A', y: 30 },
    { x: 'B', y: 70 },
];

const data = [
    { label: 'A', value: 30 },
    { label: 'B', value: 70 },
    { label: 'C', value: 50 },
    { label: 'D', value: 20 },
    { label: 'E', value: 10 },
];



const pieChartData = [
    {
        name: 'Seoul',
        population: 21500000,
        color: 'rgba(131, 167, 234, 1)',
    },
    {
        name: 'Toronto',
        population: 2800000,
        color: '#F00',
    },
    {
        name: 'Beijing',
        population: 527612,
        color: 'red',
    },
    {
        name: 'New York',
        population: 8538000,
        color: 'green',
    },
    {
        name: 'Moscow',
        population: 11920000,
        color: 'rgb(0, 0, 255)',
    },
];

const series = pieChartData.map((item) => item.population);
const sliceColor = pieChartData.map((item) => item.color);

console.log('Series:', series);
console.log('Slice Color:', sliceColor);


const MainDashboardComponent = () => {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text>Half Doughnut Chart</Text>
            <DoughnutChart widthAndHeight={250} series={series} sliceColor={sliceColor} />
            {/* <SimpleDoughnut data={doughnutData} widthAndHeight={250} /> */}
            {/* <PieChartScreen /> */}
            {/* <SimpleDoughnut data={data} /> */}
         
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 8,
    },
});

export default MainDashboardComponent;
