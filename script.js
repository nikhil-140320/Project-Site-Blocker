const animation = () => {
  return `<style>
  h1 {
    font-size: 9rem;
    color: rgb(8, 9, 13);
  }
  
  .hero{
    // background-image: radial-gradient(50% 176%, #253854 80%, #061922 100%);
    background: radial-gradient(ellipse at top, #05eff7, transparent),radial-gradient(ellipse at bottom, #2fdebe, transparent); 
    background-size: cover;
    min-height: 97vh; 
    position: relative;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-content: center;

  	&__content {
      position: relative;
      align-self: center;
      padding: 3rem 0;
    }
  }
  
  .snow {
    position: absolute;
    min-width: 100vw;
    min-height: 100vh;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  
  .snow .svg {
    position: absolute;
    width: 100%;
    height: 100%;
  }
  
  #snow-layer {
    will-change: transform;
    transform: translateY(-768px);
    animation: fall 25s infinite linear;
  }
  @keyframes fall {
    
    100% {
      transform: translateY(0);
    }
    
  }
     </style>`;
};

const text = (pageName) => {
  return `
  <div class="hero">

  <div class="snow">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1600" >
      
      <g fill="white" fill-opacity="1" transform="translate(65 63)">
         <g id="snow-layer">
          <circle cx="10" cy="800" r="5"/>
          <circle cx="200" cy="1000" r="5"/>
          <circle cx="600" cy="850" r="5"/>
          <circle cx="700" cy="1150" r="5"/>
          <circle cx="900" cy="900" r="5"/>
          <circle cx="650" cy="1250" r="5" />
          <circle cx="450" cy="1350" r="5" />
          <circle cx="350" cy="1100" r="5" />
          <circle cx="50" cy="1300" r="5" />
          <circle cx="10" cy="10" r="5"/>
          <circle cx="200" cy="150" r="5"/>
          <circle cx="600" cy="100" r="5"/>
          <circle cx="700" cy="350" r="5"/>
          <circle cx="900" cy="150" r="5"/>
          <circle cx="650" cy="500" r="5" />
          <circle cx="450" cy="600" r="5" />
          <circle cx="350" cy="350" r="5"/>
          <circle cx="50" cy="550" r="5"/>
         </g>
      </g>
    </svg>
  </div>
  
  <div class="hero__content">
      <h1>${pageName} BLOCKED</h1>
  </div>

</div>
     `;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = animation();
    document.body.innerHTML = text("YOUTUBE");
    break;
  case "www.facebook.com":
    document.head.innerHTML = animation();
    document.body.innerHTML = text("FACEBOOK");
    break;
  case "www.netflix.com":
    document.head.innerHTML = animation();
    document.body.innerHTML = text("NETFLIX");
    break;
  case "www.instagram.com":
    document.head.innerHTML = animation();
    document.body.innerHTML = text("INSTAGRAM");
    break;
  case "twitter.com":
    document.head.innerHTML = animation();
    document.body.innerHTML = text("TWITTER");
    break;
}
