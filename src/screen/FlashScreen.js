import { ActivityIndicator, Image, StyleSheet, Text, View } from "react-native";
import flashlogo from "../../assets/flashlogo.png";
import semitalogo from "../../assets/semitalogo.png";   
import spinner from "../../assets/spinner.gif"; 

export default function FlashScreen(){
    return <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Image style={styles.flashImage} source={flashlogo}/>
        <Image style={styles.semitaImage} source={semitalogo}/>
        <Image style={styles.spinner} source={spinner}/>
    </View>
}

const styles = StyleSheet.create({
    
    flashImage:{
        width:185,
        height:204
    },
    semitaImage:{
        width:120,
        height:55,
        marginVertical:10
    },
    spinner:{
        width:100,
        height:100
    }
});