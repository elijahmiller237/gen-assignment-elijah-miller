/**
 * Handler for changing the content of the title tag for this page
 */
class TitleTransformer {
    /**
     * @param {String} name The String that the title tag's current contents are to be replaced with
     */
    constructor(name) {
        this.name = name
    }

    async element(element) {
        element.setInnerContent(this.name)
    }
}

module.exports = TitleTransformer