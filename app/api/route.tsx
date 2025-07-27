//for route handlers function must be named as one of http methods
export function DELETE(request: {}) {
  console.log(request);
  return new Response("hello");
}
