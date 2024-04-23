import { Metadata } from 'next';

import AboutSectionOne from '@/components/About/AboutSectionOne';
import AboutSectionTwo from '@/components/About/AboutSectionTwo';
import Breadcrumb from '@/components/Common/Breadcrumb';
import { APP_NAME, DESCRIPTION_DEFAULT } from '@/constants/meta';

export const metadata: Metadata = {
  title: `About ${APP_NAME}`,
  description: DESCRIPTION_DEFAULT
};

function AboutPage() {
  return (
    <>
      <Breadcrumb pageName={`About ${APP_NAME}`} description={DESCRIPTION_DEFAULT} />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
}

export default AboutPage;
