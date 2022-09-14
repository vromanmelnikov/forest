import { configureStore } from "@reduxjs/toolkit";
import adminReducer from "./adminReducer";
import catalogReducer from "./catalogReducer";
import categoryReducer from "./categoryReducer";
import clientsReducer from "./clientsReducer";
import goodsReducer from "./goodsReducer";
import partnersReducer from "./partnersReducer";

export default configureStore({
    reducer: {
        goodsData: goodsReducer,
        categoriesData: categoryReducer,
        partnersData: partnersReducer,
        catalogData: catalogReducer,
        clientsData: clientsReducer,
        adminData: adminReducer
    }
})