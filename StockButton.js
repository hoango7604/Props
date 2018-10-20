import React, {Component} from 'react';
import {StyleSheet,
        Text,
        TouchableOpacity} from 'react-native';

export default class StockButton extends Component<Props> {
    render(){
        return(
            <TouchableOpacity
                style={styles.button}
                onPress={()=>{this.props.onPress(this.props.name, this.props.code)}}>
                <Text style={styles.buttonText}>
                    {this.props.name}
                </Text>
            </TouchableOpacity>
        );
    }
}

const styles = StyleSheet.create({
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
    }
});