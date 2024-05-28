import { useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { Outlet, Navigate, useLocation } from "react-router-dom"

type PrivateRoutesProps = {
    route: string
}

function PrivateRoutes({ route }: PrivateRoutesProps) {
    const location = useLocation()
    const isAuth = useSelector(
        (state: RootState) => state.user.sessionInfo.isLoggedIn,
    )

    return (
        <>
            {isAuth ? (
                <Outlet />
            ) : (
                <Navigate to={route} state={{ from: location }} replace />
            )}
        </>
    )
}

export default PrivateRoutes
