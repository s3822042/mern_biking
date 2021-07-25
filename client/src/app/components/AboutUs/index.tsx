import "./AboutUs.css";
import luan from "../../assets/images/user-avatar/anime.jpg";


function AboutUs() {
    return (
        <div className="aboutUs">
            <div className="container">
                <div className="header">
                    <p>About Biking</p>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam pellentesque lacus risus, at
                        laoreet lacus euismod non. Nam dignissim non turpis vel efficitur. Nullam laoreet nibh eu
                        aliquam maximus.
                    </p>
                </div>
                <div className="body">
                    <p className="header">The Team</p>
                    <div className="theTeam">
                        <div className="luan">
                            <img src={luan} alt="img"/>
                            <p>Vo Thanh Luan</p>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className="luan">
                            <img src={luan} alt="img"/>
                            <p>Vo Thanh Luan</p>
                            <p>Fullstack Developer</p>
                        </div>
                        <div className="luan">
                            <img src={luan} alt="img"/>
                            <p>Vo Thanh Luan</p>
                            <p>Fullstack Developer</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs;
