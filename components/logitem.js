import React from "react";
import { StyleSheet, Text, Button, TouchableOpacity } from "react-native-web";

export default class LogItem extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const logItem = this.props.logItem;

        return (
            <TouchableOpacity
                style={styles.logItem}
            >
                <Text style={(logItem.supervisorApproval) ? { color: '#AAAAAA' } : { color: '#313131' }}>
                    {logItem.entry}
                </Text>

                <Button
                    title="Remove"
                    color={(logItem.supervisorApproval) ? 'rgba(200, 0, 0, 0.5)' : 'rgba(200, 0, 0, 1)'}
                    onPress={() => this.props.removeLog()}
                />
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    logItem: {
        width: '100%',
        height: 40,
        borderBottomColor: '#DDD',
        borderBottomWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 15
    }
})