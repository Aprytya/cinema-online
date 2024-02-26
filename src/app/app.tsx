'use client'
import { Provider } from "react-redux";
import { persistore, store } from "@/states/stores";
import { PersistGate } from "redux-persist/integration/react";
import { ReactNode } from "react";


interface Props {
    children : ReactNode
}

const App = ({children}:Props) =>{
    return (
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistore}>
            {children}
        </PersistGate>
      </Provider>
    )
}

export default App;
