import Story from "./Story";

const StoryList = ({ stories = [] }) => {
  return (
    <>
      <div className="flex space-x-2 p-2 overflow-x-auto">
        {stories.map((story) => (
          <Story key={story.id} story={story} />
        ))}
      </div>
    </>
  );
};

export default StoryList;
