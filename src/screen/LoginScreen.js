import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native"
import semitalogo from "../../assets/semitalogo.png"


export default function LoginScreen(){
    return <View style={{flex:1, justifyContent:'center', alignItems:'center', backgroundColor:'white'}}>

        <Image style={styles.semitaImage} source={semitalogo}/>

        <View style={[styles.outerBorder, styles.boxshadow]}>

            <View style={{alignItems:'center' }}>
            <Text style={styles.loginText}>Login</Text>
            </View>
            <TextInput style={styles.textInput} placeholder="Email"/>
            <TextInput style={styles.textInput} placeholder="Password" secureTextEntry/>

            <View style={{flexDirection:'row', justifyContent:'space-between', marginTop:20}}>
                <Text style={{color:"#2AA1FF", fontWeight:'bold', marginTop:8}}>Forgot Password?</Text>
                <Button title="Login"/>
            </View>
        </View>
    </View>
}


const styles = StyleSheet.create({
        textInput:{
            borderWidth:1,
            width:250,
            height:35,
            paddingHorizontal:6,
            borderColor:'gray',
            marginVertical:6,
            borderRadius:5,
            padding:4
        },
        outerBorder:{
            borderWidth:1.5,
            padding:20,
            borderColor:'#2AA1FF',
            borderRadius:15,
            backgroundColor: 'white', 
            
        },
        boxshadow:{
           elevation:20,
           shadowColor:'#2AA1FF',
           shadowOffset: { width: 4, height: 4 }, 
           shadowOpacity:0.8,
           shadowRadius: 5,
        },
        loginButton:{
            width:200
        },
        loginText:{
            fontSize:20,
            paddingBottom:20,
            fontWeight:'bold'
        },
        semitaImage:{
        width:98,
        height:46,
        marginVertical:20
    },
})