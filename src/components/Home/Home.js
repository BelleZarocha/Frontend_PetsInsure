import { Container } from "../StylesPages/PageLayout";
import './Home.css'
import Typed from "typed.js";
import { useEffect, useRef } from "react";

function Home() {  
    const text = useRef(null);

    useEffect(() => {
        const typed = new Typed(text.current, {
        strings: ["Love deserves great care. You can afford it with Smile:) Pets Insurance"], 
        startDelay: 1200,
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 100,
        });

    return () => {
      typed.destroy();
    };
  }, []);
    
    return (
        <Container>
            <div style={{height: "60vh"}} >
                <div style={{display: "grid", gridTemplateColumns:"60% 40%"}} >
                    <div style={{height: "250px"}}>
                        <div className="typeText">
                            <span ref={text}></span>
                        </div>
                    </div>
                    
                    <div>
                        <img className="photo1" src="https://drive.google.com/uc?id=16L46TNYnYu00LM2BNNYUcHMVlKIeofNC&authuser=0" />
                    </div>
                </div>
            </div>
            <div className="pkBtnArea">
                <a className="packageBtn" href="/packages">Packages</a>
            </div>
            

            <div id="slider-wrapper">
                <div class="inner-wrapper">
                    <input checked type="radio" name="slide" class="control" id="Slide1" />
                    <label for="Slide1" id="s1"></label>
                    <input type="radio" name="slide" class="control" id="Slide2" />
                    <label for="Slide2" id="s2"></label>
                    <input type="radio" name="slide" class="control" id="Slide3" />
                    <label for="Slide3" id="s3"></label>
                    <input type="radio" name="slide" class="control" id="Slide4" />
                    <label for="Slide4" id="s4"></label>
                    <div class="overflow-wrapper">
                    <a class="slide" href=""><img src="https://drive.google.com/uc?id=133titZc3fpj11m-Wju5QQgLAjaQ-Z-pI&authuser=0" /></a>
                    <a class="slide" href=""><img src="https://drive.google.com/uc?id=1Z_NJgTDIeioMmdhm6oWjEKPIS-Wswcr8&authuser=0" /></a>
                    <a class="slide" href=""><img src="https://drive.google.com/uc?id=18wzz3rBMaYFqAW0oRMOE3vI4-k1Igh40&authuser=0" /></a>
                    <a class="slide" href=""><img src="https://drive.google.com/uc?id=12XXwgukQFbiciEEx-xklx48VsVWD0NET&authuser=0" /></a>
                    </div>
                </div>
            </div>    
            
            <h2 style={{margin: "30px", color: "#2a9d8f"}}>Recommend Hospitals</h2>
            <div style={{display: "flex", flexDirection: "row", flexWrap: "wrap", margin: "30px", justifyContent:"center", alignItems: "center"}}>
                <a href="https://goo.gl/maps/DDUBZyJDUmbpopw7A"><img className="anmHos" src="https://drive.google.com/uc?id=1r6Wt40yOCr9oAL_emZGfMT_Aqro_Tc25&authuser=0" /></a>
                <a href="https://goo.gl/maps/EM5kbCVpnMjG5yn1A"><img className="anmHos" src="https://drive.google.com/uc?id=1-vGufd5CpGi_YW_i3QJpqWWREZ39Yc1I&authuser=0" /></a>
                <a href="https://goo.gl/maps/bevG3ymT7QkJJMt8A"><img className="anmHos" src="https://drive.google.com/uc?id=1zI-pV7jU6iKkzza6D3AuM7lCpyudWS6C&authuser=0" /></a>
                <a href="https://goo.gl/maps/7tibb8Nw1MqhCcQ16"><img className="anmHos" src="https://drive.google.com/uc?id=1oHXBEjvhuXMVYluD--4mh4PtqIg-VFBt&authuser=0" /></a>
                <a href="https://goo.gl/maps/HbStQSAYhn3Q851k6"><img className="anmHos" src="https://drive.google.com/uc?id=1O1_oJiZ1USjqF2pJEyydNNPLHZD6ApQ6&authuser=0" /></a>
                <a href="https://www.google.com/maps/search/%E0%B9%82%E0%B8%A3%E0%B8%87%E0%B8%9E%E0%B8%A2%E0%B8%B2%E0%B8%9A%E0%B8%B2%E0%B8%A5%E0%B8%AA%E0%B8%B1%E0%B8%95%E0%B8%A7%E0%B9%8C%E0%B8%97%E0%B8%AD%E0%B8%87%E0%B8%AB%E0%B8%A5%E0%B9%88%E0%B8%AD/@13.8270824,100.4059241,11z/data=!3m1!4b1"><img className="anmHos" src="https://drive.google.com/uc?id=1h2bc6_3-koRN1fAuu2lMBr3p2GTaHK4_&authuser=0" /></a>
            </div>

        </Container>
    )      
}

export default Home;