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
          <img class="hover:scale-[1.1] w-8 lg:w-10 duration-300" src="images/green-mail.svg">
        </div>
      </div>
    `;
    postsContainer.appendChild(postCard);
  });
};

loadPosts();
