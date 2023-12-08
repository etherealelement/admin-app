"use client";
import {MainPage} from "@/app/pages/main-page/main-page";
import {Provider} from "react-redux";
import {store} from "./redux";


export default function Home() {
  return (
    <>
         <Provider store={store}>
             <MainPage></MainPage>
         </Provider>
    </>
  );
}
