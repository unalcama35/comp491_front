import { View, Text, TouchableOpacity, TextInput,StyleSheet, NativeModules } from "react-native"
const { StatusBarManager } = NativeModules;
import Checkbox from 'expo-checkbox';
import { useState } from "react";

function Signup2({setContent}){
    const [isChecked, setChecked] = useState(false);

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Sign Up</Text>
            <View style={styles.buttonContainer}>
                <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                    <TextInput
                        style={{...styles.input, width: '48%'}}

                        placeholder='First Name'
                    />
                    <TextInput
                        style={{...styles.input, width: '48%'}}

                        placeholder='Last Name'
                    />
                </View>
                <TextInput
                    style={styles.input}

                    placeholder='Email'
                    />
                <TextInput
                    style={styles.input}

                    placeholder='Password'
                />
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Checkbox
                        style={styles.checkbox}
                        value={isChecked}
                        onValueChange={setChecked}
                        color={isChecked ? '#4630EB' : undefined}
                    />
                    <Text style={styles.checkBoxText}>I agree with Terms & Conditions</Text>
                </View>
                
                <TouchableOpacity onPress={() => setContent('3')} style={styles.button}>
                    <Text style={styles.buttonText}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#222831',
      alignItems: 'center',
    },
    buttonContainer: {
        width: '80%'
    },
    title: {
        color: 'white',
        fontSize: 24,
        fontFamily: 'Montserrat_400Regular',
        marginTop: '20%',
        marginBottom: '10%'
    },
    checkBoxText: {
        fontSize: 12,
        color: 'white',
        fontFamily: 'Montserrat_400Regular',
    },
    buttonText: {
        color: '#2e4374',
        fontSize: 24,
        fontFamily: 'Montserrat_400Regular',
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
    checkbox: {
        marginVertical: 8,
        marginRight: 8,
        height: 30,
        width: 30,
        borderRadius: 5
      },
  });
export default Signup2