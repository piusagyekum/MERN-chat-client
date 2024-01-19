import { combineReducers, configureStore } from "@reduxjs/toolkit"
import auth from "../features/authFeature"
import { persistReducer } from "redux-persist"
import sessionStorage from "redux-persist/es/storage/session"

const rootReducer = combineReducers({ auth })
const persistedReducer = persistReducer(
  { key: "chat-app", storage:sessionStorage, version: 1 },
  rootReducer
)

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware({ serializableCheck: false })
  },
})

export default store
