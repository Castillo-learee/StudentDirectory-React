import './style.css';
import HeaderContainer from "./components/HeaderContainer";
function App() {
  

  return (
    <>
  <HeaderContainer />
  <formContainer />
  <listContainer />

  <section id="formContainer">
    <form id="studentform">

      <div className="input-field">
        <label for="name">Student Name</label>
        <input type="text" name="name" id="name" placeholder="Enter student name"/>
      </div>

      <div className="input-field">
        <label for="program">Program</label>
        <input type="text" name="program" id="program"/>
      </div>

      <div>
        <button type="submit"> Add Student </button>
      </div>

    </form>
  </section>
  
  <section id="listContainer">
    
  </section>

    </>
  )
}

export default App
