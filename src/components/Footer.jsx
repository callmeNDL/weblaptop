import '../assets/scss/Footer.scss';
const Footer = () => {
  return (
    <div class="footer">
      <div>
        <link
          href="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          rel="stylesheet"
          id="bootstrap-css"
        />
        {/*---- Include the above in your HEAD tag --------*/}
        {/* Footer */}
        <div className="line-footer"></div>
        <section id="footer">
          <div className="container">
            <div className="row text-center text-xs-center text-sm-left text-md-left">
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>HỔ TRỢ KHÁCH HÀNG</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      Chính sách trả góp
                    </a>
                  </li>
                  <li>
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      Hướng dẫn mua hàng
                    </a>
                  </li>
                  <li>
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      Chính sách bảo hành
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>THÔNG TIN CỬA HÀNG</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      Hệ thống cửa hàng
                    </a>
                  </li>
                  <li>
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      Giới thiệu cửa hàng
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-xs-12 col-sm-4 col-md-4">
                <h5>LIÊN HỆ</h5>
                <ul className="list-unstyled quick-links">
                  <li>
                    Email:{' '}
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      huynhan18072000@gmail.com
                    </a>
                  </li>
                  <li>
                    Phone:{' '}
                    <a href="#placeholder">
                      <i className="fa fa-angle-double-right" />
                      0383209724
                    </a>
                  </li>
                  <li>
                    Social:{' '}
                    <a href="https://www.facebook.com/groups/STU.sinhvien">
                      <i className="fa fa-angle-double-right" />
                      FaceBook
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-5">
                <ul className="list-unstyled list-inline social text-center">
                  <li className="list-inline-item">
                    <a href="#placeholder">
                      <i className="fa fa-facebook" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#placeholder">
                      <i className="fa fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#placeholder">
                      <i className="fa fa-instagram" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#placeholder">
                      <i className="fa fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#placeholder" target="_blank">
                      <i className="fa fa-envelope" />
                    </a>
                  </li>
                </ul>
              </div>
              <hr />
            </div>
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
                <p>
                  <u>
                    <a href="#placeholder">Công Ty Cổ Phần Thương Mại - Dịch Vụ An Huy</a>
                  </u>{' '}
                  <u>
                    Giấy chứng nhận đăng ký doanh nghiệp: 0304998358 do Sở KH-ĐT TP.HCM cấp lần đầu ngày 30 tháng 05 năm
                    2007
                  </u>
                </p>
                <p>Trụ sở chính: 180 Cao Lỗ, phường 4, quận 8, TP HCM.</p>
              </div>
              <hr />
            </div>
          </div>
        </section>
        {/* ./Footer */}
      </div>
    </div>
  );
};

export default Footer;
