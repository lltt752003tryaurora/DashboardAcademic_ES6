import Person from "./Person.js";

class Employee extends Person {
  soNgayLamViec = 0;
  luongTheoNgay = 1000;
  tinhLuong = () => {
    return this.soNgayLamViec * this.luongTheoNgay;
  };
}

export default Employee;
