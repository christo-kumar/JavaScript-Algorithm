export const CheatSheet = () => {
    ArrayDemo();
    TypeConversions();
    MapDemo();
    return (
        <>
            <h3> Java Script Cheat Sheet </h3>
        </>
    )
}

const ArrayDemo = () => {

    let fruits = ["Apple", "Banana", "Cherry"];
    let fruit1 = [];

    //Append
    fruit1.push("Guava");
    fruit1.push("Mango");
    //Merge
    //fruits = fruits.concat(fruit1);
    fruits = [...fruits, ...fruit1];
    console.log(fruits);

    //Insert
    fruits.splice(0, 0, "Avacado");
    console.log(fruits);

    //Remove
    fruits.splice(0, 1);
    console.log(fruits);

    //find
    let index = fruits.findIndex((element) => element === "Apple");
    console.log(index);

    //includes
    if (fruits.includes("Apple")) {
        console.log("Item is available.");
    }

    //slice
    let fruits2 = fruits.slice(2);
    console.log(fruits2);
    let fruits3 = fruits.slice(-2);
    console.log(fruits3);
    let fruits4 = fruits.slice(1, 4); //1,2,3
    console.log(fruits4);
    console.log(fruits);

    //iteration
    for (let fruit of fruits) { console.log(fruit) }
    for (let index in fruits) { console.log(index) }
    for (let index = 0; index < fruits.length; index++) { console.log(index) }
    let i = 0;
    while (i < fruits.length) {
        console.log(i)
        i++;
    }

    fruits.forEach((fruit) => { console.log(fruit) });

    let mapped = fruits.map((fruit) => {
        return fruit + "s";
    });
    console.log(mapped);

    let filtered = fruits.filter((fruit) => {
        return fruit !== "Apple";
    });
    console.log(filtered)

    let sorted = fruits.sort((a, b) => {
        return b.charCodeAt(0) - a.charCodeAt(0);
    })
    console.log(sorted);

    let reduced = fruits.reduce((par, val) => {
        return par + val;
    }, "")
    console.log(reduced);
}


const TypeConversions = () => {

    //Int to String
    let myInt = 42;
    let myString = myInt.toString();
    console.log(myString);

    //String to Int
    let newInt = parseInt(myString);
    console.log(newInt);

    let greetings = "Hello World";
    let charArray = Array.from(greetings)
    let newString = charArray.join("");
    console.log(newString);
}

const MapDemo = () => {
    let fruitMap = new Map();
    fruitMap.set("Apple", 100);
    fruitMap.set("Banana", 200);
    fruitMap.set("Cherry", 300);

    for (let key of fruitMap.keys()) {
        console.log(fruitMap.get(key));
    }

    fruitMap.delete("Apple");
    console.log(fruitMap);
}

