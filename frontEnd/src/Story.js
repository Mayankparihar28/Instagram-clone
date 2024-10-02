const Story=({story})=> {
  return (
    <>
      <div className="h-28 w-full bg-[#121212]">
        <div className="w-24 h-24 bg-pink-600 rounded-full cursor-pointer">
          <img
            className="w-full h-full rounded-full "
            src="assets/images/story.png"
            alt=""
          />
        </div>
      </div>
    </>
  );
}
export default Story;
