import {useAuth} from '../hooks/useAuth';

export const Profile = () => {
    const validation = useAuth()
    validation.verification()
    return(
        <>
        <h1>Jhonjandrys Ramirez</h1>
        <h4>Ubicacion: Valledupar</h4>
        </>
    )
}