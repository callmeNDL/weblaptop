import React from 'react';
import '../assets/scss/Promo.scss';
import { useEffect, useState } from 'react';
import { Container } from '@mui/material';
import { Opacity } from '@mui/icons-material';

const Promo = () => {
  return (
    <div className="bg-container">
      <div className="banner">
        <div className="banner-space">
          <div className="banner-item">
            <img src="https://lh3.googleusercontent.com/d7x2X8Ex5M6A1tf60wjk9XZSl5hD1RuW_QBwmZDNIWA2pBVWbDPrEf60J5-MDZAsZbRbQa1PwPJUb6a4wiHSWfqjJh_4MgxHCw=rw-w0"></img>
          </div>
        </div>
      </div>
      <div className="title-KM">
        <h1>Khuyến mãi HOT</h1>
      </div>
      <Container>
        <div className="container-promo">
          <div className="row-promo">
            <div className="item-promo">
              <div className="item-content">
                <div className="image">
                  <img src="https://lh3.googleusercontent.com/M52C_ipyNQTUV6dbi1EsFt5-RimEngmtMiButpqkhHDPAn1XpP5AvXbB57ixlcNiOMsENDRPiG-hNxnSZfzPXLrsYPkvZZe9=rw-w570"></img>
                </div>
                <div className="title">
                  <p>
                    <span>
                      <strong>Giảm ngay 500.000 khi mua combo</strong>
                    </span>
                  </p>
                </div>
                <div className="date">
                  <p>
                    <span>10/07/2023-30/08/2023</span>
                  </p>
                </div>
                <div className="button">
                  <a href="#placeholder">
                    <button>
                      <span>
                        <span>
                          <p>Xem chi tiết</p>
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="item-promo">
              <div className="item-content">
                <div className="image">
                  <img src="https://lh3.googleusercontent.com/Yam72JdLBh4fP0FTVYN2rBOFxNQN7zfAfePNo2KD-4bnKUmfZhYVvuokMfISofUGJyKG60pkVm3vpCn2GCIDSY-eez8W53Q0=rw-w570"></img>
                </div>
                <div className="title">
                  <p>
                    <span>
                      <strong>Laptop Văn Phòng - Giá Chỉ Từ 8.99 Triệu</strong>
                    </span>
                  </p>
                </div>
                <div className="date">
                  <p>
                    <span>18/07/2023-10/09/2023</span>
                  </p>
                </div>
                <div className="button">
                  <a href="#placeholder">
                    <button>
                      <span>
                        <span>
                          <p>Xem chi tiết</p>
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row-promo">
            <div className="item-promo">
              <div className="item-content">
                <div className="image">
                  <img src="https://lh3.googleusercontent.com/bkmAj0JgxC1HNW89u56zxgYRQ12XoWytFe5vAnQ19M3vopP0XJkpOPhTbwKQ8yaWAVSRWh5NYqQD7D_qry91mIhg322wWedr=rw-w570"></img>
                </div>
                <div className="title">
                  <p>
                    <span>
                      <strong>Giảm ngay 500.000 khi mua combo</strong>
                    </span>
                  </p>
                </div>
                <div className="date">
                  <p>
                    <span>10/07/2023-30/08/2023</span>
                  </p>
                </div>
                <div className="button">
                  <a href="#placeholder">
                    <button>
                      <span>
                        <span>
                          <p>Xem chi tiết</p>
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="item-promo">
              <div className="item-content">
                <div className="image">
                  <img src="https://lh3.googleusercontent.com/QKJwBoMaA7lBis7xaFEQAjb_7d_DpAsFB7FH8b1rfsGnLttMfcTaKVA3y51o1YY67LgjA7WtqCKI0f3lsC57Qw5z7S3oLOw=rw-w524"></img>
                </div>
                <div className="title">
                  <p>
                    <span>
                      <strong>Mua ROG - Nhận balo Laptop 15.6 và RAM KingsTon 8GB</strong>
                    </span>
                  </p>
                </div>
                <div className="date">
                  <p>
                    <span>18/07/2023-10/09/2023</span>
                  </p>
                </div>
                <div className="button">
                  <a href="#placeholder">
                    <button>
                      <span>
                        <span>
                          <p>Xem chi tiết</p>
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="row-promo">
            <div className="item-promo">
              <div className="item-content">
                <div className="image">
                  <img src="https://lh3.googleusercontent.com/bkmAj0JgxC1HNW89u56zxgYRQ12XoWytFe5vAnQ19M3vopP0XJkpOPhTbwKQ8yaWAVSRWh5NYqQD7D_qry91mIhg322wWedr=rw-w570"></img>
                </div>
                <div className="title">
                  <p>
                    <span>
                      <strong>Giảm ngay 500.000 khi mua combo</strong>
                    </span>
                  </p>
                </div>
                <div className="date">
                  <p>
                    <span>10/07/2023-30/08/2023</span>
                  </p>
                </div>
                <div className="button">
                  <a href="#placeholder">
                    <button>
                      <span>
                        <span>
                          <p>Xem chi tiết</p>
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="item-promo">
              <div className="item-content">
                <div className="image">
                  <img src="https://lh3.googleusercontent.com/ieWYjvUp11x1A_XPSBiwqXukRPStNM4PurbHES-RCw0L9d7zCbF6PXbciv3E65-LsrkGRr1rwwrWPZTzsXrH_YU9CiOFiEU=rw-w524"></img>
                </div>
                <div className="title">
                  <p>
                    <span>
                      <strong>Mua ROG - Nhận balo Laptop 15.6 và RAM KingsTon 8GB</strong>
                    </span>
                  </p>
                </div>
                <div className="date">
                  <p>
                    <span>18/07/2023-10/09/2023</span>
                  </p>
                </div>
                <div className="button">
                  <a href="#placeholder">
                    <button>
                      <span>
                        <span>
                          <p>Xem chi tiết</p>
                        </span>
                      </span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Promo;
