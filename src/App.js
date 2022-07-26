import './App.css';
import Playground from './Component/Playground';

function App() {
  return (
    <div className='flex flex-col w-screen h-screen bg-gradient-radial from-[#1F3756] to-[#141539] font-barlow overflow-hidden'>
      <div className=''>
      <Playground />
      </div>

    </div>
  );
}

export default App;
