import React from 'react';
import './src/styles/index.css'
import ScrollObserver from "./src/utils/scroll-observer";

export const wrapPageElement = ({ element }) => {
    return <ScrollObserver>{element}</ScrollObserver>
}
