import * as React from 'react'
import Layout from '../components/Layout'
import { Link } from 'gatsby';
import { RoughNotation } from 'react-rough-notation';

function NotFound() {
  const [hover, setHover] = React.useState(false)
    return (
        <Layout>
        <div className='flex h-screen wotfard'>
        <div className="content-center flex-grow place-self-center" >
          <p className='text-8xl text-mint'>404
          </p>
          <p className='text-2xl text-mint pl-2'>are you lost?</p>
          <div className="pl-2 text-mint">
            <Link to="/" onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
              <RoughNotation type="underline" strokeWidth="5" color="purple" show={hover}>
                go back home.
              </RoughNotation>
            </Link>
          </div>
          
        </div>
        </div>
        </Layout>
    );
}

export default NotFound