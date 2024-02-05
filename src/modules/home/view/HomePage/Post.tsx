type Props = {
  data: {
    id: number
    name: string
    username: string
    text: string
    likes: number
    comments: number
  }
}

export const Post = (props: Props) => {
  const { data } = props

  return (
    <div className={'border'}>
      <div className={'flex justify-end items-start mt-4 mr-4'}>
        <img src="/dots-icon.svg" alt="More" />
      </div>
      <div className={'ml-4 flex flex-row'}>
        <img src="/user-icon.svg" alt="user" />
        <div className={'flex flex-col'}>
          <div className={'ml-2 font-bold text-white'}>{data.name}</div>
          <div className={'ml-2 text-gray-500'}>{data.username}</div>
        </div>
      </div>

      <p className={'ml-4 mt-1 text-white'}>{data.text}</p>
      <div className={'ml-4 mt-2 text-white flex flex-row gap-2'}>
        <span className={'mt-2 text-white flex flex-row gap-1'}>
          <img src="/heart-icon.svg" alt="Likes" />
          <p className={'mb-1 text-white'}>{data.likes}</p>
        </span>
        <span className={'mt-2 text-white flex flex-row gap-1'}>
          <img src="/comment-icon.svg" alt="Comments" />
          <p className={'mb-1 text-white'}>{data.comments}</p>
        </span>
      </div>
    </div>
  )
}
