import { createTheme, ThemeProvider } from '@mui/material/styles';

import './App.css';

import Header from './components/Header';
import MainSection from './components/MainSection';
import Body from './components/Body';
import BodyTwo from './components/BodyTwo';
import ShortForm from './components/Short-Form';
import LittleDescription from './components/LittleDescription';
import Footer from './components/Footer';

function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <MainSection />
      <Body />
      <BodyTwo />
      <ShortForm />
      <LittleDescription />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
