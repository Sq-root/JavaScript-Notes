let inputFiled = document.querySelector("#textFiled");
let course_list = document.querySelector(".course-list");
function addChapter(event) {
  //Remove Emty Msg
  if (course_list.children[0].className === "emptymsg") {
    course_list.children[0].remove();
  }

  let inputvalue = inputFiled.value;
  console.log(inputvalue);
  //Create New li
  let listEle = document.createElement("li");
  listEle.className = "list-group-item d-flex justify-content-between";
  // listEle.textContent = inputFiled.value;
  listEle.innerHTML = `
  <h3>${inputvalue}</h3>
  <button class="btn btn-warning ms-auto me-2" onclick="editCourse(this)">Edit</button>
  <button class="btn btn-danger"  onclick="removeChapter(this)">Remove</button>
  `;
  course_list.appendChild(listEle);
}

// Note : this -> is hold ref of event emitter element
function removeChapter(currentElement) {
  console.log(currentElement);
  currentElement.parentElement.remove();
  //If nothing is there so empty msg
  if (course_list.children.length < 1) {
    let emptyMsg = document.createElement("h3");
    emptyMsg.className = "emptymsg";
    emptyMsg.textContent = "Nothing is here. Please Add Item !";
    course_list.appendChild(emptyMsg);
  }
}

function editCourse(currentElement) {
  if (currentElement.textContent === "Done") {
    currentElement.textContent = "Edit";
    let title = currentElement.previousElementSibling.value;
    let editFiled = document.createElement("h3");
    editFiled.textContent = title;
    currentElement.parentElement.replaceChild(
      editFiled,
      currentElement.previousElementSibling
    );
  } else {
    currentElement.textContent = "Done";
    let title = currentElement.previousElementSibling.textContent;
    let editFiled = document.createElement("input");
    editFiled.type = "text";
    editFiled.placeholder = `${title}`;
    editFiled.className = "form-control";
    editFiled.value = title;

    currentElement.parentElement.replaceChild(
      editFiled,
      currentElement.previousElementSibling
    );
  }
  // currentElement.parentElement.appendChild(editFiled);
  // title.remove();
  console.log(title);
}
