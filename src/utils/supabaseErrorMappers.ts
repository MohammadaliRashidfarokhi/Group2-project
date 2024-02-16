enum SupabaseErrorMessageType {
  InvalidCredentials = 'Invalid login credentials',
}

export const mapSupabaseAuthError = (message: string) => {
  switch (message) {
    case SupabaseErrorMessageType.InvalidCredentials:
      return 'Invalid email or password'
    default:
      return 'An error occurred'
  }
}
