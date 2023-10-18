import { FunctionComponent } from 'react';
import styles from './MainSection.module.css';


const MainSection:FunctionComponent = () => {
  	return (
    		<div className={styles.mainSection1}>
      			<div className={styles.small}>
        				<div className={styles.contactUs}>Contact us</div>
      			</div>
      			<b className={styles.heading22}>{`Get In `}</b>
      			<b className={styles.heading23}>Touch</b>
      			<div className={styles.weWillContact1}>We will contact again after receive your request in 24h</div>
      			<div className={styles.divcontent}>
        				<div className={styles.divcommunCard}>
          					<div className={styles.divicon}>
            						<img className={styles.mail3dpngIcon1} alt="" src="mail3d.png.png" />
          					</div>
          					<b className={styles.heading53}>contact@Iteck.com</b>
        				</div>
        				<div className={styles.divcommunCard1}>
          					<div className={styles.divicon1}>
            						<img className={styles.map3dpngIcon1} alt="" src="map3d.png.png" />
          					</div>
          					<b className={styles.heading54}>58 Howard St, Toronto</b>
        				</div>
        				<div className={styles.divcommunCard2}>
          					<div className={styles.divicon2}>
            						<img className={styles.msg3dpngIcon1} alt="" src="msg3d.png.png" />
          					</div>
          					<b className={styles.heading55}>(+23) 5535 68 68</b>
        				</div>
      			</div>
    		</div>);
};

export default MainSection;
