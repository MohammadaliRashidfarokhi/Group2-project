import ProfileImg from '../../assets/profile.png'


// TEMP - Placeholder for Stories component
export const Stories = () =>{

  const stories = [
    {
      id: 1,
      name: 'John Doe',
      image: ProfileImg,
    },
    {
      id: 2,
      name: 'Jane Doe',
      image: ProfileImg,
    },
    {
      id: 3,
      name: 'John Smith',
      image: ProfileImg,
    },
    {
      id: 4,
      name: 'Jane Smith',
      image: ProfileImg,
    },
  ]

  return (
    <div className="stories flex gap-2 h-250 mb-30 bg-black">
      <div className="story relative">
        <img className="" src={ProfileImg} alt="" />
        <span className="absolute bottom-10 left-10 text-white font-bold">{stories.name}</span>
        <button className="absolute bottom-8 left-2 text-white bg-blue-500 border-none rounded-full w-6 h-6 cursor-pointer text-20 font-bold flex items-center justify-center">
          +
        </button>
      </div>
      {stories.map((story) => (
        <div className="story">
          <img src={story.image} key={story.id} alt="" />
          <span>{story.name}</span>
        </div>
      ))}
    </div>
  )
}
