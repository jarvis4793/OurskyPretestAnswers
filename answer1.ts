
// Use tree structure to chain and store the data
class TreeNode {
    count: number
    children: Map<string, TreeNode>;

    constructor(){
        this.children = new Map <string, TreeNode>()
        this.count = 0;
    }
}

let answer1Tree = new TreeNode()

function ingest(input: string): void {

    // Divide the string into tokens array
    const tokens = input.split(":")

    // Create a currentNode of the tree
    let currentNode = answer1Tree

    // Ingest the token into the tree 
    for (const token of tokens){

        //  If the tree doesn't contain the node at current hierarchy, add it into the structure
        if (!currentNode.children.has(token)){
            currentNode.children.set(token, new TreeNode())
        } 
        // Move the current node to the node just added
        currentNode = currentNode.children.get(token)!
        currentNode.count++
    }
    // Update the total tokens array added into the tree
    answer1Tree.count++
}

function appearance(input: string) {

    // Divide the input string into tokens array to check if they exist in the tree
    const tokens = input.split(":")

    // Get the total amount of the tokens previously inserted in the tree
    const totalCount = answer1Tree.count

    let currentNode = answer1Tree

    // Only when all the input tokens existed in a chain within the tree could the input see as exist. 
    for (const token of tokens) {
        if (currentNode.children.has(token)) {
            currentNode = currentNode.children.get(token)!
        } else {
            // if any token doesn't exist at the correct hierarchy in the tree, the input would classify as non-existing tokens array.
            return console.log(0)
        }
    }
    // the appearance was stored at the final node of the chain. 
    return console.log(currentNode.count / totalCount)
}

ingest('oursky:uk:dev')
ingest('oursky:hk:design')
ingest('oursky:hk:pm')
ingest('oursky:hk:dev')
ingest('skymaker')
appearance('oursky')
appearance('oursky:hk')

ingest('skymaker:london:ealing:dev')
ingest('skymaker:london:design')
ingest('skymaker:london:design')
ingest('skymaker:man:pm')
ingest('skymaker:man:pm')
appearance('skymaker:man')
appearance('skymaker:lon')
appearance('london:skymaker')
