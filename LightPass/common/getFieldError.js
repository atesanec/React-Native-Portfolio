export default function getFieldError({
  meta: {
    touched,
    submitFailed,
    error,
    warning,
  },
  ignoreError,
}) {
  const errorText = error || warning;
  if (ignoreError || !(touched || submitFailed) || !errorText) {
    return null;
  }

  return errorText;
}
