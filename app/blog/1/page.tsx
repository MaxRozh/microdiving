// import SharePost from '@/components/Blog/SharePost';
// import TagButton from '@/components/Blog/TagButton';
import Video from '@/components/Video';
import Article from '@/components/Article/Article';

import { Metadata } from 'next';

import blogData from '@/components/Blog/blogData';

const article = blogData[0];

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
        <Video hideSection />
        <p className="mb-10 text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed lg:text-base lg:leading-relaxed xl:text-lg xl:leading-relaxed">
          Dive into the world of Microdiving with our latest YouTube video! Discover how we combine style and
          innovation, turning fashion and WEB3 technology into art.
        </p>
      </>
    </Article>
  );
}

export default BlogDetailsPage;
