import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MotionDiv } from "framer-motion";
import { FaRegClock } from "react-icons/fa";

const blogPosts = [
  {
    id: 1,
    title: "The Future of Web Development",
    excerpt: "Explore the latest trends and technologies shaping the web in 2025...",
    image: "https://source.unsplash.com/400x250/?technology",
    date: "Feb 15, 2025",
  },
  {
    id: 2,
    title: "Understanding React Server Components",
    excerpt: "A deep dive into React Server Components and how they change the game...",
    image: "https://source.unsplash.com/400x250/?coding",
    date: "Feb 10, 2025",
  },
  {
    id: 3,
    title: "Designing for Accessibility in UI/UX",
    excerpt: "Why accessibility matters and how to create inclusive user experiences...",
    image: "https://source.unsplash.com/400x250/?design",
    date: "Feb 8, 2025",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Latest Blogs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <MotionDiv
            key={post.id}
            whileHover={{ scale: 1.05 }}
            className="shadow-lg rounded-2xl overflow-hidden bg-white"
          >
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-40 object-cover"
            />
            <CardContent className="p-4">
              <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
              <p className="text-gray-600 text-sm mb-4">{post.excerpt}</p>
              <div className="flex justify-between items-center text-gray-500 text-sm">
                <span className="flex items-center gap-1">
                  <FaRegClock /> {post.date}
                </span>
                <Button variant="outline">Read More</Button>
              </div>
            </CardContent>
          </MotionDiv>
        ))}
      </div>
    </div>
  );
};

export default Home;