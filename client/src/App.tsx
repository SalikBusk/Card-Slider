import './App.css';

// images
import images from '../src/Data/Images';

function App() {
  return (
    <div className="App">
      <div className=''>
        <div className='flex '>
          {images.map(image => {
            return (
              <div className='min-w-[40rem] w-[30rem] p-[40px]'>
                <img className='w-[100%] h-[100%] rounded-[2rem]' src={image} alt="" />
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
