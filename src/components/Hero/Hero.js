import React, { useState } from 'react';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { Link } from 'react-scroll';

// Components
import { Display, Headline } from '../Type';

// Images
import imgMe from '../../images/me.png';
import arrow from '../../images/arrow.svg';

// Styles
import { StyledHero } from './styles';

const confettiColors = [
  '#EE12EE',
  '#A1E0F2',
  '#aeb8fe',
  '#537752',
  '#ff8600',
  '#F42342',
  '#8AD7EE',
  '#EFE037',
  '#826C55',
  '#496043',
];

export const Hero = ({ ...props }) => {
  const { width, height } = useWindowSize();
  const [count, setCount] = useState(0);
  return (
    <>
      <StyledHero id="homeless" {...props}>
        <div>
          <img className="profile" src={imgMe} alt="Me" />
        </div>
        <div>
          <Display as="h1">
            <span>
              George
              <br />
              Marshall
            </span>
            <span>
              I don’t
              <br />
              give a <button onClick={() => setCount(count + 200)}>fuck</button>
            </span>
          </Display>
          <Headline as="p">
            <span>You can tell by the smug, shit eating grin on my face</span>
          </Headline>
        </div>
        <Link
          to="shitIveDone"
          smooth={true}
          hashSpy={true}
          offset={-2}
          duration={500}
        >
          <span>
            Scroll down <br />
            to see my penis
          </span>
          <img src={arrow} alt="scroll down" />
        </Link>
        <Confetti
          width={width}
          height={height}
          colors={confettiColors}
          numberOfPieces={count}
        />
      </StyledHero>
    </>
  );
};
