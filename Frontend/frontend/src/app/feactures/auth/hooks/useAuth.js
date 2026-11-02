
import {useDispatch} from 'react-redux'
import {register,login,getme} from '../services/auth.api.js'
import {setUser,setLoading,setError} from '../auth.slice.js'


export function useAuth(){

    const dispatch = useDispatch();

    async function handleRegister({username,email,password}){

        try{
            dispatch(setLoading(true))
            const response = await register({username,email,password})
            return {
                success: response.success,
                message: response.message || 'Account created. Please check your email to verify it.',
            }
        } catch (error) {
            const message = error.response?.data?.message
                || error.response?.data?.Message
                || error.response?.data?.errors?.[0]?.msg
                || "Registration failed. Please try again later."
            dispatch(setError(message))
            return { success: false, message }
        } finally {
            dispatch(setLoading(false))
        }
    }

    async function handleLogin({email,password}){
        try{
            dispatch(setLoading(true))
            const response = await login({email,password})
            dispatch(setUser(response.user))
            return { success: true }
        } catch (error) {
            const message = error.response?.data?.message
                || error.response?.data?.errors?.[0]?.msg
                || "Login failed. Please try again."
            dispatch(setError(message))
            return { success: false, message }
        }finally{
            dispatch(setLoading(false))
        }
    } 

    async function handleGetme(){
        try{
            dispatch(setLoading(true))
            const response = await getme()
            dispatch(setUser(response.user))
        }catch(error){
            dispatch(setUser(null))
            dispatch(setError(error.response?.data?.message || "Failed to fetch user data"))
        }finally{
            dispatch(setLoading(false))
        }
    }

    return{
        handleRegister,
        handleLogin,
        handleGetme
    }
}
