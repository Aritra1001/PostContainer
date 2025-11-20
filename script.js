let postsData = [
  {
    id: 1,
    author: "John",
    content: "Hello, Instagram!",
    likes: 10,
    comments: ["Great post!", "Nice photo!"],
    image: "https://files.codingninjas.in/image2-28694.jpg",
  },
  {
    id: 2,
    author: "Jane",
    content: "This is a great post!",
    likes: 15,
    comments: [],
    image: "https://files.codingninjas.in/oip-28704.jpg",
  },
  {
    id: 3,
    author: "Alice",
    content: "Another post",
    likes: 8,
    comments: [],
    image: "https://files.codingninjas.in/th-2-28706.jpg",
  },
  {
    id: 4,
    author: "Bob",
    content: "Check out this photo!",
    likes: 20,
    comments: [],
    image: "https://files.codingninjas.in/image1-28708.jpg",
  },
];

const likedPosts = new Set();
const postsEl = document.getElementById("posts"); //posts div
const postForm = document.getElementById("postForm");
const inputCaptionEl = document.getElementById("postInput");
const inputFileEl = document.getElementById("imageInput");

postsData.forEach((_postData) => {
  renderPosts(_postData);
});

function renderPosts({ id, author, content, likes, comments, image }) {
  const postEl = document.createElement("div"); //new div container to contain the post details
  postEl.classList.add("post");

  // author ele
  const authorEl = document.createElement("h3");
  authorEl.textContent = `${author}`;

  // image ele
  const imageEl = document.createElement("img");
  // imageEl.setAttribute("src", `${image}`);
  imageEl.src = image;
  imageEl.setAttribute("alt", "Post Image");

  // post content ele
  const postContentEle = document.createElement("p");
  postContentEle.textContent = `${content}`;

  //button ele
  const likeBtn = document.createElement("button");
  likeBtn.textContent = "Like";

  likeBtn.addEventListener("click", () => {
    if (likedPosts.has(id)) return;

    likes++;
    likedPosts.add(id);
    likeBtn.style.backgroundColor = "red";
    likeBtn.setAttribute("disabled", "true");
    postFooterEl.textContent = `Likes: ${likes} Comments: ${comments.length}`;
  });

  //comment input ele
  const inputEle = document.createElement("input");
  inputEle.type = "text";
  inputEle.placeholder = "Write a comment...";

  // comment btn
  const commentBtn = document.createElement("button");
  commentBtn.textContent = "Comment";

  commentBtn.addEventListener("click", () => {
    const newCmt = inputEle.value.trim();
    if (newCmt === "") return;
    comments.push(newCmt);
    postFooterEl.textContent = `Likes: ${likes} Comments: ${comments.length}`;
    const cmtEl = document.createElement("p");
    cmtEl.textContent = newCmt;
    cmtCont.appendChild(cmtEl);
    inputEle.value = "";
  });

  // likes and comment div
  const postFooterEl = document.createElement("div");
  postFooterEl.classList.add("post-footer");
  postFooterEl.textContent = `Likes: ${likes} Comments: ${comments.length}`;

  const cmtCont = document.createElement("div");
  cmtCont.classList.add("comments-container");
  cmtCont.style.display = "none";
  // cmtCont.classList.add("hidden");

  comments.forEach((_cmt) => {
    const cmtEl = document.createElement("p");
    cmtEl.textContent = _cmt;
    cmtCont.appendChild(cmtEl);
  });

  postFooterEl.addEventListener("click", () => {
    //   we can toggle using classList toggle
    //   cmtCont.classList.toggle("show");

    // also using checking and setting the display property
    if (cmtCont.style.display === "none") {
      cmtCont.style.display = "block";
    } else {
      cmtCont.style.display = "none";
    }
  });

  postEl.append(
    authorEl,
    imageEl,
    postContentEle,
    likeBtn,
    inputEle,
    commentBtn,
    postFooterEl,
    cmtCont
  );

  postsEl.appendChild(postEl);
}

postForm.addEventListener("submit", (event) => {
  event.preventDefault(); //to prevent reload of the page
  console.log("form submitted");
  console.log(
    "image file",
    inputFileEl.files[0],
    URL.createObjectURL(inputFileEl.files[0]),
    inputCaptionEl.value
  );
  const caption = inputCaptionEl.value;
  const imageFile = inputFileEl.files[0];
  const imageUrl = URL.createObjectURL(imageFile);
  renderPosts({
    id: postsData.length + 1,
    author: "Aritra",
    content: `${caption}`,
    likes: 0,
    comments: [],
    image: `${imageUrl}`,
  });
  postForm.reset();
});
