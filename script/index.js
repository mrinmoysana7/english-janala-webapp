const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
    // const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
    // const json = await res.json();
    // console.log(json);
    // displayLessons(json.data);
};
const displayLessons = (lessons) => {
    // 1. get the container & empty the container
    const lessonContainer = document.getElementById("lesson-container");
    console.log(lessonContainer);
    lessonContainer.innerHTML = "";
    // 2. get into every  lessons
    for (let lesson of lessons) {
        //   a. create element
        const divCont = document.createElement("div");
        console.log(divCont);
        divCont.innerHTML = `
        <button class="btn btn-outline btn-primary ">
        <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>`
        //   b. append into container
        lessonContainer.append(divCont);
    }
};

loadLessons ();


// "id": 101,
// "level_no": 1,
// "lessonName": "Basic Vocabulary"