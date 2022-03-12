/**
 *
 * @param expr
 * @constructor
 */
function Tree(expr){
    this.data = new EmptyTree(expr)

    /**
     *
     * @param value
     */
    Tree.prototype.insertValue = function(value){
        this.data = this.data.insertValue(value)
    }

    /**
     *
     * @returns {Generator<*, void, *>}
     */
    Tree.prototype.preorder = function(){
        return this.data.preorder()
    }

    /**
     *
     * @returns {Generator<*, void, *>}
     */
    Tree.prototype.inorder = function(){
        return this.data.inorder()
    }

    /**
     *
     * @returns {Generator<*, void, *>}
     */
    Tree.prototype.postorder = function(){
        return this.data.postorder()
    }
}

/**
 *
 * @param expr
 * @param value
 * @constructor
 */
function ValueTree(expr, value){
    this.fexpr = expr
    this.data = value
    this.left = new EmptyTree(expr)
    this.right = new EmptyTree(expr)

    /**
     *
     * @param value
     * @returns {ValueTree}
     */
    ValueTree.prototype.insertValue = function(value){
        if (this.fexpr(value, this.data)) {
            this.left = this.left.insertValue(value)
        } else {
            this.right = this.right.insertValue(value)
        }
        return this
    }


    /**
     *
     * @returns {Generator<Generator<*, void, *>|*, void, *>}
     */
    ValueTree.prototype.preorder = function*(){
        yield this.data
        yield *this.left.preorder()
        yield *this.right.preorder()
    }

    /**
     *
     * @returns {Generator<Generator<*, void, *>|*, void, *>}
     */
    ValueTree.prototype.inorder = function*(){
        yield *this.left.inorder()
        yield this.data
        yield *this.right.inorder()
    }

    /**
     *
     * @returns {Generator<Generator<*, void, *>|*, void, *>}
     */
    ValueTree.prototype.postorder = function*(){
        yield *this.left.postorder()
        yield *this.right.postorder()
        yield this.data
    }
}

/**
 *
 * @param expr
 * @constructor
 */
function EmptyTree(expr){
    this.fexpr = expr

    /**
     *
     * @param value
     * @returns {ValueTree}
     */
    EmptyTree.prototype.insertValue = function(value){
        return new ValueTree(this.fexpr, value);
    }

    /**
     *
     * @returns {Generator<*, void, *>}
     */
    EmptyTree.prototype.preorder = function*(){}
    EmptyTree.prototype.inorder = function*(){}
    EmptyTree.prototype.postorder = function*(){}
}
