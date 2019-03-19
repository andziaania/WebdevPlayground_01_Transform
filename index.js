// Import stylesheets
import './style.scss';

(function handleFloating() {
  const background = document.querySelector('#background');
  const textWrapper = document.querySelector('main');
  const header = document.querySelector("#header h3");
  const title = document.querySelector("#header h1");
  const description = document.querySelector("#description");
  const authorisation = document.querySelector("#authorisation");
  const contentElements = [
    {
      el: header,  
      translateFactor: 80, // a factor contra proportional to the width
    },
    {
      el: title,  
      translateFactor: 45, // a factor contra proportional to the width
    },
    {
      el: description,
      translateFactor: 40,
    },
    {
      el: authorisation,
      translateFactor: 90,
    },
  ];

  const bgTranslateFactor = 20; 
  const rotationFactor = 80; 
  const centerXY = 0.5



  document.addEventListener("mousemove", float);
  function float(e) {
    
    const width = document.documentElement.clientWidth;
    const height = document.documentElement.clientHeight; //czemu nie height?
    const offsetX = e.pageX / width;
    const offsetY = e.pageY / height;

    contentElements.forEach(elObj => {
      elObj.el.style.transform = "translate("
        + offsetX * elObj.translateFactor + "px, "
        + offsetY * elObj.translateFactor + "px)" ;
    });

    const rotationX = centerXY - offsetY ;
    const rotationY = centerXY - offsetX;
    textWrapper.style.transform = "rotateX(" + rotationX * rotationFactor + "deg) rotateY(" + rotationY * rotationFactor + "deg)";

    const bgTransform = 
      "translate("
        + offsetX * bgTranslateFactor + "px,"
        + offsetY * bgTranslateFactor + "px) " 
      + " scale(2)";
    background.style.transform = bgTransform;
  }
})();


(function handleButtons() {
  const textWrapper = document.querySelector('main');
  const buttons = document.querySelectorAll("a");
  const buttonDefaultColor = window.getComputedStyle(buttons[0]).getPropertyValue("color");
  buttons.forEach(b => 
    b.addEventListener("mouseout", event => event.target.style.color = buttonDefaultColor )
  );

  document.querySelector("a#chlup").addEventListener("click", event => {
    event.target.style.color = "red";
    textWrapper.style.transform = "rotateX(90deg)";
  });
  document.querySelector("a#splash").addEventListener("click", event => {
    event.target.style.color = "blue";
    textWrapper.style.transform ="rotateY(90deg)";
  });
})()
