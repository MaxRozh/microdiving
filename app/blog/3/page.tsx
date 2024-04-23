import Image from 'next/image';

// import SharePost from '@/components/Blog/SharePost';
// import TagButton from '@/components/Blog/TagButton';
import Article from '@/components/Article/Article';

import { Metadata } from 'next';

import blogData from '@/components/Blog/blogData';

const article = blogData[2];

export const metadata: Metadata = {
  title: article.title,
  description: article.paragraph
};

function BlogDetailsPage() {
  return (
    <Article article={article}>
      <>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          {article.paragraph}
        </p>
        <div className="mb-10 w-full overflow-hidden rounded">
          <div className="relative aspect-[97/60] w-full sm:aspect-[97/44]">
            <Image src={article.image} alt="image" fill className="object-cover object-center" />
          </div>
        </div>
        <p className="mb-8 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Find out more by going to{' '}
          <a
            href="https://tonraffles.app/jetton/fairlaunch/MIC/EQBvApfFEEvT0swMtJjqtKUzXFEaJOmx2xYOSG9xiaxg40Pe"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl font-medium text-primary"
          >
            Tonraffles
          </a>
        </p>
      </>
    </Article>
  );
}

export default BlogDetailsPage;
