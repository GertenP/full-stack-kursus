import 'bootstrap/dist/css/bootstrap.css';
import { useState } from 'react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleAddTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, inputValue]);  // Lisame uue ülesande loendisse
      setInputValue('');  // Tühjendame sisendi
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center" style={{ paddingTop: '50px' }}>
      <div>
        <h1 className="text-center">ToDo List</h1>
        <div id="sisend" className="d-flex align-items-center mb-3">
          <input
            style={{ height: '40px', borderRadius: '10px 0px 0px 10px', borderColor: '#106cfc' }}
            type="text"
            value={inputValue}  
            onChange={(e) => setInputValue(e.target.value)}  // Muudame sisendi väärtust
            placeholder="Lisa uus ülesanne"
          />
          <button
            style={{ height: '40px', borderRadius: '0px 10px 10px 0px' }}
            type="button"
            className="btn btn-primary"
            onClick={handleAddTodo} 
          >
            OK
          </button>
        </div>
        <ul className="list-group">
          {todos.map((todo, index) => (
            <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
              <span>{todo}</span>
              <input type="checkbox" />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
