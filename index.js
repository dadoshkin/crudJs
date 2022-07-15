var selectedRow = null;
function showAlert(message, className) {
  const div = document.createElement("div");
  div.className = `alert alert-${className}`;
  div.appendChild(document.createTextNode(message));
  const container = document.querySelector(".container");
  const main = document.querySelector(".main");
  container.insertBefore(div, main);
  setTimeout(() => document.querySelector(".alert").remove(), 3000);
}
document.querySelector("#studentList").addEventListener("click", (e) => {
  target = e.target;
  // console.log(target.classList.contains("delete"))
  if (target.classList.contains("delete")) {
    target.parentElement.parentElement.remove();
    showAlert("Student Data Delete", "danger");
  }
});
function clearFields() {
  document.querySelector("#firstName").value="";
  document.querySelector("#lastName").value="";
  document.querySelector("#rollNo").value="";
}
document.querySelector("#studentForm").addEventListener("submit", (e) => {
  e.preventDefault();
  console.log("hello");
  const firstName = document.querySelector("#firstName").value;
  const lastName = document.querySelector("#lastName").value;
  const rollNo = document.querySelector("#rollNo").value;
  if (firstName == "" || lastName == "" || rollNo == "") {
    showAlert("Please fill in all fields", "danger");
  } else if (selectedRow == null) {
    const list = document.querySelector("#studentList");
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${firstName}</td>
    <td>${lastName}</td>
                <td>${rollNo}</td>
                <td>
                  <button class="btn btn-primary edit ">Edit</button>
                <button  class="btn btn-danger delete ml-2">Delete</button>
                </td>
    `;
    list.appendChild(row);
    console.log(list);
    selectedRow = null;
    showAlert("Student Added", "success");
  } else {
    selectedRow.children[0].textContent = firstName;
    selectedRow.children[1].textContent = lastName;
    selectedRow.children[2].textContent = rollNo;
    selectedRow = null;
    showAlert("Student Info Edited","info")
  }
  clearFields()
});
document.querySelector("#studentList").addEventListener("click",(e)=>{
    console.log("sss")
    target=e.target
    if(target.classList.contains("edit")){
        selectedRow=target.parentElement.parentElement
        document.querySelector("#firstName").value=selectedRow.children[0].textContent;
        document.querySelector("#lastName").value=selectedRow.children[1].textContent;
        document.querySelector("#rollNo").value=selectedRow.children[2].textContent;
    }
})
