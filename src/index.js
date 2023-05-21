/*
    Goal - Zanzibar Zoo
    ======================
    * Zoo animal health checkup process
    * Array of animals with `dietTypeId` property on each one
    * Array of foods { id: 1, dietType: "Carnivore/Herbivore", food: "Chicken/Carrots" }
    * Each function will copy the object and return the copy {...original}
    * Steps:
        1. There are 6 holding areas. Function 1 assigns animal to one of
            them and adds a `holdingArea` property. Parameters are animal
            object and holding area number. Math.random() * 6
        2. Function to weigh animal. 2 parameters (object, number) and adds
            a `weight` property. Checks if animal in a holding area first.
        3. Function to feed the animal, which checks if the animal was
            weighed first, and if so, sets `fed` to `true`. Also adds `food`
            with appropriate food from food array.
        4. Function to check temperature. Animal must be in holding area,
            weighed, and have been fed. `if ("prop" in object)`
        5. Function to take stool sample. Carnivore animals should have
            stinky stool, herbivores have unstinky stool. This function
            checks which food the animal ate, then adds appropriate value
            to new `stoolSmell` property.
*/