import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsRefreshing, selectToken, selectUser } from "../../redux/selectors/selectors";


export const useAuth = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const isRefreshing = useSelector(selectIsRefreshing)
    const token = useSelector(selectToken)
    const user = useSelector(selectUser)

    return {
        isLoggedIn, isRefreshing, token, user
    }
}