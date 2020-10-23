var links = [
  {gravity: 'https://codepen.io/akm2/full/rHIsa'},
  {oregon_trail: 'https://codepen.io/akm2/full/rHIsa'},
  {a_zebra: 'https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK.jpg'}
]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  var jsonLinks = JSON.stringify(links);
  if (path === '/links') {
    return new Response(jsonLinks, {
      headers: { 'content-type': 'application/json' },
    })
  } else {
    return new Response("¯\\_(ツ)_/¯", { status: 404 })
  }
}