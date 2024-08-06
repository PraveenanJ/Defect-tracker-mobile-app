import React, { Component } from 'react'
import { StyleSheet, ScrollView, Text, View } from 'react-native'
import PieChart from 'react-native-pie-chart'

class DoughnutChart extends Component {
    render() {
        const { widthAndHeight, series, sliceColor } = this.props

        return (
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container}>
                    <Text style={styles.title}>Doughnut</Text>
                    <PieChart
                        widthAndHeight={widthAndHeight}
                        series={series}
                        sliceColor={sliceColor}
                        coverRadius={0.7}
                        coverFill={'#FFF'}
                        legend={true}
                    />
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 24,
        margin: 10,
    },
})

export default DoughnutChart;
