import { useState } from 'react';
import './App.css';
import Heading from './components/Heading';
import Login from './components/Login';
import TodoList from './components/TodoList';
import { UserContext } from './contexts/UserContext';
import { ThemeContext } from './contexts/ThemeContext';

function App() {
  // Here we are definining where the "user" state actually exists
  const [user, setUser] = useState(null);
const [theme, setTheme]=useState("light-blue")
  // Here we are defining what is the value provided by our context
  // We are "Providing" this value so that descendent elements can "Consume" it from the context
  const contextValue = { user, setUser };
  const themeContextValue={theme, setTheme}
  return (
    <UserContext.Provider value={contextValue}>
      <ThemeContext.Provider value={themeContextValue}>  
      <div className={`App ${theme}`}>
      
        <h1>Codelicious TODO</h1>

        {user && <Heading />}
        {user && <TodoList />}
        {!user && <Login />}

      </div>
      </ThemeContext.Provider>
    </UserContext.Provider>
    
  );
}

export default App;
