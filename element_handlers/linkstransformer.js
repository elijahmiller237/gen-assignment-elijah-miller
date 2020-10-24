/**
 * Handler for adding links inside the div with id 'links'
 */
class LinksTransformer {
    /**
     * @param {Array} links An array of links to be added inside this element
     */
    constructor(links) {
        this.links = links
    }

    async element(element) {
        this.links.forEach(link => {
            element.append(`<a href="${link.url}">${link.name}</a>`,{ html: true })
        })
    }
}

module.exports = LinksTransformer;