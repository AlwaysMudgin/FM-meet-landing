import mainImage1 from '../../assets/desktop/image-woman-in-videocall.jpg';
import mainImage2 from '../../assets/desktop/image-women-videochatting.jpg';
import mainImage3 from '../../assets/desktop/image-men-in-meeting.jpg';
import mainImage4 from '../../assets/desktop/image-man-texting.jpg';

function Main() {
  return (
    <main>
      <div className="decoration">
        <div className="line"></div>
        <div className="circle">01</div>
      </div>
      <div className="main-images">
        <img src={mainImage1} alt="woman in videocall" />
        <img src={mainImage2} alt="women videochatting" />
        <img src={mainImage3} alt="men in meeting" />
        <img src={mainImage4} alt="man texting" />
      </div>
      <div className="main-text">
        <p className="overline">BUILT FOR MODERN USE</p>
        <h2>Smarter meetings, all in one place</h2>
        <p className="main-body">
          Send messages, share files, show your screen, and record your meetings
          — all in one workspace. Control who can join with invite-only team
          access, data encryption, and data export.
        </p>
      </div>
    </main>
  );
}

export default Main;
