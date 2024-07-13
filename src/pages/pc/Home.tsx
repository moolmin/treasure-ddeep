import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import Layout from '../../components/layout/Layout';
import Logo from '../../assets/images/logo.png';
import Pointer1 from '../../assets/images/pointer_1.png';
import Pointer2 from '../../assets/images/pointer_2.png';
import Pointer3 from '../../assets/images/pointer_3.png';
import Pointer4 from '../../assets/images/pointer_4.png';
import Cloud from '../../assets/images/cloud.png';

const HomePC: React.FC = () => {
  const navigate = useNavigate();
  // const [isVideoVisible, setVideoVisible] = useState(false);
  const [location, setLocation] = useState('');

  const handleButtonClick = (newLocation: string) => {
    setLocation(newLocation);
    handleVideoPlay(newLocation);
  };

  const handleVideoPlay = (newLocation: string) => {
    navigate(`/album?location=${encodeURIComponent(newLocation)}`);
  };

  return (
    <Layout>
      <div className={styles.container}>
        <img src={Logo} alt="Logo" className={styles.logo} />
        <div className={styles.pointerContainer}>
          <div className={styles.pointerGroup1}>
            <span className={styles.pointerText}>제주북동쪽</span>
            <button
              className={styles.pointerButton}
              onClick={() => handleButtonClick('제주북동쪽')}
            >
              <img src={Pointer1} alt="Pointer" className={styles.pointer1} />
            </button>
          </div>

          <div className={styles.pointerGroup2}>
            <span className={styles.pointerText}>서귀포남동쪽</span>
            <button
              className={styles.pointerButton}
              onClick={() => handleButtonClick('서귀포남동쪽')}
            >
              <img src={Pointer2} alt="Pointer" className={styles.pointer2} />
            </button>
          </div>

          <div className={styles.pointerGroup3}>
            <span className={styles.pointerText}>제주북서쪽</span>
            <button
              className={styles.pointerButton}
              onClick={() => handleButtonClick('제주북서쪽')}
            >
              <img src={Pointer3} alt="Pointer" className={styles.pointer3} />
            </button>
          </div>

          <div className={styles.pointerGroup4}>
            <span className={styles.pointerText}>서귀포남서쪽</span>
            <button
              className={styles.pointerButton}
              onClick={() => handleButtonClick('서귀포남서쪽')}
            >
              <img src={Pointer4} alt="Pointer" className={styles.pointer4} />
            </button>
          </div>

          <div className={styles.pointerCloud}>
            <span className={styles.pointerTextCloud}>구름스퀘어</span>
            <button
              className={styles.pointerButton}
              onClick={() => handleButtonClick('구름스퀘어')}
            >
              <img src={Cloud} alt="Pointer" className={styles.pointerCloud} />
            </button>
          </div>
          <button
            className={styles.button}
            onClick={() => navigate('/create-album')}
          ></button>
        </div>
      </div>
    </Layout>
  );
};

export default HomePC;
