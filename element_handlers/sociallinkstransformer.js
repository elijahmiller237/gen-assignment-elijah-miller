/**
 * Handler for adding social links inside the div with id 'social'
 */
class SocialLinksTransformer {
    /**
     * @param {Array} links An array of social links to be added inside this element
     */
    constructor(links) {
        this.links = links
    }

    async element(element) {
        this.links.forEach(link => {
            element.append(`<a href="${link.url}">${link.icon.svg}</a>`,{ html: true })
        })
    }
}

module.exports = SocialLinksTransformer