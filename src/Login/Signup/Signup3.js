import { View, Text, TouchableOpacity, TextInput, StyleSheet, NativeModules} from "react-native"
const { StatusBarManager } = NativeModules;


function Signup3({setContent}){

    const onClick = (userType) => {
        setContent('')
    }

    const handleResendCode = () => {

    }
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Verify Email</Text>
            <View style={styles.buttonContainer}>
                <Text style={{...styles.text, marginVertical: 20}}>Please, enter the verification code you've received on your email</Text>
                <TextInput
                    style={styles.input}

                    placeholder='XXXX'
                />
                <View style={{flexDirection: 'row', justifyContent:'center', marginTop: 20}}>
                    <Text style={styles.text}>I didn't receive a code. Please, </Text>
                    <TouchableOpacity onPress={handleResendCode}>
                        <Text style={styles.resendCodeText}>re-send code</Text>
                    </TouchableOpacity>
                </View>
                
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222831',
      alignItems: 'center',
      justifyContent: 'center',
    },
    buttonContainer: {
        width: '80%'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Montserrat_400Regular',
    },
    text: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
        textAlign: 'center',

      },
      resendCodeText: {
        color: 'white',
        fontSize: 14,
        fontFamily: 'Montserrat_400Regular',
        textDecorationLine: 'underline',
      },
    input: {
        width: '100%', // Adjust width as needed
        height: 50,   // Set a fixed height or adjust as needed
        backgroundColor: 'white',
        color: '#2e4374',
        borderWidth: 1,
        borderRadius: 10,
        paddingLeft: 10,
        marginVertical: 10,
        fontFamily: 'Montserrat_400Regular'
    },
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        marginTop: 20,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center'
    },
  });
export default Signup3