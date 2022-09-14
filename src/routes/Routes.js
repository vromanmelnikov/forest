import { lazy } from "react"

const SystemContainer = lazy(() => import('../components/System/System.container'))
const AboutContainer = lazy(()=>import('../components/System/About/About.container'))
const CatalogContainer = lazy(()=>import('../components/System/Catalog/Catalog.container'))
const MainContainer = lazy(()=>import('../components/System/Main/Main.container'))

const AdminContainer = lazy(()=>import('../components/Admin/Admin.container'))
const AuthContainer = lazy(()=>import('../components/Admin/Auth/Auth.container'))
const LoginContainer = lazy(()=>import('../components/Admin/Auth/Login/Login.container'))
const GoodsContainer = lazy(()=>import('../components/Admin/components/Goods/Goods.container'))
const CategoriesContainer = lazy(()=>import('../components/Admin/components/Categories/Categories.container'))

const MainRoutes = [
    {
        path: "/",
        element: <SystemContainer />, 
        children: [
            {
                path: "/main",
                element: <MainContainer />
            },
            {
                path: "/shop",
                element: <CatalogContainer/>
            },
            {
                path: "/about",
                element: <AboutContainer />
            }
        ]
    },
    {
        path: "/admin",
        element: <AdminContainer />, 
        children: [
            {
                path: "/admin/goods",
                element: <GoodsContainer />
            },
            {
                path: "/admin/categories",
                element: <CategoriesContainer />
            },
            {
                path: "/admin/auth",
                element: <AuthContainer />,
                children: [
                    {
                        path: "/admin/auth/login",
                        element: <LoginContainer />
                    }
                ]
            }
        ]
    }
]

export default MainRoutes