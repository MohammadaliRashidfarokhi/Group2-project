import { CommentDetail } from "@/model/comment"

type Props = {
    data: CommentDetail
}
  
export const Comment = (props: Props) => {
    const {data} = props
    
    return <>
        <p>I am a comment :) {data.CONTENT}</p>
    </>
}