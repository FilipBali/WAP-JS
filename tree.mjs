/**
 * @author Filip Bali (xbalif00)
 * xbalif00@stud.fit.vutbr.cz
 * WAP JS Project
 */

/**
 * Binary tree structure
 * @param expr Comparison function for node selection
 * @constructor Tree object
 */
export function Tree(expr){
    this.data = new EmptyNode(expr)

    /**
     * Tree structure implementation of function to insert a value into tree structure
     * @param value Inserted value
     */
    Tree.prototype.insertValue = function(value){
        this.data = this.data.insertValue(value)
    }

    /**
     * Tree structure implementation of function to preorder tree traversal
     * @returns {Generator<*, void, *>}
     */
    Tree.prototype.preorder = function(){
        return this.data.preorder()
    }

    /**
     * Tree structure implementation of function to inorder tree traversal
     * @returns {Generator<*, void, *>}
     */
    Tree.prototype.inorder = function(){
        return this.data.inorder()
    }

    /**
     * Tree structure implementation of function to inorder tree traversal
     * @returns {Generator<*, void, *>}
     */
    Tree.prototype.postorder = function(){
        return this.data.postorder()
    }
}

/**
 * Node with value
 * @param expr Comparison function for node selection
 * @param value Node value
 * @constructor Node object with value
 */
function ValueNode(expr, value){
    this.fexpr = expr
    this.data = value
    this.left = new EmptyNode(expr)
    this.right = new EmptyNode(expr)

    /**
     * Node with value implementation of function to insert a value into tree structure
     * @param value
     * @returns {ValueNode}
     */
    ValueNode.prototype.insertValue = function(value){
        if (this.fexpr(value, this.data)) {
            this.left = this.left.insertValue(value)
        } else {
            this.right = this.right.insertValue(value)
        }
        return this
    }


    /**
     * Node with value implementation of function to preorder tree traversal
     * @returns {Generator<Generator<*, void, *>|*, void, *>}
     */
    ValueNode.prototype.preorder = function*(){
        yield this.data
        yield *this.left.preorder()
        yield *this.right.preorder()
    }

    /**
     * Node with value implementation of function to inorder tree traversal
     * @returns {Generator<Generator<*, void, *>|*, void, *>}
     */
    ValueNode.prototype.inorder = function*(){
        yield *this.left.inorder()
        yield this.data
        yield *this.right.inorder()
    }

    /**
     * Node with value implementation of function to postorder tree traversal
     * @returns {Generator<Generator<*, void, *>|*, void, *>}
     */
    ValueNode.prototype.postorder = function*(){
        yield *this.left.postorder()
        yield *this.right.postorder()
        yield this.data
    }
}

/**
 * Node with no value
 * @param expr Comparison function for node selection
 * @constructor Node object without value
 */
function EmptyNode(expr){
    this.fexpr = expr

    /**
     * Node with no value implementation of function to insert a value into tree structure
     * @param value
     * @returns {ValueNode}
     */
    EmptyNode.prototype.insertValue = function(value){
        return new ValueNode(this.fexpr, value);
    }

    /**
     * Node with no value implementation of function to postorder tree traversal
     * @returns {Generator<*, void, *>}
     */
    EmptyNode.prototype.preorder = function*(){}
    /**
     * Node with no value implementation of function to postorder tree traversal
     * @returns {Generator<*, void, *>}
     */
    EmptyNode.prototype.inorder = function*(){}
    /**
     * Node with no value implementation of function to postorder tree traversal
     * @returns {Generator<*, void, *>}
     */
    EmptyNode.prototype.postorder = function*(){}
}
