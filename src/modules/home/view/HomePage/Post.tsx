type Props = {
  data: {
    id: number
    name: string
    username: string
    text: string
  }
}

export const Post = (props: Props) => {
  const { data } = props

  return (
    <div className={'border'}>
      <div className={'flex flex-col'}>
        <div className={'font-bold text-white'}>{data.name}</div>
        <div className={'text-gray-500'}>{data.username}</div>
      </div>
      <p className={'mt-1 text-white'}>{data.text}</p>
      <div className={'mt-2 text-white'}>
        <span>Heart</span>
        <span>Comment</span>
      </div>
    </div>
  )
}
