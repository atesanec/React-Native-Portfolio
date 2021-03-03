export default function createErrorFromResponse(response) {
  const error = new Error(response.statusText);

  error.response = response;

  return error;
}
