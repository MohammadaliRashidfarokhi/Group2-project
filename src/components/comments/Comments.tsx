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
    <div className="comments">
      <div className="write flex items-center justify-between gap-2 my-5">
        <img src="/src/assets/male_avatar.svg" alt="" className="w-12 h-12 rounded-full object-cover" />
        <input
          type="text"
          placeholder="Write a comment..."
          className="flex-1 p-2 border-2 border-gray-500 bg-transparent"
        />
        <button className="p-2 px-8 border-none rounded-md bg-blue-500 text-white cursor-pointer">Send</button>
      </div>
      {comments.map((comment) => (
        <div className="comment flex justify-between gap-4">
          <img src={comment.profilePicture} alt="" className="w-10 h-10 rounded-full object-cover" />
          <div className="info">
            <span className="font-semibold self-start">{comment.name}</span>
            <p className="text-sm">{comment.desc}</p>
          </div>
          <span className="date self-baseline text-gray-500 text-sm whitespace-nowrap">5 min. ago</span>
        </div>
      ))}
    </div>
  )
}
