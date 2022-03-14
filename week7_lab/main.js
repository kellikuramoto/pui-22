function myRedPanda (name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Black and white red panda head drawing";
    this.image = "red-panda.png";
}

function mySloth (name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Black and white red panda head drawing";
    this.image = "sloth.png";
}

function myPug (name, age) {
    this.name = name;
    this.age = age;
    this.image_alt = "Black and white red panda head drawing";
    this.image = "pug.png";
}

let animal = [new myRedPanda(), new mySloth(), new myPug()];
let names = ["Olly", "Sal", "Slyvester", "Rolly", "Rodger", "Peter", "Bella", "Ruby"];

function generateRandomIndex(maxIndex) {
    var randomNum = Math.floor(Math.random() * maxIndex);
    return randomNum;
}

function generateRandomName() {
    let randomIndex = generateRandomIndex(names.length);
    var randomName = names[randomIndex];
    return randomName;
}

function generateRandomAge() {
    return generateRandomIndex(18);;
}

function generateRandomAnimal() {
    let randomNum = generateRandomIndex(animal.length);

    let randomAnimal = animal[randomNum];
    if (randomAnimal instanceof myRedPanda) {
        return new myRedPanda(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof mySloth) {
        return new mySloth(generateRandomName(), generateRandomAge());
    } 
    else if (randomAnimal instanceof myPug) {
        return new myPug(generateRandomName(), generateRandomAge());
    }
}

function onLoad() {
    // generate a random animal when the document opens
    let animal = generateRandomAnimal();
    console.log(animal)
    // update the page based on the animal properties
    document.getElementById("animal-properties").textContent = animal.name + " is " + animal.age + " years old";
    let imageTag = document.getElementById("animal-img");
    imageTag.setAttribute("src", animal.image);
    imageTag.setAttribute("alt", animal.image_alt);
  
  }