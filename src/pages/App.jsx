import React from 'react';
import Layout from '../components/Layout';
import { FaGithub } from 'react-icons/fa'; 

function App() {
  return (
    <div className="flex">
      <Layout>
        <div className='flex w-screen h-screen wotfard'>
          <div className="  content-center flex-grow place-self-center" >
            {/*<img src={io} className="rounded-xl h-48 w-48" />*/}
            <p className='text-5xl dark:text-white'>franz!!</p>
            <p className='text-2xl dark:text-white'>blablabla</p>
            <div className="mt-1">
              <a href="https://github.com/gattaa" target={"_blank"}>
                <FaGithub size="25" className='me-link'/>
              </a>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default App;