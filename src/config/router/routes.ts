export const APP_ROUTES = {
  login: '/login',
  register: '/register',
  home: '/home',
  comments: (postId: string) => `/posts/${postId}`,
  settings: '/settings',
  profile: `/profile`,
  user: (id: string) => `/users/${id}`,
  accountConfirmation: '/account-confirmation',
  search: '/search',
} as const
