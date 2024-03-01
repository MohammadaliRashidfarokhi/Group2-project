import { Tables } from '@/model/dbTypes.ts'

export type FollowersMap = {
  followers: Tables<'FOLLOWER'>[]
  following: Tables<'FOLLOWER'>[]
}
