import './stories.scss'
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
    <div className="stories">
      <div className="story">
        <img src={ProfileImg} alt="" />
        <span>{stories.name}</span>
        <button>+</button>
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
