import { Link } from "react-router-dom"
import ButtonClicker from "./ButtonClicker"

function About() {
  return (
    <div className="p-5">
      <Link to='/'>{'<- Back'}</Link>
      <h1>About Page</h1>
      <p>This is the about page. There really is not a whole lot to say.</p>
    </div>
  )
}


export default About
