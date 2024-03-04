const loadPosts = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/posts"
  );
  const data = await res.json();
  posts = data.posts;
  displayPosts(posts);
};

const displayPosts = (posts) => {
  const postsContainer = document.getElementById("posts-container");

  posts.forEach((post) => {
    // console.log(post);

    const postCard = document.createElement("div");
    postCard.classList = `flex flex-col lg:flex-row gap-6 bg-[#F3F3F5] hover:bg-[#797DFC1A] mb-6 border border-[#F3F3F5] hover:border-main-color duration-200 cursor-pointer p-6 lg:p-10 rounded-3xl`;

    const badgeColor = post.isActive ? "bg-green-500" : "bg-red-500";

    postCard.innerHTML = `
      <div>
        <div class="indicator">
          <span id="indicator-icon" class="indicator-item  badge border-white scale-[0.8] ${badgeColor} mt-1"></span>
          <div class="grid w-[85px] h-[85px] bg-base-300 place-items-center rounded-2xl">
            <img class="w-full rounded-2xl object-cover" src="${post.image}">
          </div>
        </div>
      </div>
      <div class="space-y-3 w-full">
        <div class="flex gap-5 font-inter font-medium text-sm text-[#12132DCC]">
          <span>#<span>${post.category}</span></span>
          <p>Author: <span>${post.author?.name}</span></p>
        </div>
        <h3 class="text-lg lg:text-xl font-bold ">${post.title}</h3>
        <p class="font-inter text-dark-color font-medium lg:w-[580px]">${post.description}</p>
        <hr>
        <div class="flex justify-between ">
          <div class="flex gap-4 lg:gap-6 text-sm lg:text-base font-inter text-dark-color font-medium">
            <div class="flex gap-[6px] lg:gap-2 items-center">
              <img src="images/messege.svg">
              <span>${post.comment_count}</span>
            </div>
            <div class="flex gap-2 items-center">
              <img src="images/eye.svg">
              <span>${post.view_count}</span>
            </div>
            <div class="flex gap-2 items-center">
              <img src="images/clock.svg">
              <span>${post.posted_time} min</span>
            </div>
          </div>
          <div onclick = "markRead('${post.title}', '${post.view_count}')">
            <img class="hover:scale-[1.1] w-8 lg:w-10 duration-300" src="images/green-mail.svg">
          </div>
        </div>
      </div>
    `;
    postsContainer.appendChild(postCard);
    // const markButton = document.querySelectorAll(".mark-btn");
    // console.log(markButton);
    // markButton.addEventListener("click", function () {
    //   // console.log(post.title);
    // });
  });
};

// const markAs = async (data) => {
//   const res = await fetch(
//     "https://openapi.programming-hero.com/api/retro-forum/posts"
//   );
//   const data = await res.json();
//   posts = data.posts;
//   markRead(posts);
// };

let count = 0;

const markRead = (data, data1) => {
  console.log(data, data1);
  const readContainer = document.getElementById("read-container");
  const readElements = document.createElement("div");
  readElements.classList = `flex p-4 bg-white justify-between rounded-3xl items-center gap-2`;

  readElements.innerHTML = `
    <h3 class="font-bold text-sm lg:text-base">${data}</h3>
    <div class="flex gap-1 lg:gap-2 text-sm lg:text-base items-center min-w-max">
      <img src="images/eye.svg">
      <span>${data1}</span>
    </div>
  `;
  readContainer.appendChild(readElements);
  count++;
  console.log(count);

  const countNumber = document.getElementById("count-number");
  countNumber.innerText = count;
};
// const markRead = (posts) => {
//   const markButton = document.getElementById("mark-btn");
//   console.log(markButton);
//   let count = 0;

//   posts.forEach((post) => {
//     const mark = () => {
//       console.log(post);
//     };
//   });
// };

loadPosts();
