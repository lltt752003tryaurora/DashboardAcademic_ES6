import ListPerson from "../models/ListPerson.js";
import removeVietnameseTones from "../util/util.js";
import Student from "../models/Student.js";
import Employee from "../models/Employee.js";
import Customer from "../models/Customer.js";

let listPerson = new ListPerson();
// lấy data từ local
listPerson.layLocalPerson();
console.log(listPerson);

document.getElementById("btnThem").onclick = () => {
  document.getElementById("in4-employee").style.display = "none";
  document.getElementById("in4-customer").style.display = "none";
  document.getElementById("in4-student").style.display = "none";
};

// sử dụng onchange để biết check loại công việc nào
let loaiCV;
document.getElementById("congViec").onchange = (event) => {
  console.log(event.target);
  const { value } = event.target;
  console.log(value);
  loaiCV = value;
  if (value == "cv") {
    document.getElementById("in4-employee").style.display = "none";
    document.getElementById("in4-customer").style.display = "none";
    document.getElementById("in4-student").style.display = "none";
  } else {
    if (value == "cv1") {
      document.getElementById("in4-student").style.display = "flex";
      document.getElementById("in4-customer").style.display = "none";
      document.getElementById("in4-employee").style.display = "none";
    }
    if (value == "cv2") {
      document.getElementById("in4-employee").style.display = "flex";
      document.getElementById("in4-customer").style.display = "none";
      document.getElementById("in4-student").style.display = "none";
    }
    if (value == "cv3") {
      document.getElementById("in4-customer").style.display = "flex";
      document.getElementById("in4-employee").style.display = "none";
      document.getElementById("in4-student").style.display = "none";
    }
  }
};

const themNguoi = (event) => {
  event.preventDefault();
  // lấy dữ liệu từ form
  const arrField = document.querySelectorAll(
    "#personForm input, #personForm select"
  );
  console.log(arrField);

  let student = new Student();
  let employee = new Employee();
  let customer = new Customer();
  for (let item of arrField) {
    // item là giá trị trong arrField
    const { id, value } = item;
    // console.log(id);
    // console.log(value);
    if (loaiCV == "cv1") {
      student[id] = value;
    } else if (loaiCV == "cv2") {
      employee[id] == value;
    } else if (loaiCV == "cv3") {
      customer[id] = value;
    }
  }
  if (loaiCV == "cv1") {
    listPerson.themMangNguoi(student);
  } else if (loaiCV == "cv2") {
    listPerson.themMangNguoi(employee);
  } else if (loaiCV == "cv3") {
    listPerson.themMangNguoi(customer);
  }
  console.log(listPerson.arrListPerson);
  // tắt modal nhập 
  document.querySelector(".modal-footer .btn-secondary").click();
  document.getElementById("personForm").reset();
  listPerson.renderTableList();
  listPerson.luuLocalPerson();
};

//gọi tới window và tạo ra phương thức cho window
window.themNguoi = themNguoi;
