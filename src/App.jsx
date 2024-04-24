import './App.scss';
import Hero from './components/Hero/Hero';
import Navbar from './components/Navbar/Navbar';
import WorkSection from './components/WorkSection/WorkSection';
import CaseStudie from './components/Studie/CaseStudie';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <WorkSection/>
      <CaseStudie/>

    </>
  )
}

export default App
