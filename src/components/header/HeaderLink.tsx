import { Link } from 'react-router-dom'
import { cn } from '@/lib/shadcn-util.ts'

type Props = {
  isSelected: boolean
  to: string
  icon: React.ReactNode
  label: string
}

export const HeaderLink = (props: Props) => {
  return (
    <Link
      to={props.to}
      className={cn('flex items-center gap-2 text-gray-500 hover:text-white font-semibold', {
        'text-white': props.isSelected,
      })}
    >
      {props.icon}
      <span className={'hidden md:block'}>{props.label}</span>
    </Link>
  )
}
