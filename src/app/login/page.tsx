import type { ReactElement } from 'react';
import Layout from './layout';
import type { NextPageWithLayout } from '../_app';
 
const Page: NextPageWithLayout = () => {
  return <div className='container'>hello world</div>;
}
 
Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
 
export default Page;