function Tree(expr){

    this.fexpr = expr
    this.root = new EmptyTree(expr)
    // this.left = new EmptyTree(expr)
    // this.right = new EmptyTree(expr)

    Tree.prototype.insertValue = function(value){
        // console.log(value);

        let t = this.root
        this.root = t.insertValue(value)

    }

    function preorder(){

    }
    function inorder(){

    }
    function postorder(){

    }
}

function ValueTree(expr, value){
    this.fexpr = expr
    this.root = value
    this.left = new EmptyTree(expr)
    this.right = new EmptyTree(expr)

    ValueTree.prototype.insertValue = function(value){
        let tmp;
        let newT;
        if (this.fexpr(value, this.root)) {
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
}


function EmptyTree(expr){
    this.fexpr = expr
    this.root = null
    this.left = null
    this.right = null

    EmptyTree.prototype.insertValue = function(value){
        let nt = new ValueTree(this.fexpr, value);
        return nt
    }
}

let t = new Tree((a,b) => a < b);
console.log( t.fexpr(2,1) )
t.insertValue(3)
t.insertValue(2)
t.insertValue(4)
t.insertValue(6)
