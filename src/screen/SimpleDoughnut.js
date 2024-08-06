// import React, { Component } from 'react';
// import { StyleSheet, ScrollView, Text, View } from 'react-native';
// import { VictoryPie } from 'victory-native'; // Ensure this is imported correctly
// import Svg from 'react-native-svg'; // Ensure this is imported correctly as well

// class SimpleDoughnut extends Component {
//     render() {
//         const { widthAndHeight, data } = this.props;
//         console.log('doughnutData:', data, 'widthAndHeight:', widthAndHeight);

//         return (
//             <ScrollView style={{ flex: 1 }}>
//                 <View style={styles.container}>
//                     <Text style={styles.title}>Simple Doughnut</Text>
//                     <VictoryPie
//                         data={data}
//                         width={widthAndHeight}
//                         height={widthAndHeight}
//                         innerRadius={50}
//                         padAngle={5}
//                         startAngle={90}
//                         endAngle={-90}
//                         style={{
//                             labels: {
//                                 fill: 'white',
//                                 fontSize: 15,
//                                 padding: 7,
//                             },
//                         }}
//                     />
//                 </View>
//             </ScrollView>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         backgroundColor: 'black',
//     },
//     title: {
//         fontSize: 24,
//         margin: 10,
//         color: 'white',
//     },
// });

// export default SimpleDoughnut;



import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { DoughnutChart } from 'react-native-chart-kit';

const { width } = Dimensions.get('window');

const SimpleDoughnut = ({ data }) => {
    const chartData = {
        labels: data.map(d => d.label),
        datasets: [{
            data: data.map(d => d.value),
            colors: [
                (opacity = 1) => `rgba(255, 99, 132, ${opacity})`,
                (opacity = 1) => `rgba(54, 162, 235, ${opacity})`,
                (opacity = 1) => `rgba(255, 206, 86, ${opacity})`,
                (opacity = 1) => `rgba(75, 192, 192, ${opacity})`,
                (opacity = 1) => `rgba(153, 102, 255, ${opacity})`
            ],
        }]
    };

    return (
        <View style={styles.container}>
            <DoughnutChart
                data={chartData}
                width={width - 40} // Adjust as necessary
                height={width - 40} // Adjust as necessary
                chartConfig={{
                    backgroundGradientFrom: '#1E2923',
                    backgroundGradientTo: '#08130D',
                    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                }}
                accessor="value"
                backgroundColor="transparent"
                paddingLeft="15"
                absolute // Displays percentage values inside the chart
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
});

export default SimpleDoughnut;
