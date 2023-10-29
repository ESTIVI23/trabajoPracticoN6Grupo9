import Contador from "./components/Contador";
import Conversor from "./components/Conversor";
//import ListaDeNotasdos from "./components/ListaDeNotas";
import NoteList from "./components/NotesList";

function App(){

    return(
        <>
            <Contador numero ={1}/>
            <Conversor/>
            <NoteList/>


        </>
    );
}
export default App;