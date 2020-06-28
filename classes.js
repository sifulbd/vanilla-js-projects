// git add -A
// git commit -m "claases and prototype"
// git push origin master

// function makeColor(r,g,b) {
//     const color = {};
//     color.r = r;
//     color.g = g;
//     color.b = b;
//     color.rgb = function() {
//         const {r,g,b} = this;
//         return `rgb(${r}, ${g}, ${b})`;
//     };
//     color.hex = function() {
//         const {r,g,b} = this;
//         return (
//             '#' + ((1 << 24) + (r + 16) + (g << 8) + b).toString(16).slice(1));
//         }
//     return color;
// } 

// const firstColor = makeColor(23,233,34);
// firstColor.rgb();

// function generateColor(r,g,b) {
//     this.r = r;
//     this.g = g;
//     this.b = b;
// }
// generateColor.prototype.rgb = function() {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b})`;
// }
// generateColor.prototype.hex = function() {
//     const {r,g,b} = this;
//     return ('#' + ((1 << 24) + (r + 16) + (g << 8) + b).toString(16).slice(1));
// }
// generateColor.prototype.rgba = function(a = 1.0) {
//     const {r,g,b} = this;
//     return `rgb(${r}, ${g}, ${b}, ${a})`;
// }

// color1 = new generateColor(23,255,43);


// class Dog{
//     constructor(r,g,b) {
//         this.r =r;
//         this.g = g;
//         this.b = b;
//     }
//     innerRGB() {
//         const {r,g,b} = this;
//         return `${r}, ${g}, ${b}`;
//     }
//     rgba(a = 1.0) {
//         return `rgb(${this.innerRGB()} , ${a})`;
//     }
//     rgb(){
//         return `rgb(${this.innerRGB()})`;
//     }
//     hex() {
//         const {r,g,b} = this;
//         return (
//             '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)
//         );
//     }    
// }

// const dog1 = new Dog(34,234,50);
// const white = new Dog(255,255,255);


class Pet {
    constructor(name, age)  {
        this.name = name;
        this.age = age;
    }
    call() {
        return `${this.name} is barking`;
    }
}
class Dog extends Pet{
    bark() {
        return `${this.name} is barking`;
    }
}

const dog = new Pet("algo", 29);

const dog1 = new Dog("Tomi", 20);


console.log(dog)