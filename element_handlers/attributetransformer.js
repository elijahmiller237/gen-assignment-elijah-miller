/**
 * Handler that sets element attributes
 */
class AttributeTransformer {
    /**
     * @param {String} attribute The attribute to be changed/added
     * @param {String} value The desired value of the specified attribute
     */
    constructor(attribute,value) {
        this.attribute = attribute
        this.value = value
    }

    async element(element) {
        element.setAttribute(this.attribute,this.value);
    }
}

module.exports = AttributeTransformer