import cardig from '../assets/cardig.png';
import founder from '../assets/founder.png';

export const blogPosts = [
  {
    id: '1',
    title: 'Creating dynamic, responsive websites for seamless user experiences',
    content: [
      "In today's digital age, having a responsive website is no longer optional—it's essential. A responsive design ensures that your site looks and functions perfectly on any device, from desktop computers to smartphones and tablets.",
      "The key to creating a truly responsive website lies in understanding the principles of fluid grids, flexible images, and media queries. These technologies work together to create a seamless user experience across all devices.",
      "When designing for multiple devices, it's important to consider not just the layout but also the content hierarchy. Users on mobile devices often have different needs and behaviors than desktop users, so your design should adapt accordingly.",
      "Performance is another critical factor in responsive design. A beautiful website that loads slowly will drive users away. Optimizing images, minifying code, and leveraging browser caching are just a few ways to improve your site's performance.",
      "As we move forward, the importance of responsive design will only continue to grow. With the increasing variety of devices and screen sizes, creating flexible, adaptable websites has never been more important for reaching and engaging your audience."
    ],
    category: 'Web Development',
    date: 'Oct 2024',
    authorName: 'Sarah Wilson',
    authorId: '1',
    role: 'Senior Developer',
    authorImage: founder,
    image: cardig,
    readTime: '5 min read',
    relatedPosts: [
      { id: '2', title: 'Advanced React Patterns - Part 1', category: 'React' },
      { id: '3', title: 'Advanced React Patterns - Part 2', category: 'React' },
      { id: '4', title: 'Advanced React Patterns - Part 3', category: 'JavaScript' }
    ]
  },
  {
    id: '2',
    title: 'Advanced React Patterns - Part 1',
    content: [
      "React's component-based architecture has revolutionized the way we build user interfaces. In this series, we'll explore some advanced patterns that can help you write more maintainable and reusable React components.",
      "One powerful pattern is the Compound Components pattern, which allows you to create components that work together as a group while maintaining a clean and intuitive API. This pattern is particularly useful for building complex UI components like dropdowns, tabs, or accordions.",
      "Another important concept is the Render Props pattern, which provides a way to share code between components using a prop whose value is a function. This pattern gives you more flexibility and control over how your components render their content.",
      "The Higher-Order Component (HOC) pattern is another essential tool in a React developer's toolkit. HOCs allow you to reuse component logic across your application, making your code more DRY and easier to maintain.",
      "As we continue this series, we'll dive deeper into these patterns and explore how they can be combined to solve complex UI challenges in elegant and efficient ways."
    ],
    category: 'React',
    date: 'Sep 2024',
    authorName: 'John Doe',
    authorId: '2',
    role: 'UI/UX Designer',
    authorImage: founder,
    image: cardig,
    readTime: '4 min read',
    relatedPosts: [
      { id: '1', title: 'Creating dynamic, responsive websites', category: 'Web Development' },
      { id: '3', title: 'Advanced React Patterns - Part 2', category: 'React' },
      { id: '4', title: 'Advanced React Patterns - Part 3', category: 'JavaScript' }
    ]
  },
  // Add more blog posts as needed
  ...Array(2).fill().map((_, i) => ({
    id: String(i + 3),
    title: `Advanced React Patterns - Part ${i + 2}`,
    content: [
      `In part ${i + 2} of our Advanced React Patterns series, we'll continue exploring powerful techniques for building robust React applications.`,
      `We'll cover topics like the Context API, custom hooks, and performance optimization techniques that can take your React skills to the next level.`,
      `By the end of this series, you'll have a solid understanding of advanced React concepts and patterns that you can apply to your own projects.`
    ],
    category: ['React', 'JavaScript'][i % 2],
    date: `Aug ${2024 - i}`,
    authorName: ['Alex Johnson', 'Maria Garcia'][i % 2],
    authorId: String((i % 2) + 3),
    role: ['Full Stack Developer', 'Frontend Developer'][i % 2],
    authorImage: founder,
    image: cardig,
    readTime: `${3 + i} min read`,
    relatedPosts: [
      { id: '1', title: 'Creating dynamic, responsive websites', category: 'Web Development' },
      { id: '2', title: 'Advanced React Patterns - Part 1', category: 'React' },
      { id: String(4 - i), title: `Advanced React Patterns - Part ${4 - i}`, category: ['React', 'JavaScript'][(i + 1) % 2] }
    ]
  }))
];

export const getBlogPostById = (id) => {
  return blogPosts.find(post => post.id === id);
};

export const getRelatedPosts = (currentPostId) => {
  const post = getBlogPostById(currentPostId);
  if (!post || !post.relatedPosts) return [];
  return post.relatedPosts.map(relatedPost => getBlogPostById(relatedPost.id)).filter(Boolean);
};
