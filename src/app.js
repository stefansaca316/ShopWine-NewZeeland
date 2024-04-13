// import React from 'react';
// // import {VideoList} from './components/VideoList'

// function App() {
//   return (
//     <div>
//     <h1> Hello Word </h1>
//     {/* <VideoList/> */}
//     </div> 
//   )
// }

// // Mai pi scurt di la inseput am nevoie de 1:Components 2:Virtual DOM
// // 3:State and Props 4:React router 5:hooks 6:Redux
// // Componente React.js
// //1: Functional Components
// // Componetele functionale sunt functii JS care primesc proprietati
// // si intorc elemente React 

// // Exemplu de componentă funcțională
// import React from 'react';

// function HelloComponent(props) {
//   return <div>Hello, {props.name}!</div>;
// }

// Utilizare
// const App = () => {
//   return <HelloComponent name="World" />;
// }



// // 2: Class Coponents
// // Componentele bazate pe clase sin mai vechi, dar inca mai sunt folosite. Acestea extind
// // clasa 'React.Component'.
// // Exemplu de componentă bazată pe clasă
// // import React, { Component } from 'react';

// class Counter extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { count: 0 };
//   }

//   increment = () => {
//     this.setState({ count: this.state.count + 1 });
//   }

//   render() {
//     return (
//       <div>
//         <p>Count: {this.state.count}</p>
//         <button onClick={this.increment}>Increment</button>
//       </div>
//     );
//   }
// }

// Utilizare
// const App = () => {
//   return <Counter />;
// }


// // Props;
// // Proprietatile (props) sunt utilizate pentru a transmite la
// // un component parinte la un component copil

// // Componenta copil
// import React from 'react';

// function ChildComponent(props) {
//   return <p>Hello, {props.name}!</p>;
// }

// // Componenta părinte
// const ParentComponent = () => {
//   return <ChildComponent name="World" />;
// }


// // State 
// // Starea (state) este utilizata pentru a gestiona datele dinamice in cadrul unui component

// // Exemplu 
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);

//   const increment = () => {
//     setCount(count + 1);
//   };

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//     </div>
//   );
// }


//// Virtuaql DOM
//// Crearea unui virtual DOM
// // Crearea unui Virtual DOM inițial
// const element = (
//     <div>
//       <h1>Hello, Virtual DOM!</h1>
//       <p>Exemplu de paragraf.</p>
//     </div>
//   );
  
//   // Convertirea elementului React într-un Virtual DOM
//   const virtualDOM = {
//     type: 'div',
//     props: {
//       children: [
//         { type: 'h1', props: { children: 'Hello, Virtual DOM!' } },
//         { type: 'p', props: { children: 'Exemplu de paragraf.' } }
//       ]
//     }
//   };

////Re-renderizarea și Actualizarea Stării:
// // Re-renderizarea unei componente cu starea
// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     incrementCount = () => {
//       this.setState({ count: this.state.count + 1 });
//     };
  
//     render() {
//       return (
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={this.incrementCount}>Increment</button>
//         </div>
//       );
//     }
//   }
  
//   // La fiecare apel al metodei `incrementCount`, React creează un nou arbore de elemente React.
//   // Dacă starea count crește de la 0 la 1, acesta va actualiza DOM-ul real pentru a reflecta noua valoare a count.
  


//// Re-renderizarea și Actualizarea Stării:
// // Exemplu de componentă React cu starea
// class Counter extends React.Component {
//     constructor(props) {
//       super(props);
//       this.state = { count: 0 };
//     }
  
//     incrementCount = () => {
//       this.setState({ count: this.state.count + 1 });
//     };
  
//     render() {
//       return (
//         <div>
//           <p>Count: {this.state.count}</p>
//           <button onClick={this.incrementCount}>Increment</button>
//         </div>
//       );
//     }
//   }
  


//// Difuzarea Diferențelor (Reconciliere):
// // Difuzarea diferențelor între noul arbore de elemente React și Virtual DOM-ul inițial
// const oldVirtualDOM = {
//     type: 'div',
//     props: {
//       children: [
//         { type: 'h1', props: { children: 'Hello, Virtual DOM!' } },
//         { type: 'p', props: { children: 'Exemplu de paragraf.' } }
//       ]
//     }
//   };
  
//   const newVirtualDOM = {
//     type: 'div',
//     props: {
//       children: [
//         { type: 'h1', props: { children: 'Hello, Updated Virtual DOM!' } },
//         { type: 'p', props: { children: 'Paragraf actualizat.' } }
//       ]
//     }
//   };
  
//   // Rezultatul difuzării diferențelor ar fi un set de instrucțiuni pentru a actualiza DOM-ul real:
//   // Update textul în elementul h1 cu 'Hello, Updated Virtual DOM!'
//   // Update textul în elementul p cu 'Paragraf actualizat.'
  
//// Actualizarea DOM-ului Real:
// const React = require('react');
// const ReactDOM = require('react-dom');

// const App = () => {
//   return <h1>Hello, Console!</h1>;
// };

// const element = React.createElement(App);
// const container = document.createElement('div');
// ReactDOM.render(element, container);

// console.log(container.innerHTML);


//// React router
// // Importarea React și componentelor React Router
// import React from 'react';
// import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// // Componente pentru diferite rute
// const Home = () => <h2>Home</h2>;
// const About = () => <h2>About</h2>;

// // Componenta principală care utilizează React Router
// const App = () => {
//   return (
//     <Router>
//       <div>
//         {/* Link-uri pentru a naviga între rute */}
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About</Link></li>
//           </ul>
//         </nav>

//         {/* Definirea componentelor pentru rute */}
//         <Route path="/" exact component={Home} />
//         <Route path="/about" component={About} />
//       </div>
//     </Router>
//   );
// };

// // Renderizarea componentei principale
// ReactDOM.render(<App />, document.getElementById('root'));

//// Parametri în Rute:
// {/* <Route path="/user/:id" component={UserProfile} /> */}




//// React Hooks
//// useState 
// import React, { useState } from 'react';

// function ExampleComponent() {
//   const [count, setCount] = useState(0);

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={() => setCount(count + 1)}>Increment</button>
//     </div>
//   );
// }


//// useEfect
// import React, { useState, useEffect } from 'react';

// function ExampleComponent() {
//   const [data, setData] = useState(null);

//   useEffect(() => {
//     // Efect secundar: se apelează la fiecare randare (update) sau la montare
//     fetchData(); // Exemplu: funcție pentru a obține datele
//   }, []); // [] indică că efectul se va apela doar la montare

//   return (
//     <div>
//       <p>Data: {data}</p>
//     </div>
//   );
// }


//// useState 
// import React, { useContext } from 'react';
// import MyContext from './MyContext';

// function ExampleComponent() {
//   const contextValue = useContext(MyContext);

//   return (
//     <div>
//       <p>Value from Context: {contextValue}</p>
//     </div>
//   );
// }


// ///// useReduce
// import React, { useReducer } from 'react';

// function counterReducer(state, action) {
//   switch (action.type) {
//     case 'INCREMENT':
//       return { count: state.count + 1 };
//     case 'DECREMENT':
//       return { count: state.count - 1 };
//     default:
//       return state;
//   }
// }

// function ExampleComponent() {
//   const [state, dispatch] = useReducer(counterReducer, { count: 0 });

//   return (
//     <div>
//       <p>Count: {state.count}</p>
//       <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
//       <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
//     </div>
//   );
// }



//// React redux
//// Store 
// import { createStore } from 'redux';

// // Reducer simplu pentru un contor
// const counterReducer = (state = 0, action) => {
//   switch (action.type) {
//     case 'INCREMENT':
//       return state + 1;
//     case 'DECREMENT':
//       return state - 1;
//     default:
//       return state;
//   }
// };

// // Crearea store-ului
// const store = createStore(counterReducer);


//// Actions
 







































































































// export default App;
