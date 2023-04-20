import Header from "../Header/Header";
import Tours from "../tours/Tours";
import Footer from "../Footer/Footer";

function Home(props){
    let test = props;
    return(
<>
<Header/>
<Tours data={test}/>
<Footer/>
</>
    );
}
export default Home;