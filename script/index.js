const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => displayLessons(data.data));
    };
    // const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
    // const json = await res.json();
    // console.log(json);
    // displayLessons(json.data);
    const loadLevelWord = (id) => {
        const url = `https://openapi.programming-hero.com/api/level/${id}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => displayWord(data.data));
    };
    const displayWord = (words) => {
        const wordContainer = document.getElementById("word-container");
        wordContainer.innerHTML = "";

        words.forEach((word) => {
            console.log(word);
            const createDiv = document.createElement("div");
            createDiv.innerHTML = `
            <div class="bg-white p-14 text-center rounded-xl space-y-6">
            <h2 class="text-[32px] font-bold">${word.word}</h2>
            <p class="font-medium">Meaning /Pronounciation</p>
            <div class="font-bengali font-semibold text-[32px]">"${word.meaning} / ${word.pronunciation}"</div>
            <div class="flex justify-between items-center">
            <button class="btn p-3 bg-[#1A91FF10] border-none rounded-[10px] hover:bg-[#88dd278e] ">
                <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="btn p-3 bg-[#1A91FF10] border-none rounded-[10px] hover:bg-[#88dd278e]">
                <i class="fa-solid fa-volume-high"></i>
           </button>
        </div>
        </div>
            `
            wordContainer.append(createDiv);
        })



    }

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
        <button onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary ">
        <i class="fa-solid fa-book-open"></i> Lesson - ${lesson.level_no}
        </button>`
        //   b. append into container
        lessonContainer.append(divCont);
    }
};

loadLessons ();


// "status": true,
// "message": "successfully fetched all words with a specefic level",
// "data": [
// {
// "id": 4,
// "level": 5,
// "word": "Diligent",
// "meaning": "পরিশ্রমী",
// "pronunciation": "ডিলিজেন্ট"
// },


// "id": 101,
// "level_no": 1,
// "lessonName": "Basic Vocabulary"