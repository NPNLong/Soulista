import { Link } from "react-router-dom";
import { FiCalendar, FiUser } from "react-icons/fi";

interface PostCardProps {
  id: number;
  title: string;
  description: string;
  image: string;
  date: string;
  author: string;
}

export default function PostCard({ id, title, description, image, date, author }: PostCardProps) {
  return (
    <Link
      to={`/posts/${id}`}
      className="bg-white rounded-lg shadow hover:shadow-lg transition p-4 flex flex-col group"
    >
      <div className="overflow-hidden rounded-md mb-4">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <h2 className="text-xl font-semibold mb-2 line-clamp-2">{title}</h2>
      <p className="text-gray-600 text-sm flex-1 line-clamp-3">{description}</p>

      <div className="flex justify-between items-center text-xs text-gray-500 mt-4">
        <span className="flex items-center gap-1">
          <FiUser size={14} /> {author}
        </span>
        <span className="flex items-center gap-1">
          <FiCalendar size={14} /> {date}
        </span>
      </div>
    </Link>
  );
}
