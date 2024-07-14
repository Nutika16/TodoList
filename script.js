const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  // Check if the input value is empty or just spaces
  if (inputBox.value.trim() === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    // Create a span for the delete (cross) icon
    let span = document.createElement("span");
    span.innerHTML = "\u00D7"; // Unicode for the cross sign
    li.appendChild(span);

    // // Add event listener for the delete action
    // span.onclick = function () {
    //   listContainer.removeChild(li);
    // };
  }
  // Clear the input box
  inputBox.value = "";
  saveData();
}

listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName == "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName == "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
