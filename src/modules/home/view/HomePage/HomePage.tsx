import { Post } from '@/modules/home/view/HomePage/Post.tsx'

const posts = [
  {
    id: 1,
    name: 'User1',
    username: '@user1',
    text: "Homemade pizza night success! 🍕👩‍🍳 Tried a new recipe with unexpected toppings. What's your go-to pizza combination? #Foodie #PizzaNight #BananaOnPizza",
    likes: 23,
    comments: 2,
  },
  { id: 2, name: 'User2', username: '@user2', text: 'Another text-only post here.', likes: 5, comments: 20 },
  {
    id: 3,
    name: 'User3',
    username: '@user3',
    text: 'Just some random text for the third post.',
    likes: 0,
    comments: 0,
  },
  {
    id: 4,
    name: 'User1',
    username: '@user1',
    text: 'i’m actually pretty cool just give me like 5 tries to get it right',
    likes: 45,
    comments: 11,
  },
  {
    id: 5,
    name: 'User4',
    username: '@user4',
    text: 'The greatest glory in living lies not in never falling, but in rising every time we fall. -Nelson Mandela',
    likes: 33,
    comments: 12,
  },
]

export const HomePage = () => {
  return (
    <div>
      <div className={'flex flex-col gap-7'}>
        {posts.map((post) => (
          <Post key={post.id} data={post} />
        ))}
      </div>
    </div>
  )
}
