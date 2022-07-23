import { StyleSheet } from 'react-native'
import { TextInput } from 'react-native-paper';


//@ts-ignore
export const  OutlinedInput:typeof TextInput = (props) =>{
  return (
    <>
        <TextInput
            mode='outlined'
            style={styles.inputNormal}
            dense
            {...props}
         />
    </>
  )
}      

const styles = StyleSheet.create({
    inputNormal:{
        backgroundColor:'white'
    },
})