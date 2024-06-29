import { Navigate } from "react-router-dom"
import { useAuth } from "../hooks/useAuth"


export const  PrivateRoute = ({component, redirectTo = '/'}) => {
const {isLoggedIn, isRefreshing, token} = useAuth()

const shouldRedirect = !isLoggedIn && !isRefreshing 

  return (
    shouldRedirect ? <Navigate to={redirectTo} replace/> : component
  )
}
