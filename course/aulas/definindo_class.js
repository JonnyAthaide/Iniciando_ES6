class Color{
    constructor(codeColor, nameColor){
        this.codeColor = codeColor;
        this.nameColor = nameColor;
    }

    getColor(){
        return { codeColor: this.codeColor, nameColor: this.nameColor};
    };
}

let colorRed = new Color("red", "Red");
console.log(colorRed.getColor());
