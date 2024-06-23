import React, {Suspense} from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom";
import {router} from "./router";
import {Provider} from "react-redux";
import {store} from "./store/store";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <Provider store={store}>
            <Suspense>
                <RouterProvider router={router}/>
            </Suspense>
        </Provider>
    </React.StrictMode>,
)