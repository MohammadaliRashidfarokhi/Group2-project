import { Post } from '@/modules/home/view/HomePage/Post.tsx'

const posts = [
  {
    id: 1,
    name: 'User1',
    username: '@user1',
    text: "Homemade pizza night success! 🍕👩‍🍳 Tried a new recipe with unexpected toppings. What's your go-to pizza combination? #Foodie #PizzaNight #BananaOnPizza",
  },
  { id: 2, name: 'User2', username: '@user2', text: 'Another text-only post here.' },
  { id: 3, name: 'User3', username: '@user3', text: 'Just some random text for the third post.' },
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
