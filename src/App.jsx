import React from "react";
import Heading from "./components/Heading";
import Footer from "./components/Footer";
import NoteGrid from "./components/body/NoteGrid";

export default function App(){
    return (<>
        <Heading/>
        <NoteGrid/>
        <Footer/>
    </>)
}