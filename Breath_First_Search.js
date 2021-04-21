var tree = {
    primate: {
        a: {
            b: {
                d: {
                    f: {
                        h: null
                    }
                },
                e: {
                    g: {
                        z: {
                            y: {

                            },
                            p:{
                                pp:{

                                }
                            }
                        }
                    }
                }
            },
            c: {
                j: null,
                i: null,
                k: null
            }
        },

    }
}



const getChildNodes = (obj) => Object.keys(obj);

var list = [];
function bfs(tree) {

    const queue = getChildNodes(tree);
    const nextTree = {};
    while (queue.length > 0) {
        const currentNode = queue.shift();
        list.push(currentNode)
        if (tree[currentNode]) {
            subTreeKeys = getChildNodes(tree[currentNode]);
            subTreeKeys.forEach(key => {
                nextTree[key] = tree[currentNode][key]
            })
        }
    }

    if (Object.keys(nextTree).length > 0) {
        bfs(nextTree);
    } else {
        console.log("We Are The Champions My Friend")
    }

}



bfs(tree)

console.log(list);