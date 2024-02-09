import "./comments.scss"

export const Comments = () => {

  const currentUser = [
    //TEMP
    {
      id: 1,
      profilePicture: '../src/assets/male_avatar.svg'
    }
  ]
  //Template
  const comments = [
    {
      id: 1,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam libero tincidunt',
      name: 'M.Plank',
      userId: 1,
      profilePicture: '../src/assets/male_avatar.svg'
    },
    {
      id: 2,
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero in dui sollicitudin, nec aliquam libero tincidunt',
      name: 'M.Plank',
      userId: 2,
      profilePicture: '../src/assets/male_avatar.svg'
    }
  ]


  return (
    <div className='comments'>
      <div className="write">
        <img src='../src/assets/male_avatar.svg' alt='' />
        <input type="text" placeholder="Write a comment..." />
        <button>Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment">
          <img src={comment.profilePicture} alt='' />
          <div className="info">
            <span>{comment.name}</span>
            <p>{comment.desc}</p>
          </div>
          <span className="date">5 minutes ago</span>
        </div>
      ))}
    </div>
  )
}
