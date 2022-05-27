//Bài 1: Tính tiền lương nhân viên
var soNgayLam = 26;
var luong1Ngay = 100000;
var luongNhanVien =  soNgayLam * luong1Ngay;
console.log('Bài 1 Lương nhân viên: ' + luongNhanVien + ' đ');

//Bài 2: Tính giá trị trung bình 5 số thực
var soThuc1 = 5;
var soThuc2 = 8;
var soThuc3 = 10;
var soThuc4 = 25;
var soThuc5 = 26;
var trungBinhCong = (soThuc1 + soThuc2 + soThuc3 + soThuc4 + soThuc5) / 5;
console.log('Bài 2 Trung bình cộng 5 số thực: ' + trungBinhCong)

// Bài 3: Quy đổi tiền
var tienUSD = 5;
var giaUSD = 23500;
var tienVND = tienUSD * giaUSD;
console.log('Bài 3 Quy đổi tiền, giá trị tiền VNĐ sau quy đổi: ' + tienVND + ' đ')

//Bài 4: Tính diện tích chu vi hình chữ nhật
var chieuDai = 12;
var chieuRong = 16;
var chuVi = (chieuDai + chieuRong) * 2;
var dienTich = chieuDai * chieuRong;
console.log('Bài 4 ' + 'Chu vi hình chữ nhật: ' + chuVi + ', Diện tích hình chữ nhật: ' + dienTich)

// Bài 5: Tính tổng 2 ký số
var so2ChuSo = 86;
var soHangChuc = Math.floor(so2ChuSo / 10);
var soHangDonVi = so2ChuSo % 10;
var tong2KySo = soHangChuc + soHangDonVi;
console.log('Bài 5 Tổng 2 ký số: ' + tong2KySo)