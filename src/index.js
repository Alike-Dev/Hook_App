import React from 'react';
import ReactDOM from 'react-dom/client';


// import HookApp from './HookApp';
// import CounterApp from './components/01 - useState/CounterApp';
// import CounterAppWithCustomHook from './components/01 - useState/CounterAppWithCustomHook';
// import SimpleForm from './components/02 - useEffect/SimpleForm';
// import SimpleFormWithCustomHook from './components/02 - useEffect/SimpleFormWithCustomHook';
// import MultipleCustomHooks from './components/03 - Examples/MultipleCustomHooks';
// import FocusScreen from './components/04 - UseRef/FocusScreen';
import RealExampleUseRef from './components/04 - UseRef/RealExampleUseRef';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HookApp />
  // <CounterApp/>
  // <CounterAppWithCustomHook/>
  // <SimpleForm />
  // <SimpleFormWithCustomHook />
  <RealExampleUseRef />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
