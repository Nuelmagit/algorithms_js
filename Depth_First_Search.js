var tree = {
    a: {
        b: {
            d: {
                f: {
                    h: null
                }
            },
            e: {
                g: null
            }
        },
        c: {
            j: null,
            i: null,
            k: null
        }
    }
}

const getKeys = (obj) => Object.keys(obj);


var queue = []



function searchIntoTree(tree) {
    if(!tree) return;
    getKeys(tree).forEach(key => {
        queue.push(key);
        if (typeof tree[key] === 'object') {
            searchIntoTree(tree[key])
        }
 
    })

}

searchIntoTree(tree)

console.log(queue);