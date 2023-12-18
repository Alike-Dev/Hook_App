import React from 'react';
import ReactDOM from 'react-dom/client';

// // import HookApp from './HookApp';
// // import CounterApp from './components/01 - useState/CounterApp';
// // import CounterAppWithCustomHook from './components/01 - useState/CounterAppWithCustomHook';
// // import SimpleForm from './components/02 - useEffect/SimpleForm';
// // import SimpleFormWithCustomHook from './components/02 - useEffect/SimpleFormWithCustomHook';
// // import MultipleCustomHooks from './components/03 - Examples/MultipleCustomHooks';
// // import FocusScreen from './components/04 - UseRef/FocusScreen';
// // import RealExampleUseRef from './components/04 - UseRef/RealExampleUseRef';
// // import Layout from './components/05 - useLayoutEffect/Layout';
// // import Memorize from './components/06 - Memo/Memorize';
// // import MemoHook from './components/06 - Memos/MemoHook';
// // import CallBackHook from './components/06 - Memos/CallBackHook';
// import { Padre } from './components/07-tarea-memo/Padre';
import TodoApp from './components/08 - useReducer/TodoApp'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <HookApp />
  // <CounterApp/>
  // <CounterAppWithCustomHook/>
  // <SimpleForm />
  // <SimpleFormWithCustomHook />
  // <RealExampleUseRef />
  // <Layout />
  // <Memorize />
  // <MemoHook />
  // <CallBackHook />
  // <Padre />
  <TodoApp />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

// import './components/08 - useReducer/IntroReducer';