import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import main from '../assets/images/main.svg';
import Wrapper from '../assets/wrappers/LandingPage';
import { Logo } from '../components/index';
import { useAppContext } from '../context/appContext';

const Landing = () => {
  const { user } = useAppContext();
  return (
    <React.Fragment>
      {user && <Navigate to='/' />}
      <Wrapper>
        <nav>
          <Logo />
        </nav>
        <div className='container page'>
          <div className='info'>
            <h1>
              job <span>tracking</span>app
            </h1>
            <p>
              I'm baby craft beer kinfolk fixie, enamel pin kickstarter lomo
              skateboard. Single-origin coffee adaptogen VHS truffaut. Prism
              PBR&B taiyaki, fanny pack actually pug la croix typewriter
              portland praxis palo santo distillery taxidermy marfa tbh.
            </p>
            <Link to='/register' className='btn btn-hero'>
              Login / Register
            </Link>
          </div>
          <img src={main} alt='job hunt' className='img main-img' />
        </div>
      </Wrapper>
    </React.Fragment>
  );
};

export default Landing;
