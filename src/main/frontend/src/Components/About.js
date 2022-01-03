import RotatingLogo from './RotatingLogo';

function About(){

return (
    <>
    <div>
    <center><h1>Four Score and 7 years ago...</h1></center>
    </div>
    <center><a href={"/"} id="returnHomeLink">Return to Main Menu</a></center>
    <br/>
    <hr/><br/>
    <div id="footerArea">
    <span id="middleWords"> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non sodales neque sodales ut etiam sit amet nisl. Consectetur libero id faucibus nisl tincidunt eget. Amet tellus cras adipiscing enim eu turpis. Placerat duis ultricies lacus sed turpis tincidunt id aliquet risus. laoreet.</span>
    </div>
    <div id="logoArea">
    <RotatingLogo/>
    </div>
   </>
    )
}

export default About;