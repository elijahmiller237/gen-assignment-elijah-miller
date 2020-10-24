/**
 * Handler for adding a username inside the h1 tag with id 'name'
 */
class NameTransformer {
    /**
     * @param {*} username The username to be added inside this element
     */
    constructor(username) {
        this.username = username
    }

    element(element) {
        element.append(this.username)
    }
}

module.exports = NameTransformer