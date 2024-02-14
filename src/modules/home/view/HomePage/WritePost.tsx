import { Card, CardContent, CardHeader} from '@/lib/shadcn-components/ui/card.tsx'
import {Button} from '@/lib/shadcn-components/ui/button.tsx'
import {Input} from '@/lib/shadcn-components/ui/input.tsx'

/*
type Props = {
  //onSubmit: (textInput: string) => void;
}
 */

export const WritePost = () => {

  return (
    <Card>
      <CardContent className={'text-white relative px-7 py-5 flex flex-col gap-2 mb-2 mt-2' }>
        <CardHeader>
          <h3 className={'font-bold'}>Write a post</h3>
        </CardHeader>
        <Input placeholder="What's popping" />
        <Button type="submit">Post</Button>
      </CardContent>
    </Card>
  )
}
