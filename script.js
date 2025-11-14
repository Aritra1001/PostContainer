let post1 = {
  id: 1,
  author: "John",
  content: "My first Post!",
  likes: 10,
  comments: ["Great post!", "Nice photo!"],
  image: "https://files.codingninjas.in/image2-28694.jpg",
};

const postsEl = document.getElementById("posts"); //posts div
const postEl = document.createElement("div"); //new div container to contain the post details
postEl.classList.add("post");

// author ele
const authorEl = document.createElement("h3");
authorEl.textContent = `${post1.author}`;

// image ele
const imageEl = document.createElement("img");
// imageEl.setAttribute("src", `${post1.image}`);
imageEl.src = post1.image;
imageEl.setAttribute("alt", "Post Image");

// post content ele
const postContentEle = document.createElement("p");
postContentEle.textContent = `${post1.content}`;

//button ele
const btnEle = document.createElement("button");
btnEle.textContent = "Like";

//comment input ele
const inputEle = document.createElement("input");
inputEle.type = "text";
inputEle.placeholder = "Write a comment...";

// comment btn
const commentBtn = document.createElement("button");
commentBtn.textContent = "Comment";

// likes and comment div
const postFooterEl = document.createElement("div");
postFooterEl.classList.add("post-footer");
postFooterEl.textContent = `Likes: ${post1.likes} Comments: ${post1.comments.length}`;

const cmtCont = document.createElement("div");
cmtCont.classList.add("comments-container");
cmtCont.style.display = "none";
// cmtCont.classList.add("hidden");

post1.comments.forEach((_cmt) => {
  console.log("comment", _cmt);
  const cmtEl = document.createElement("p");
  cmtEl.textContent = _cmt;
  cmtCont.appendChild(cmtEl);
});

postFooterEl.addEventListener("click", () => {
  console.log("post footer ele clicked");

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
  btnEle,
  inputEle,
  commentBtn,
  postFooterEl,
  cmtCont
);

postsEl.appendChild(postEl);
