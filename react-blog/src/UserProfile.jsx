import style from './css/UserProfile.module.css';

const UserProfile = () => {
  return (
    <div>
      <h1 className={style.heading}>User Profile</h1>
      <div className={style.card}>
        <img
          className={style.img}
          src='https://www.w3schools.com/howto/img_avatar.png'
          alt=''
        />
      </div>
      <div className={style.textWrap}>
        <h4>Anil Sidhu</h4>
        <p>Software Developer</p>
      </div>
    </div>
  );
};

export default UserProfile;
