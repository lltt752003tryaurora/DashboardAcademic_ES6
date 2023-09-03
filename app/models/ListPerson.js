import Person from "./Person.js";

class ListPerson {
  arrListPerson = [];
  themMangNguoi = (person) => {
    this.arrListPerson.push(person);
  };
  renderTableList = (idHienThi = "tbodyPerson", arr = this.arrListPerson) => {
    // cho 2 giá trị mặc định là idHienThi và arr phòng trường user ko truyền gì vào thì ta lấy giá trị được gán luôn
    let content = "";
    let personNew = new Person();
    for (let val_person of arr) {
      // lưu trữ qua đối tượng mới để thêm phương thức
      Object.assign(personNew, val_person);
      const { ID, hoTen, diaChi, email, congViec, tinhLuong, tinhDiemTB } =
        personNew;
      console.log(congViec);
      content += `
      <tr>
        <td>${ID}</td>
        <td>${hoTen}</td>
        <td>${email}</td>
        <td>${diaChi}</td>
        <td>${congViec}</td>
        <td>
          <button class="btn btn-danger" onclick="xoaMonAn('${ID}')">Delete</button>
          <button class="btn btn-warning" onclick="layThongTinMon('${ID}')">Edit</button>
          <button class="btn btn-success">Detail</button>
        </td>
      </tr>
      `;
      document.getElementById(idHienThi).innerHTML = content;
    }
  };

  luuLocalPerson = () => {
    // khi lưu mảng vào object nhớ dùng JSON.stringtify để chuyển đổi các object và array thành dạng chuổi JSON mới lưu được xuống local
    let stringArr = JSON.stringify(this.arrListPerson);
    localStorage.setItem("arrPerson", stringArr);
  };

  layLocalPerson = () => {
    // khi lấy lên thì các dữ liệu đang ở định dạng chuỗi json nên chúng ta cần gọi phương thức JSON.parse để có thể chuyển về định dạng object hoặc array
    // khi một object được lưu xuống local thì phương thức bên trong sẽ mất đi nên NHỚ khi chạy render phải tạo ra một đối tượng đang có phương thức
    let arrLocal = localStorage.getItem("arrPerson");
    // Nhớ cần phải check NULL của mảng
    if (arrLocal != null) {
      // có thể clone mảng ra thành mảng mới rồi gán vào arrMenu
      // this.arrMenu = [...JSON.parse(arrLocal)];
      this.arrListPerson = JSON.parse(arrLocal);
      this.renderTableList();
    }
  };

  xoaNguoi = (id) => {
    //findIndex kiểm tra có hay ko
    let index = this.arrListPerson.findIndex((item) => {
      return item.ID == id;
    });
    //findIndex có 2 TH là index hoặc -1
    if (index != -1) {
      // tìm được
      this.arrListPerson.splice(index, 1); // xóa ở mảng
      this.renderTableList(); // chạy lại render khi mảng thay đổi
      this.luuLocalPerson(); // lưu xuống local luôn ngay khi mảng thay đổi
    }
  };

  
}

export default ListPerson;
