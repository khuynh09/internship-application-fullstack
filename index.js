addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
/**
 * Respond with hello worker text
 * @param {Request} request
 */


async function handleRequest(request) {

  let v = await getVariants();

  const randomVariant = v[Math.floor(Math.random() * v.length)];
  return fetch(randomVariant);

}


async function getVariants(){
  let url = "https://cfw-takehome.developers.workers.dev/api/variants"

  let variants;

  request = new Request(url)

  const res = await fetch(url)
  const data = await res.json()

  variants = data.variants

  return variants
}
