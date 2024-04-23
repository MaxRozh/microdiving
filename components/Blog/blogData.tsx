import { Blog } from '@/types/blog';

const blogData: Blog[] = [
  {
    id: 1,
    title: 'Discover Microdiving: Our Journey in Fashion & WEB3!',
    paragraph:
      'Learn about our exclusive ‘microdiving’ fabric, the unique MIC cryptocurrency, and how you can influence the future of fashion design.',
    image: '/images/blog/blog-1.jpg',
    author: {
      name: 'Microdiving',
      image: '/images/logo/logo.jpeg'
      // designation: 'Graphic Designer'
    },
    tags: ['New Video'],
    publishDate: '2024'
  },
  {
    id: 2,
    title: 'Big News, Fashion Innovators!',
    paragraph:
      '💥 Join our very first Microdiving Airdrop right after our fairlaunch concludes! Exclusive Rewards Await! 💥',
    image: '/images/blog/blog-2.jpeg',
    author: {
      name: 'Microdiving',
      image: '/images/logo/logo.jpeg'
      // designation: 'Content Writer'
    },
    tags: ['Rewards'],
    publishDate: '2024'
  },
  {
    id: 3,
    title: 'Contribution updates',
    paragraph:
      'Now anyone who contributes at least 3 tons can get into the top 10 very soon there will be a second airdrop.',
    image: '/images/blog/blog-3.jpeg',
    author: {
      name: 'Microdiving',
      image: '/images/logo/logo.jpeg'
    },
    tags: ['Updates'],
    publishDate: '2024'
  }
];
export default blogData;
