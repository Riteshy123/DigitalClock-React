import React from 'react';
import ReactDOM from 'react-dom';

// import MissedGoal from './MissedGoal';
// import MadeGoal from './Made'

import App from './App';

ReactDOM.render(
    <App />,
    document.getElementById("root")
);

















// ternary operator
// function Goal(props) {
//   const isGoal = props.isGoal;
//   return(
//     <>
//      {isGoal ? <MadeGoal /> : <MissedGoal />}
//      </>
//   );
// }

// class Car extends React.Component {
//   render() {
//     return <h2>Hi, I am a Car!</h2>;
//   }
// }
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Car  />)

// ternary operator


//  && operator

// import React from 'react';
// import ReactDOM from 'react-dom/client';

// function Garage(props) {
//   const cars = props.cars;
//   return (
//     <>
//       <h1>Garage</h1>
//       {cars.length > 0 &&
//         <h2>
//           You have {cars.length} cars in your garage.
//         </h2>
//       }
//     </>
//   );
// }

// const cars = ['Ford', 'BMW', 'Audi'];
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Garage cars={cars} />);




//  if else 



// function Goal(props) {
//   const isGoal = props.isGoal;
//     if(isGoal){
//       return <MadeGoal />
//     }

//     return <MissedGoal />
// }
// ReactDOM.render(
//   <>
//   <h1>Conditional statement</h1>
//   <Goal isGoal={true}/>
//   </>,
//   document.getElementById("root")
// );