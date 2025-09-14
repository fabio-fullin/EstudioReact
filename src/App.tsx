import MiComponente from "./MiComponente";




const App: React.FC = () => {
  
  return (
    <>
    <div>
      <MiComponente param1="este es el param1">
        <h3>Este es el children1</h3>
        <h3>Este es el children2</h3>
      </MiComponente>
      
    </div>
    </>
  );
};

export default App;

