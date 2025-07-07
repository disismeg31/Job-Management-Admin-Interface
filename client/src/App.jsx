import './App.css'
import Layout from './layout/Layout';
import JobContextProvider from './context/JobContext';

function App() {
   
  return (
    <>
    <JobContextProvider>
      <Layout/>
    </JobContextProvider>
    </>
  )
}

export default App
