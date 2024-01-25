import { Button } from '@/lib/shadcn-components/ui/button.tsx'
import { Input } from '@/lib/shadcn-components/ui/input.tsx'

export const App = () => {
  return (
    <div>
      Hello
      <Button>Button</Button>
      <Input value={'Hello'} />
    </div>
  )
}

export default App
