function Tree(expr){

    this.fexpr = expr
    this.data = new EmptyTree(expr)
    // this.left = new EmptyTree(expr)
    // this.right = new EmptyTree(expr)

    Tree.prototype.insertValue = function(value){
        // console.log(value);

        let t = this.data
        this.data = t.insertValue(value)

    }

    Tree.prototype.preorder = function(){
        // this.data.preorder()

        const gen = this.data.preorder()
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
    }
    Tree.prototype.inorder = function(){
        const gen = this.data.inorder()
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
    }
    Tree.prototype.postorder = function(){
        const gen = this.data.postorder()
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
        console.log(gen.next().value);
    }
}

function ValueTree(expr, value){
    this.fexpr = expr
    this.data = value
    this.left = new EmptyTree(expr)
    this.right = new EmptyTree(expr)

    ValueTree.prototype.insertValue = function(value){
        let tmp;
        let newT;
        if (this.fexpr(value, this.data)) {
            newT = this.left
            tmp = newT.insertValue(value)
            this.left = tmp
        } else {
            newT = this.right
            tmp = newT.insertValue(value)
            this.right = tmp
        }
        return this
    }


    // ValueTree.prototype.preorder = function(){
    ValueTree.prototype.preorder = function*(){
        // console.log(this.data)
        // this.left.preorder()
        // this.right.preorder()

        yield this.data
        yield *this.left.preorder()
        yield *this.right.preorder()
    }

    ValueTree.prototype.inorder = function*(){
        yield *this.left.preorder()
        yield this.data
        yield *this.right.preorder()
    }
    ValueTree.prototype.postorder = function*(){
        yield *this.left.preorder()
        yield *this.right.preorder()
        yield this.data
    }
}


function EmptyTree(expr){
    this.fexpr = expr
    this.data = null
    this.left = null
    this.right = null

    EmptyTree.prototype.insertValue = function(value){
        let nt = new ValueTree(this.fexpr, value);
        return nt
    }

    // EmptyTree.prototype.preorder = function(){
    EmptyTree.prototype.preorder = function*(){}
    EmptyTree.prototype.inorder = function*(){}
    EmptyTree.prototype.postorder = function*(){}
}

let t = new Tree((a,b) => a < b);
console.log( t.fexpr(2,1) )
t.insertValue(3)
t.insertValue(9)
t.insertValue(10)
t.insertValue(15)
t.insertValue(1)
t.insertValue(4)
t.insertValue(6)
t.preorder()
t.inorder()
t.postorder()
