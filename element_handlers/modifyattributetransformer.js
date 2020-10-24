/**
 * Handler for cutting a given string out of a given attribute's value.
 */
class ModifyAttributeTransformer {
    /**
     * @param {String} attribute An attribute whose value will be modified
     * @param {String} toRemove The substring that is to be removed from the specified attribute's value
     */
    constructor(attribute,toRemove) {
        this.attribute = attribute
        this.toRemove = toRemove
    }

    async element(element) {
        if (element.hasAttribute(this.attribute)) {
            var attribute = element.getAttribute(this.attribute).replaceAll(this.toRemove,"")
            element.setAttribute(this.attribute,attribute)
        }
    }
}

module.exports = ModifyAttributeTransformer