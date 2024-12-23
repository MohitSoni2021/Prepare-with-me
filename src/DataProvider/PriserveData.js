export let SELECTED_LANGUAGE = "Python";
export let SELECTED_TOPICS = ["Topics"];
export let DIFFICULTY = "EASY";

export const setSELECTED_LANGUAGE = (newlang) => {
    SELECTED_LANGUAGE = newlang;
}

export const setSELECTED_TOPICS = (newtopics) => {
    SELECTED_TOPICS = newtopics;
};

export const setDIFFICULTY = (newdifficulty) => {
    DIFFICULTY = newdifficulty;
};