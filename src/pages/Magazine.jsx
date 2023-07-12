import React from 'react';
import '../assets/scss/Magazine.scss';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Opacity } from '@mui/icons-material';

const Magazine = () => {
  return (
    <div className="container">
      <div className="title">
        <h1>Tin công nghệ</h1>
      </div>
      <div className="content">
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/05/iOS-16.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Apple phát hành phiên bản iOS 16.6 Public Beta</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/07/Galaxy-Tab-S9-series.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Galaxy Tab S9 series lộ thông số trước ngày ra mắt: Có cả IP68!</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/07/iPhone-Battery.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Vì sao điện thoại nhanh hết pin đến vậy?</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2022/01/Samsung-Galaxy-Tab-S7-FE.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Danh sách thiết bị Samsung bị giảm tần suất cập phần mềm</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/07/Quick-Share-Windows.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Người dùng Samsung đã có thể truyền file bằng Quick Share</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/07/Coin98-ra-mat-quy-Vietnam-Future-Fund-de-ho-tro-start-up-Viet-2.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Coin98 ra mắt quỹ Vietnam Future Fund để hỗ trợ start-up Việt</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="content">
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/03/Tai-sao-Macbook-Air-voi-man-hinh-15-inch-se-la-san-pham-vo-cung-can-thiet-1.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Macbook Air dù rẻ nhưng người dùng vẫn chọn Macbook Pro</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2022/06/TSMC-se-san-xuat-chip-tien-trinh-2nm-vao-nam-2025-thumb.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Samsung sẽ sản xuất chip 2nm vào năm 2025</h4>
              </a>
            </div>
          </div>
        </div>
        <div className="item">
          <div className="card">
            <img src="https://vatvostudio.vn/wp-content/uploads/2023/06/ung-dung-app-macos-sonoma-1.jpg"></img>
            <div className="card-title">
              <a href="#placeholder">
                <h4>Cách biến trang website thành ứng dụng trên Safari</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Magazine;
