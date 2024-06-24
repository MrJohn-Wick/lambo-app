'use client'

import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card';
import { Link } from '@nextui-org/link';
import React from 'react'

interface AuthWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
}

export const AuthWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref
}: AuthWrapperProps) => {
  return (
    <Card className='w-[400px] shadow'>
      <CardHeader>
        <div className="font-medium">
          {headerLabel}
        </div>
      </CardHeader>
      <CardBody>
        {children}
      </CardBody>
      <CardFooter>
        <div className="flex items-center justify-center w-full">
          <Link href={backButtonHref}>{backButtonLabel}</Link>
        </div>
      </CardFooter>
    </Card>
  )
}