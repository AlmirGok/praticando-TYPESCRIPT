import { Button } from "./components/Button/index";
import { FormEvent, useState } from "react";

function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    alert("Deu certo");
    return console.log("Deu certo");
  }

  return (
    <div className="App">
      <h1>{count}</h1>
      <Button setCount={setCount} count={count} />

      <form onSubmit={handleSubmit}>
        <label htmlFor="email">email</label>

        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">password</label>
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}

export default App;
