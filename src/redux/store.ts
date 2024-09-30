import { configureStore } from "@reduxjs/toolkit";
import rootreducer from "./rootreducer";
import createSagaMiddleware from "redux-saga";
import SagaData from "./saga";


const sagaMiddlerware = createSagaMiddleware();

const store = configureStore({
    reducer:rootreducer,
    middleware: ()=>[sagaMiddlerware]
})

sagaMiddlerware.run(SagaData);

export default store