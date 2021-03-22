import logo from './logo.svg';
import './App.css';
function InputFormat(){
  return (
    <header className="Input"><p className="input"><b>Input Format</b></p>
    First line contains <b>N.N</b> lines follow, each having a PAN number.</header>
  )
}
function Constrains(){
  return (
    <section className="constraints">
    <b>Constrains</b> <br></br>
    <ul><li>1≤N≤10</li>
    <li>Each char is an uppercase letter,i.e.. char ∈ ['A','Z']</li>
    <li>Each length of the PAN number is always 10,ie., <i>length(PAN)=10</i></li>
    <li>Every character in PAN is either char or digit satisfying above constraints.</li>
    </ul>
    </section>
  )
};
function OutputFormat(){
  return(
    <footer><b>Output format</b>
    <p>For every PAN number listed, print YES if it is valid and NO if it isnt. </p>
    </footer>
  )
};
function App() {
  return (
    <div className="App">
      <InputFormat/>
      <br></br>        
        <Constrains/>
        <br></br>
        <OutputFormat/>
             
    </div>
  );
}

export default App;
