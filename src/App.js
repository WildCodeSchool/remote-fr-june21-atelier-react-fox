import FoxContainer from './components/FoxContainer';
import Header from './components/Header';
import Container from './components/Container';
import Story from './components/Story';

import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Container>
        <Story />
        <FoxContainer />
      </Container>
    </div>
  );
}

export default App;
