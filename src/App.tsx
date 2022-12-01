import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    return (
        <div>
            <AppTitle/>
            <Rating/>
            <Accordion/>
        </div>
    );
}

function Rating() {
    debugger
    return (
        <div>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
            <Star/>
        </div>
    );
}

function AppTitle() {
    return <>Title</>
}

function Star() {
    return (
        <div>star</div>)
}

function AccordionTitle() {
    return (<h3>Title</h3>)
}

function AccordionBody() {
    return (
        <div>
            <h3></h3>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>)
}

function Accordion() {
    return (
        <div>
            <AccordionTitle/>
            <AccordionBody/>
        </div>
    )
}


export default App