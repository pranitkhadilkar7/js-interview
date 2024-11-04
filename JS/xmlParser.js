function parseXML(xml) {
    const wrapper = document.createElement('div')
    wrapper.innerHTML = xml

    function elemntToObject(element) {
        const obj = {}
        
        if (element.attributes) {
            obj['@attributes'] = {}
            for (let attribute of element.attributes) {
                obj['@attributes'][attribute.name] = attribute.value
            }
        }

        for (let child of element.children) {
            const tagName = child.tagName
            const obj = elemntToObject(child)

            if (obj[tagName]) {
                if (!Array.isArray(obj[tagName])) {
                    obj[tagName] = [obj[tagName]]
                }
                obj[tagName].push(obj)
            } else {
                obj[tagName] = obj
            }
        }

        if (element.children.length === 1 && element.children[0].nodeType === Node.TEXT_NODE) {
            return element.textContent.trim()
        }
        return obj
    }
    return elemntToObject(wrapper.firstElementChild())
}


const xml = `
    <book>
        <title lang="en">The Art of Code</title>
        <author>Jane Doe</author>
        <chapters>
            <chapter>Introduction</chapter>
            <chapter>JavaScript Basics</chapter>
        </chapters>
    </book>
`;


console.log(parseXML(xml))