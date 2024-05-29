import type { ReactElement } from 'react';
import React from 'react';
import Layout from './layout';
import type { NextPageWithLayout } from '../_app';
import { SingInForm } from '@lambo/components/SingInForm';
import { auth } from '@lambo/auth';
import { redirect } from 'next/navigation';

const Page: NextPageWithLayout = async () => {
  const session = await auth();

  if(session?.user) 
    redirect('/');

  return (
    <SingInForm />
  );
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}

export default Page;
