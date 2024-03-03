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

  posts.forEach((phone) => {
    console.log(phone);

    const postCard = document.createElement("div");
    postCard.classList = `flex flex-col lg:flex-row gap-6 bg-[#F3F3F5] hover:bg-[#797DFC1A] mb-6 border border-[#F3F3F5] hover:border-main-color duration-300 cursor-pointer p-6 lg:p-10 rounded-3xl`;

    postCard.innerHTML = `
    <div>
            <div class="indicator">
              <span class="indicator-item badge badge-secondary"></span>
              <div class="grid w-[85px] h-[85px] bg-base-300 place-items-center rounded-2xl">
                <img class="w-full rounded-2xl object-cover" src="${phone.image}">
              </div>
            </div>
          </div>
          <div class="space-y-3">
            <div class="flex gap-5 font-inter font-medium text-sm text-[#12132DCC]">
              <span>#<span>${phone.category}</span></span>
              <p>Author: <span>${phone.author?.name}</span></p>
            </div>
            <h3 class="text-lg lg:text-xl font-bold ">${phone.title}</h3>
            <p class="font-inter text-dark-color font-medium">${phone.description}</p>
            <hr class="border-[1.5px] border-dashed">
            <div class="flex gap-6 font-inter text-dark-color font-medium">
              <div class="flex gap-2 items-center">
                <img src="images/messege.svg">
                <span>${phone.comment_count}</span>
              </div>
              <div class="flex gap-2 items-center">
                <img src="images/eye.svg">
                <span>${phone.view_count}</span>
              </div>
              <div class="flex gap-2 items-center">
                <img src="images/clock.svg">
                <span>${phone.posted_time}</span>
              </div>
            </div>
          </div>
    `;

    postsContainer.appendChild(postCard);
  });
};

loadPosts();
