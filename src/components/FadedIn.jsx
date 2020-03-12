import React, {Fragment} from "react";
import {Controller, Scene} from "react-scrollmagic";
import {Tween} from "react-gsap";


const FadedIn = props => {
  // Required props
  const {
    triggerID,
    children,
  } = props;

  // Optional props
  const translate = props.translate || defaults.translate;
  const duration = props.duration || defaults.duration;
  const offset = props.offset || defaults.offset;

  return (
    <Fragment>
      <div id={triggerID}/>
      <Controller>
        <Scene
          triggerElement={`#${triggerID}`}
          duration={duration}
          offset={offset}>
          {progress => (
            <Tween
              to={{opacity: 1, filter: 'brightness(100%)', transform: "translate(0, 0)"}}
              ease="Strong.easeOut"
              totalProgress={progress}
              paused>
              <div style={{opacity: 0, filter: 'brightness(10%)', transform: `translate(-${translate}, ${translate})`}}>
                {children}
              </div>
            </Tween>
          )}
        </Scene>
      </Controller>
    </Fragment>
  );
};

const defaults = {
  translate: "30px",
  duration: 200,
  offset: -280,
};

export default FadedIn;