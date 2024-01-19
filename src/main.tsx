import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App.tsx"
import "./index.css"
import { Provider } from "react-redux"
import store from "./app/store.ts"
import { PersistGate } from "redux-persist/lib/integration/react"
import { persistStore } from "redux-persist"

const persistedStore = persistStore(store)

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate  persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
)
