import { Card, CardContent, CardHeader, CardFooter} from '@/lib/shadcn-components/ui/card.tsx'
import {Button} from '@/lib/shadcn-components/ui/button.tsx'
import {Input} from '@/lib/shadcn-components/ui/input.tsx'


export const WritePost = () => {

  return (
    <Card>
      <CardHeader className={'pb-3 pt-3'}>
        <h3 className={'text-white text-2xl font-bold'}>Write a post</h3>
      </CardHeader>
      <CardContent className={'text-white relative flex flex-col pb-2.5' }>
        <Input className={'border-black p-0 ring-offset-black'} placeholder="What's popping..." />
      </CardContent>
      <CardFooter className={'flex'}>
        <Button className={'grow'} type={'submit'}>Post</Button>
      </CardFooter>
    </Card>
  )
}
