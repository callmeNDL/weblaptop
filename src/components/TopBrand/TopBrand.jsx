import Slider from 'react-slick';
import './topBrand.scss';

const TopBrand = () => {
  var settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  const listTopBrand = [
    {
      img: 'https://lh3.googleusercontent.com/wBDb7TUmtA_tvke9aGKD2YvEkwRLEZ9T3TSgCE5EhKFjCHAzACc9_lTiZN6umIdHQMVlrbiRwuhSMGMugTPNbCeLmmu0Tdg=w308-rw',
      name: 'HP',
    },
    {
      img: 'https://lh3.googleusercontent.com/c_UeM_4qDP_p3Od4GXIIrkoYiBwMpVS6FcoFiD27s0cjg2SP8O-K3xuyySpHyJfkTP0ToPrffm7ytHwtsea4CyPElVPai5Iu=w308-rw',
      name: 'ASUS',
    },
    {
      img: 'https://lh3.googleusercontent.com/AWgp09Eb2QBeD0CTKe6IJ6EdWpMqaKdSR6DXOW4ykNooi7srFoYXF7Eb0I3Gb5q-MPGLgr858toVzQrPX8JOybtWlo378-QeFQ=w308-rw',
      name: 'SAMSUNG',
    },
    {
      img: 'https://lh3.googleusercontent.com/6x9u-FoBBtL1caB-Rw7-j77BrpLedoEsx7_8OVJ-um53lznZ-i9n67LwzUfmgUqwYLdZFZ70fmEYY3Tj5iMV494V8QrGWldxkg=w308-rw',
      name: 'ACER',
    },
    {
      img: 'https://lh3.googleusercontent.com/9EJFCRdfGEEpXlDvFWibcdnyaMK9SCGxa7qPf24KXGssrSmvPKYNJxgo5FJxA4UEZn0ffFkPY0nGuYVNNyp2Ep8R-0NgPhVc=w308-rw',
      name: 'MSI',
    },
    {
      img: 'https://lh3.googleusercontent.com/GzHmZ6GnBi1-164ylGJv2LICBZK6Tvmyyj5lNZANYg3Om9-uXqCUVw9hbTvKsMuk-Ls8WqCPkegqFI3uzgqhk3GnJv1Elaba=w308-rw',
      name: 'INTEL',
    },
    {
      img: 'https://lh3.googleusercontent.com/kQm3q7CgT3NoKt6qO66ZQVc_WSt1XmwO0yZmAkIpSieh-KlxU-kslqhEPaQxR2LUeZCYh2fc5o-LYJ_LECN8LwiUzlrV3G7reQ=w308-rw',
      name: 'LENOVO',
    },
    // {
    //   img: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=w400-rw',
    //   name: 'ASUS',
    // },
    // {
    //   img: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=w400-rw',
    //   name: 'ASUS',
    // },
    // {
    //   img: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=w400-rw',
    //   name: 'ASUS',
    // },
    // {
    //   img: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=w400-rw',
    //   name: 'ASUS',
    // },
    // {
    //   img: 'https://lh3.googleusercontent.com/IqFtu_Hq7dQkOuTjKwVTjKV5Z1qK3FsuX3yX6Ab30i_yXZ2B1dFs8uQwQ9zgTt3UZts3RnuYx-ujvQW0i5Ox2UDhrqxeehI=w400-rw',
    //   name: 'ASUS',
    // },
  ];

  return (
    <div className="topBrand-container">
      <div className="topBrand-title">Thương hiệu nổi bật</div>
      <Slider {...settings}>
        {listTopBrand.map((item) => (
          <div className="topBrand-box" key={item.id}>
            <div className="img-box">
              <img src={item.img} alt={`img- ${item.name}`} />
            </div>
            <h3 className="brand-name">{item.name}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TopBrand;
