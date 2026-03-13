    const loadLessons = () => {
    fetch("https://openapi.programming-hero.com/api/levels/all")
    .then((res) => res.json())
    .then((data) => 
        
        displayLessons(data.data));
    };

    const removeActive = () => {
        const allLesBtn = document.querySelectorAll(".lesson-button");
        allLesBtn.forEach((btn) => btn.classList.remove("active"));
    }

    const loadLevelWord = (id) => {
        const url = `https://openapi.programming-hero.com/api/level/${id}`
        fetch(url)
        .then((res) => res.json())
        .then((data) => {
            removeActive();   
            const clickBtn = document.getElementById(`lesson-btn-${id}`);
            clickBtn.classList.add("active");
            displayWord(data.data);
        });
    };

    const loadDetails = async (id) => {
        const url = `https://openapi.programming-hero.com/api/word/${id}`;
        // console.log(url);
        const res = await fetch(url);
        const details = await res.json();
        displayDetails(details.data);
    };

    const displayDetails = (word) => {
        console.log(word);
        const modalContain = document.getElementById("display-Details");
        modalContain.innerHTML = `
        <div class="">
            <h2 class="font-semibold text-[36px]">${word.word} (<i class="fa-solid fa-microphone-lines"></i> : ${word.pronunciation})</h2>
        </div>
        <div class="">
            <h2 class="font-semibold text-[24px]">Meaning</h2>
            <p class="font-medium text-[24px]">${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"}</p>
        </div>
        <div class="">
            <h2 class="font-semibold text-[24px]">Example</h2>
            <p>${word.sentence ? word.sentence : "উদাহরণ পাওয়া যায়নি"}</p>
        </div>
        <div class="">
            <h2 class="font-medium text-[24px]">সমার্থক শব্দ গুলো</h2>
            <span class="btn">${word.synonyms[0] ? word.synonyms[0] : "শব্দ পাওয়া যায়নি"}</span>
            <span class="btn">${word.synonyms[1] ? word.synonyms[1] : "শব্দ পাওয়া যায়নি"}</span>
            <span class="btn">${word.synonyms[2] ? word.synonyms[2] : "শব্দ পাওয়া যায়নি"}</span>
        </div>
        
        `;
        document.getElementById("word_modal").showModal();

    };

    const displayWord = (words) => {
        const wordContainer = document.getElementById("word-container");
        wordContainer.innerHTML = "";

        if(words.length == 0){
            wordContainer.innerHTML = `
            <section class="col-span-full">
              <div class="text-center py-16 space-y-3">
                  <img class="mx-auto" src="./assets/alert-error.png" alt="">
                  <p class="text-[#79716B] font-bengali">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
                  <h2 class="font-medium text-[35px] font-bengali">নেক্সট Lesson এ যান</h2>
              </div>       
            </section>
            
            `
            return;
        }

        words.forEach((word) => {
            console.log(word);
            const createDiv = document.createElement("div");
            createDiv.innerHTML = `
            <div class="bg-white p-14 text-center rounded-xl space-y-6">
            <h2 class="text-[32px] font-bold">${word.word ? word.word : "শব্দ পাওয়া যায়নি"}</h2>
            <p class="font-medium">Meaning / Pronounciation</p>
            <div class="font-bengali font-semibold text-[32px]">"${word.meaning ? word.meaning : "অর্থ পাওয়া যায়নি"} / ${word.pronunciation ? word.pronunciation :"pronunciation পাওয়া যায়নি"}"</div>
            <div class="flex justify-between items-center">
            <button onclick="loadDetails(${word.id})" class="btn p-3 bg-[#1A91FF10] border-none rounded-[10px] hover:bg-[#88dd278e] ">
                <i class="fa-solid fa-circle-info"></i>
            </button>
            <button class="btn p-3 bg-[#1A91FF10] border-none rounded-[10px] hover:bg-[#88dd278e]">
                <i class="fa-solid fa-volume-high"></i>
           </button>
        </div>
        </div>
            `
            wordContainer.append(createDiv);
        });
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
        <button id="lesson-btn-${lesson.level_no}" onclick="loadLevelWord(${lesson.level_no})" class="btn btn-outline btn-primary lesson-button ">
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

// const res = await fetch("https://openapi.programming-hero.com/api/levels/all");
    // const json = await res.json();
    // console.log(json);
    // displayLessons(json.data);

//     "word": "Eager",
// "meaning": "আগ্রহী",
// "pronunciation": "ইগার",
// "level": 1,
// "sentence": "The kids were eager to open their gifts.",
// "points": 1,
// "partsOfSpeech": "adjective",
// "synonyms": [
// "enthusiastic",
// "excited",
// "keen"
// ],
// "id": 5