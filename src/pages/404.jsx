import * as React from 'react'
import Layout from '../components/Layout'

function NotFound() {
    return (
        <Layout>
        <div className='flex h-screen wotfard'>
        <div className="content-center flex-grow place-self-center" >
          <p className='text-8xl dark:text-white'>404
          </p>
          <p className='text-2xl dark:text-white pl-2'>are you lost?</p>
        </div>
        </div>
        </Layout>
    );
}

export default NotFound