import { HeartIcon } from '@heroicons/react/24/outline';
import { Button } from '@nextui-org/react';
import React from 'react'
import { t } from '../../lib/translator';

type BannerProps = {
    bannerTitle: string;
}

function Banner({ bannerTitle }: BannerProps) {
  return (
    <div className='w-full h-[400px] rounded-md border border-red bg-linkPink'>
      <p>{bannerTitle}</p>
      <Button color="primary" variant="bordered"><HeartIcon color='white' fontSize={24}/>{t('signUp.heading')}</Button>
    </div>
  )
}

export default Banner
