
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
		flex: 1,
	},
    flexContainer: {
        flex: 1,
    },
    flexGrow: {
        flexGrow: 1,
    },
    width_20:{
        width: "20%",
    },
    width_30:{
        width: "30%"
    },
    height_20: {
        height: "20%"
    },
    height_30:{
        height: "30%",
    },
    height_50: {
        height: "50%",
    },
    height_80:{
        height: "80%",
    },
    padding_sm: {
        padding: 8,
    },
    margin_vertical_sm: {
        marginVertical: 8
    },
    margin_vertical_m: {
        marginVertical: 12
    },
    margin_vertical_l: {
        marginVertical: 14
    },
    bottomContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingVertical: 22,
        paddingHorizontal: 12
    },
    row:{
        flexDirection: 'row',
    },
    justifyContentCenter: {
        justifyContent: "center"
    },
    alignItemCenter:{
        alignItems: "center"
    },
    title: {
        fontSize: 22,
        fontWeight: "bold"
    },
});

export default styles;