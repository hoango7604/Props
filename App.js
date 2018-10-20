/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet,
        Text,
        View} from 'react-native';

import StockButton from './StockButton';
import API from './api';

type Props = {};
export default class App extends Component<Props> {

    constructor(props) {
        super(props);
        this.changeIndex = this.changeIndex.bind(this);
        this.state = {
            stockName: 'FACEBOOK',
            stockCode: 'FB',
            stockIndex: '0.00',
            stockChangeRaw: '+0.00',
            stockChangPercentage: '0.00%'
        };
        this.changeIndex('FACEBOOK', 'FB');
    }

    changeIndex(stockName, stockCode){
        API(stockCode).then((data) => {
            console.log('myLog', data.stockIndex);
            this.setState({stockName : stockName});
            this.setState({stockCode : stockCode});
            this.setState({stockIndex : data.stockIndex});
            this.setState({stockChangeRaw : data.stockChangeRaw});
            this.setState({stockChangPercentage : data.stockChangPercentage});
        });
    }

    render() {
        let colorStyle = (this.state.stockChangeRaw && this.state.stockChangeRaw[0] != '-')? styles.green : styles.red;
        return (
            <View style={styles.container}>
                <View style={styles.top}>
                    <Text style={styles.stockName}>
                        {this.state.stockName}
                    </Text>

                    <Text style={styles.stockIndex}>
                        {this.state.stockIndex}
                    </Text>

                    <Text style={[styles.stockChange, colorStyle]}>
                        {this.state.stockChangeRaw} ({this.state.stockChangPercentage})
                    </Text>
                </View>

                <View style={styles.bottom}>
                    <View style={styles.subBottom}>
                        <StockButton name='Facebook' code='FB' onPress={this.changeIndex}/>

                        <StockButton name='Apple' code='AAPL' onPress={this.changeIndex}/>

                        <StockButton name='NASDAQ' code='.IXIC' onPress={this.changeIndex}/>

                        <StockButton name='Dow Jones' code='.DJI' onPress={this.changeIndex}/>

                        <StockButton name='Google' code='GOOG' onPress={this.changeIndex}/>

                        <StockButton name='Microsoft' code='MSFT' onPress={this.changeIndex}/>

                        <StockButton name='Alibaba' code='BABA' onPress={this.changeIndex}/>

                        <StockButton name='S&P' code='.INX' onPress={this.changeIndex}/>

                        <StockButton name='Ford' code='F' onPress={this.changeIndex}/>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    top: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff815',
    },

    stockName: {
        fontSize: 30
    },

    stockIndex: {
        fontSize: 60
    },

    stockChange: {
        fontSize: 35
    },

    bottom: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#faacff'
    },

    subBottom: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
    },

    button: {
        width: 100,
        height: 50,
        backgroundColor: '#aec8bc',
        borderColor: '#222222',
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    },

    buttonText: {
        fontSize: 15
    },

    green: {
        color: '#00ff23'
    },

    red: {
        color: '#ff2f2c'
    }
});
