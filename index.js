var LinksTransformer = require('./element_handlers/linkstransformer')
var AttributeTransformer = require('./element_handlers/attributetransformer')
var ModifyAttributeTransformer = require('./element_handlers/modifyattributetransformer')
var NameTransformer = require('./element_handlers/nametransformer')
var SocialLinksTransformer = require('./element_handlers/sociallinkstransformer')
var TitleTransformer = require('./element_handlers/titletransformer')
const githubIcon = require('simple-icons/icons/github')
const linkedinIcon = require('simple-icons/icons/linkedin')
const avatar = 'https://avatars2.githubusercontent.com/u/13838412?s=460&u=b645db94700890796e7eeeaab4c90992a728031d&v=4'

var links = [
  {name: 'Gravity Points', url: 'https://codepen.io/akm2/full/rHIsa'},
  {name: 'Oregon Trail', url: 'https://archive.org/details/msdos_Oregon_Trail_The_1990'},
  {name: 'A Zebra', url: 'https://cdn.mos.cms.futurecdn.net/HjFE8NKWuCmgfHCcndJ3rK.jpg'}
]

var socialLinks = [
  {url: 'https://www.linkedin.com/in/elijahluismiller/', icon: linkedinIcon},
  {url: 'https://github.com/elijahmiller237', icon: githubIcon}
]

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

const rewriter = new HTMLRewriter()
  .on("div#links", new LinksTransformer(links))
  .on("div#profile", new ModifyAttributeTransformer("style","display: none")) //cut 'display: none' out of the 'style' attribute's value
  .on("img#avatar", new AttributeTransformer("src",avatar))
  .on("h1#name", new NameTransformer("elijahmiller237"))
  .on("div#social", new ModifyAttributeTransformer("style","display: none")) //cut 'display: none' out of the 'style' attribute's value
  .on("div#social", new SocialLinksTransformer(socialLinks))
  .on("title", new TitleTransformer("Eli Miller"))
  .on("body", new AttributeTransformer("class","bg-blue-400"))

async function handleRequest(request) {
  const url = new URL(request.url);
  const path = url.pathname;
  var jsonLinks = JSON.stringify(links);
  if (path === '/links') {
    return new Response(jsonLinks, {
      headers: { 'content-type': 'application/json' },
    })
  } else {
    var response = await fetch('https://static-links-page.signalnerve.workers.dev')
    var page = rewriter.transform(response);
    
    return new Response(page.body, {
      header: { 'content-type': 'text/html' }
    });
  }
}