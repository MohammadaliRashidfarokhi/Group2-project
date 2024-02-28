enum SupabaseErrorMessageType {
  InvalidCredentials = 'Invalid login credentials',
}

export const mapSupabaseAuthError = (message: string) => {
  switch (message) {
    case SupabaseErrorMessageType.InvalidCredentials:
      return 'invalid-password-or-email'
    default:
      return 'common-error'
  }
}
