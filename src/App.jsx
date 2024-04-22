import { Link } from "react-router-dom"
import ButtonClicker from "./ButtonClicker";

const Title = () => {
  return (
    <h1>
      Can you Resist...?
    </h1>
  )
}



function App() {
  return (
    <div className="bg-primary h-100 p-5" style={{ color: "white" }}>
      <Link className="text-light" to="/about">
        About
      </Link>
      <span> | </span>
      <Link className="text-light" to="/contacts">
        Contacts
      </Link>
      <Title />
      <ButtonClicker />

    </div>
  );
}


export default App
