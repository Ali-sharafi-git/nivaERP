// return success response
export function RS (body,headers) {
  return {
    status: 200,
    headers,
    body
  };
}


// return error response
export function RE (statusCode : number, errorMessage:string, headers) {
  return {
    status: statusCode,
    headers,
    body:{error:errorMessage }
  };
}