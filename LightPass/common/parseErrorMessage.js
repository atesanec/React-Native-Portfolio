export default async function parseErrorMessage(error) {
  let errorMessage = error.message;
  if (!errorMessage && error.response) {
    const statusCode = error.response.status;
    let textError;
    try {
      // we cannot call `.json()` if we want to call `.text()` after as it is already read
      textError = await error.response.text();
    } catch (e) {
      // no action needed
    }
    let jsonError;
    if (textError) {
      try {
        jsonError = JSON.parse(textError);
      } catch (e) {
        // no action needed
      }
    }

    if (jsonError && jsonError.name) {
      errorMessage = jsonError.name;
      if (jsonError.description) {
        errorMessage = `${errorMessage}. ${jsonError.description}`;
      }
      if (jsonError.details) {
        const detailsJson = JSON.stringify(jsonError.details);
        errorMessage = `${errorMessage}. ${detailsJson}`;
      }
      // if (jsonError.details && jsonError.details.message) {
      //   errorMessage = `${errorMessage}. ${jsonError.details.message}`;
      // }
    } else if (textError) {
      errorMessage = `${statusCode}. ${textError}`;
    } else if (statusCode === 401) {
      errorMessage = 'Authentication error';
    }
  }

  return { message: errorMessage };
}
