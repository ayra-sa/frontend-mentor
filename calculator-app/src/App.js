import ButtonBox from "./components/ButtonBox";
import Header from "./components/Header";
import Screen from "./components/Screen";
import Wrapper from "./components/Wrapper";
import CalcProvider from "./context/CalcContext";
import "./styles/styles.css";

function App() {
  return (
    <CalcProvider>
      <div className="container">
        <Header />
        <Wrapper>
          <Screen />
          <ButtonBox />
        </Wrapper>
      </div>
    </CalcProvider>
  );
}

export default App;
