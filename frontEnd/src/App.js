import "./App.css";
import Test from "./Test";
import Navbar from "./Navbar";
import Story from "./Story";
import StoryList from './StoryList';

function App() {
  const stories = [
    { id: 1, title: 'User 1', image: 'https://via.placeholder.com/150' },
    { id: 2, title: 'User 2', image: 'https://via.placeholder.com/150' },
    { id: 3, title: 'User 3', image: 'https://via.placeholder.com/150' },
    { id: 4, title: 'User 4', image: 'https://via.placeholder.com/150' },
    { id: 5, title: 'User 5', image: 'https://via.placeholder.com/150' },
];
  return (
    <>
    <Test />
    <Navbar/>
    <Story/>
    <div className="p-4">
            <h1 className="text-xl font-bold mb-4">Stories</h1>
            <StoryList stories={stories} />
        </div>
    </>
  );
}

export default App; 