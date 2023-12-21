import React from "react";
import {createRoot} from 'react-dom/client';



import App from "./App";

 const root = createRoot(document.querySelector('#root'));
    console.log(root);
 root.render(<App />);
