import {useAuth} from '../hooks/useAuth';

export const Notifications = () =>{

    const validation = useAuth()
    validation.verification()
    return(
        <>
        
        </>
    )
}