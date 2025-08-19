// Open popup
document.getElementById("addbtn").addEventListener("click", openModal);

function openModal() {
  const modal = document.getElementById("studentModal");
  const modalBox = document.getElementById("modalBox");

  modal.classList.remove("hidden");
  setTimeout(() => {
    modalBox.classList.remove("scale-75", "opacity-0");
    modalBox.classList.add("scale-100", "opacity-100");
  }, 50);
}

// Close popup
function closeModal() {
  const modal = document.getElementById("studentModal");
  const modalBox = document.getElementById("modalBox");

  modalBox.classList.remove("scale-100", "opacity-100");
  modalBox.classList.add("scale-75", "opacity-0");

  setTimeout(() => {
    modal.classList.add("hidden");
  }, 300);
}

// Array to store students
let students = [
  {
    name: "Dip bag",
    classNo: "10",
    roll: 1,
    phone: "6291230286",
    gmail: "dipbag009@gmail.com"
  },
  {
    name: "Rahul bag",
    classNo: "11",
    roll: 2,
    phone: "6291230286",
    gmail: "dipbag009@gmail.com"
  },
  {
    name: "Raj bag",
    classNo: "12",
    roll: 3,
    phone: "6291230286",
    gmail: "dipbag009@gmail.com"
  }
];
  // for display data
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  students.forEach(student => {
    let tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-300", "hover:bg-[#fff7]", "transition-all", "duration-700");

    tr.innerHTML = `
      <td class="py-3 px-2 text-center">${student.name}</td>
      <td class="py-3 px-2 text-center">${student.classNo}</td>
      <td class="py-3 px-2 text-center">${student.roll}</td>
      <td class="py-3 px-2 text-center">${student.phone}</td>
      <td class="py-3 px-2 text-center">${student.gmail}</td>
      <td class="py-3 px-2 text-center">
        <input type="checkbox" class="w-5 h-5">
      </td>
    `;
    tbody.appendChild(tr);
  });

// Form Submit
document.getElementById("studentForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const classNo = document.getElementById("classNo").value;
  const roll = document.getElementById("roll").value;
  const phone = document.getElementById("phone").value;
  const gmail = document.getElementById("gmail").value;

  // Duplicate check
  const exists = students.some(student => student.roll == roll && student.classNo == classNo);

  if (exists) {
    alert("Duplicate Class and Roll No!");
    return; // stop data push 
  }else {

      // push data to array
  students.push({
    name: name,
    classNo: classNo,
    roll: roll,
    phone: phone,
    gmail: gmail
  });

  // for display data
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  students.forEach(student => {
    let tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-300", "hover:bg-[#fff7]","transition-all","duration-700");

    tr.innerHTML = `
      <td class="py-3 px-2 text-center">${student.name}</td>
      <td class="py-3 px-2 text-center">${student.classNo}</td>
      <td class="py-3 px-2 text-center">${student.roll}</td>
      <td class="py-3 px-2 text-center">${student.phone}</td>
      <td class="py-3 px-2 text-center">${student.gmail}</td>
      <td class="py-3 px-2 text-center">
        <input type="checkbox" class="w-5 h-5">
      </td>
    `;
    tbody.appendChild(tr);
  });

  }
  // Reset + Close modal
  e.target.reset();
  closeModal();
});

// sarch by name
document.getElementById("sarch").addEventListener("keyup", (e)=> {
  const keyword = e.target.value.toLowerCase();
  const filtered = students.filter(item => item.name.toLowerCase().includes(keyword));

  // Table clear
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  filtered.forEach(student => {
    let tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-300", "hover:bg-[#fff7]","transition-all","duration-700");
    tr.innerHTML = `
      <td class="py-3 px-2 text-center">${student.name}</td>
      <td class="py-3 px-2 text-center">${student.classNo}</td>
      <td class="py-3 px-2 text-center">${student.roll}</td>
      <td class="py-3 px-2 text-center">${student.phone}</td>
      <td class="py-3 px-2 text-center">${student.gmail}</td>
      <td class="py-3 px-2 text-center">
        <input type="checkbox" class="w-5 h-5">
      </td>
    `;
    tbody.appendChild(tr);
  });
});

// sarch by class
document.getElementById("classSarch").addEventListener("keyup", (e)=> {
  const keyword = e.target.value.trim();
  const filtered = students.filter(item => String(item.classNo) === keyword);
  
  // Table clear
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";

  filtered.forEach(student => {
    let tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-300", "hover:bg-[#fff7]","transition-all","duration-700");
    tr.innerHTML = `
      <td class="py-3 px-2 text-center">${student.name}</td>
      <td class="py-3 px-2 text-center">${student.classNo}</td>
      <td class="py-3 px-2 text-center">${student.roll}</td>
      <td class="py-3 px-2 text-center">${student.phone}</td>
      <td class="py-3 px-2 text-center">${student.gmail}</td>
      <td class="py-3 px-2 text-center">
        <input type="checkbox" class="w-5 h-5">
      </td>
    `;
    tbody.appendChild(tr);
  });
});

// sarch by roll
document.getElementById("rollsarch").addEventListener("keyup", (e)=> {
  const keyword = e.target.value.trim();
  const filtered = students.filter(item => String(item.roll) === keyword);
  
  // Table clear
  const tbody = document.getElementById("tbody");
  tbody.innerHTML = "";
  
  filtered.forEach(student => {
    let tr = document.createElement("tr");
    tr.classList.add("border-b", "border-gray-300", "hover:bg-[#fff7]","transition-all","duration-700");
    tr.innerHTML = `
      <td class="py-3 px-2 text-center">${student.name}</td>
      <td class="py-3 px-2 text-center">${student.classNo}</td>
      <td class="py-3 px-2 text-center">${student.roll}</td>
      <td class="py-3 px-2 text-center">${student.phone}</td>
      <td class="py-3 px-2 text-center">${student.gmail}</td>
      <td class="py-3 px-2 text-center">
        <input type="checkbox" class="w-5 h-5">
      </td>
    `;
    tbody.appendChild(tr);
  });
});