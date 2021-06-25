import QueryBuilder from 'react-querybuilder'
import './App.css';

function App() {
  const fields = [
    { name: 'Employees', label: 'Employees' },
    { name: 'customers', label: 'customers' },
    { name: 'Orders', label: 'Orders' },
    { name: 'products', label: 'products' },
    { name: 'Territories', label: 'Territories' },


  ];

  function logQuery(query) {
    console.log(query)
  }
  return (
    <div className="App">
      <QueryBuilder fields={fields} onQueryChange={logQuery} />;



    </div>
  );
}

export default App;
