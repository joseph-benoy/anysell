import { Button } from 'react-native-paper';

export const PrimaryButton:typeof Button = (props)=>{
    return(
        <>
            <Button mode='contained' {...props}>{props.children}</Button>
        </>
    );
}

