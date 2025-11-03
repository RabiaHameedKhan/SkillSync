"use client";
import { useState } from "react";

export default function CommunityPage() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      name: "Sara Ahmed",
      content: "Just completed React basics! 💻 Feeling motivated.",
      likes: 12,
      comments: ["Congrats! 🎉", "Keep going!"],
    },
    {
      id: 2,
      name: "Ali Khan",
      content: "Started learning Python for Data Science. Excited! 🐍",
      likes: 8,
      comments: [],
    },
  ]);

  const [newPost, setNewPost] = useState("");
  const [commentText, setCommentText] = useState({});

  const handleAddPost = () => {
    if (newPost.trim()) {
      const newEntry = {
        id: Date.now(),
        name: "You",
        content: newPost,
        likes: 0,
        comments: [],
      };
      setPosts([newEntry, ...posts]);
      setNewPost("");
    }
  };

  const handleLike = (id) => {
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id ? { ...post, likes: post.likes + 1 } : post
      )
    );
  };

  const handleAddComment = (id) => {
    const text = commentText[id]?.trim();
    if (!text) return;
    setPosts((prev) =>
      prev.map((post) =>
        post.id === id
          ? { ...post, comments: [...post.comments, text] }
          : post
      )
    );
    setCommentText({ ...commentText, [id]: "" });
  };

  return (
    <section className="min-h-screen bg-[#1E1E2F] text-white py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">
          Join the <span className="text-[#8B5CF6]">Community</span>
        </h1>
        <p className="text-gray-400 text-center mb-10">
          Share your progress, motivate others, and learn together!
        </p>

        {/* Post Input */}
        <div className="bg-[#242437] p-6 rounded-2xl mb-8 border border-[#2A2A3D]">
          <textarea
            value={newPost}
            onChange={(e) => setNewPost(e.target.value)}
            placeholder="Share your thoughts..."
            className="w-full bg-[#1E1E2F] text-white p-3 rounded-lg focus:outline-none resize-none"
            rows={3}
          ></textarea>
          <button
            onClick={handleAddPost}
            className="mt-3 w-full py-2 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg font-semibold"
          >
            Post
          </button>
        </div>

        {/* Posts Feed */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div
              key={post.id}
              className="bg-[#242437] p-6 rounded-2xl border border-[#2A2A3D]"
            >
              <h3 className="font-semibold text-lg">{post.name}</h3>
              <p className="text-gray-300 mt-2">{post.content}</p>

              <div className="flex items-center gap-4 mt-3 text-sm">
                <button
                  onClick={() => handleLike(post.id)}
                  className="text-[#8B5CF6] hover:underline"
                >
                  ❤️ {post.likes} Likes
                </button>
              </div>

              {/* Comments */}
              <div className="mt-4">
                {post.comments.map((c, i) => (
                  <p key={i} className="text-gray-400 text-sm mb-1">
                    💬 {c}
                  </p>
                ))}

                <div className="flex items-center gap-2 mt-2">
                  <input
                    value={commentText[post.id] || ""}
                    onChange={(e) =>
                      setCommentText({ ...commentText, [post.id]: e.target.value })
                    }
                    placeholder="Write a comment..."
                    className="flex-1 bg-[#1E1E2F] text-white text-sm p-2 rounded-lg focus:outline-none"
                  />
                  <button
                    onClick={() => handleAddComment(post.id)}
                    className="px-3 py-1 bg-[#8B5CF6] hover:bg-[#7C3AED] rounded-lg text-sm"
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
