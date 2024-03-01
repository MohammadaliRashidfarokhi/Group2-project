export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      COMMENT: {
        Row: {
          author: string
          COMMENT_TO: string
          CONTENT: string
          id: string
          PUBLISHED_AT: string
        }
        Insert: {
          author: string
          COMMENT_TO: string
          CONTENT: string
          id?: string
          PUBLISHED_AT?: string
        }
        Update: {
          author?: string
          COMMENT_TO?: string
          CONTENT?: string
          id?: string
          PUBLISHED_AT?: string
        }
        Relationships: [
          {
            foreignKeyName: "COMMENT_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "COMMENT_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "COMMENT_COMMENT_TO_fkey"
            columns: ["COMMENT_TO"]
            isOneToOne: false
            referencedRelation: "home_page_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "COMMENT_COMMENT_TO_fkey"
            columns: ["COMMENT_TO"]
            isOneToOne: false
            referencedRelation: "POST"
            referencedColumns: ["id"]
          }
        ]
      }
      COMMENT_LIKES: {
        Row: {
          liked: string
          liker: string
        }
        Insert: {
          liked?: string
          liker?: string
        }
        Update: {
          liked?: string
          liker?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_COMMENT_LIKES_liked_fkey"
            columns: ["liked"]
            isOneToOne: false
            referencedRelation: "COMMENT"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_COMMENT_LIKES_liked_fkey"
            columns: ["liked"]
            isOneToOne: false
            referencedRelation: "post_comments"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_COMMENT_LIKES_liker_fkey"
            columns: ["liker"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_COMMENT_LIKES_liker_fkey"
            columns: ["liker"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          }
        ]
      }
      FOLLOWER: {
        Row: {
          follower: string
          FOLLOWING: string
        }
        Insert: {
          follower: string
          FOLLOWING: string
        }
        Update: {
          follower?: string
          FOLLOWING?: string
        }
        Relationships: [
          {
            foreignKeyName: "FOLLOWER_follower_fkey"
            columns: ["follower"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FOLLOWER_follower_fkey"
            columns: ["follower"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FOLLOWER_FOLLOWING_fkey"
            columns: ["FOLLOWING"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "FOLLOWER_FOLLOWING_fkey"
            columns: ["FOLLOWING"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          }
        ]
      }
      POST: {
        Row: {
          author: string
          CONTENT: string
          id: string
          PUBLISHED_AT: string
        }
        Insert: {
          author: string
          CONTENT: string
          id?: string
          PUBLISHED_AT?: string
        }
        Update: {
          author?: string
          CONTENT?: string
          id?: string
          PUBLISHED_AT?: string
        }
        Relationships: [
          {
            foreignKeyName: "POST_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "POST_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          }
        ]
      }
      POST_LIKES: {
        Row: {
          liked: string
          liker: string
        }
        Insert: {
          liked?: string
          liker: string
        }
        Update: {
          liked?: string
          liker?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_Likes_liked_fkey"
            columns: ["liked"]
            isOneToOne: false
            referencedRelation: "home_page_posts"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Likes_liked_fkey"
            columns: ["liked"]
            isOneToOne: false
            referencedRelation: "POST"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Likes_liker_fkey"
            columns: ["liker"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "public_Likes_liker_fkey"
            columns: ["liker"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          }
        ]
      }
      USER: {
        Row: {
          BACKGROUND_COLOR: string
          EMAIL: string
          FIRST_NAME: string
          id: string
          LAST_NAME: string
          USERNAME: string
        }
        Insert: {
          BACKGROUND_COLOR: string
          EMAIL: string
          FIRST_NAME: string
          id: string
          LAST_NAME: string
          USERNAME: string
        }
        Update: {
          BACKGROUND_COLOR?: string
          EMAIL?: string
          FIRST_NAME?: string
          id?: string
          LAST_NAME?: string
          USERNAME?: string
        }
        Relationships: [
          {
            foreignKeyName: "public_USER_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Views: {
      followers_count: {
        Row: {
          id: string | null
          tot_followers: number | null
          tot_following: number | null
        }
        Relationships: [
          {
            foreignKeyName: "public_USER_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      home_page_posts: {
        Row: {
          author: string | null
          comments: number | null
          CONTENT: string | null
          FIRST_NAME: string | null
          id: string | null
          LAST_NAME: string | null
          likes: number | null
          PUBLISHED_AT: string | null
          USERNAME: string | null
        }
        Relationships: [
          {
            foreignKeyName: "POST_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "POST_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          }
        ]
      }
      post_comments: {
        Row: {
          author: string | null
          COMMENT_TO: string | null
          CONTENT: string | null
          FIRST_NAME: string | null
          id: string | null
          LAST_NAME: string | null
          likes: number | null
          PUBLISHED_AT: string | null
          USERNAME: string | null
        }
        Relationships: [
          {
            foreignKeyName: "COMMENT_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "USER"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "COMMENT_author_fkey"
            columns: ["author"]
            isOneToOne: false
            referencedRelation: "followers_count"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "COMMENT_COMMENT_TO_fkey"
            columns: ["COMMENT_TO"]
            isOneToOne: false
            referencedRelation: "POST"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "COMMENT_COMMENT_TO_fkey"
            columns: ["COMMENT_TO"]
            isOneToOne: false
            referencedRelation: "home_page_posts"
            referencedColumns: ["id"]
          }
        ]
      }
    }
    Functions: {
      home_page_posts: {
        Args: Record<PropertyKey, never>
        Returns: Record<string, unknown>
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never