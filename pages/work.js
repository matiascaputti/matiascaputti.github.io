import anime from "animejs";
import React from "react";

class WorkPage extends React.Component {
  componentDidMount() {
    this.timeout = setTimeout(this.animateText, 800);
  }

  componentWillUnmount() {
    anime.remove([this.title, this.firstName, this.lastName, this.description]);

    clearTimeout(this.timeout);
  }

  animateText = () => {
    this.title &&
    anime({
      targets: this.title,
      translateX: ["70%", 0],
      opacity: 1,
      duration: 800,
      easing: "easeOutCirc"
    });
  };

  render() {
    return (
      <div id="projects">
        <div className="text-container" ref={el => this.title = el}>
          <h1>
            Work
          </h1>

          <small>
            coming soon
          </small>
        </div>
        
        <style jsx>{`
          #projects {
            width: 100%;
            align-self: center;
            display: flex;
            align-items: stretch;
            margin: 30px 0;
          }

          .text-container {
            opacity: 0;
          }

          h1 {
            margin: 0;
            font-size: 8rem;
            font-family: Raleway, sans-serif;
            text-transform: capitalize;
            line-height: 1;
          }

          @media (max-width: 1400px) {
            .clip {
              width: 75%;
            }
          }

          @media (max-width: 1400px) and (orientation: landscape) {
            h1 {
              font-size: 5vw;
            }
          }

          @media (max-width: 1400px) and (orientation: portrait) {
            #projects {
              margin: 30px 0;
            }
            h1 {
              font-size: 5rem;
            }
          }

          @media (max-width: 1024px) {
            .clip {
              width: 100%;
            }
          }

          @media (max-width: 1024px) and (orientation: landscape) {
            .clip {
              width: 100%;
            }
          }

          @media (max-width: 1024px) and (orientation: portrait) {
            section {
              flex-direction: column;
              align-items: center;
            }
            .text {
              width: 100%;
              margin: 30px 0 0 0;
              order: 2;
            }
            .wrap {
              align-items: center;
              text-align: center;
              margin-bottom: 30px;
            }
            .links,
            .tags {
              justify-content: center;
            }
            .links a {
              margin-left: 10px;
              margin-right: 10px;
            }
            .tags span {
              margin-left: 5px;
              margin-right: 5px;
            }
            .thumbnail {
              width: 100%;
              justify-content: center;
              order: 1;
            }
            .arrows {
              position: static;
              order: 3;
            }
          }

          @media (max-width: 767px) {
            section {
              flex-direction: column;
              align-items: center;
            }
            .text {
              width: 100%;
              margin: 30px 0 0 0;
              order: 2;
            }
            .wrap {
              align-items: center;
              text-align: center;
              margin-bottom: 30px;
            }
            h1 {
              font-size: 4rem;
            }
            .thumbnail {
              width: 100%;
              justify-content: center;
              order: 1;
            }
            .arrows {
              position: static;
              order: 3;
            }
          }

          @media (max-width: 767px) and (orientation: portrait) {
            .clip {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }
}

export default WorkPage;