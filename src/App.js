import "./App.css";
import { Hello } from "./_components/Hello";
import { Input } from "./_components/Input";
import { MyContextProvider } from "./_context/MyContext";

function App() {
  return (
    <div className="App">
      <h1>My Context App</h1>
      <MyContextProvider>
        <Input />
        <Hello />
      </MyContextProvider>
    </div>
  );
}

export default App;
