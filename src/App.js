import './App.css';
import DefaultLyout from './components/DefaultLyout';
function App() {
  return (
    <div className="App">
      <h1>App Component

      
        <DefaultLyout></DefaultLyout>
      </h1>
    </div>
  );
}


// import { useSelector } from 'react-redux';
// import routes from './components/routes';
// import { useRoutes } from 'react-router-dom';

// function App() {
//   const token = useSelector((state) => state.userReducer.token);

//   const routing = useRoutes(routes(token ? true :false));

//   return (
//     <>
//       {routing}
//     </>
//   );
// }

export default App;
