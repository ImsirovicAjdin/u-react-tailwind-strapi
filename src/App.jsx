import { Homepage, BlogContent } from "./pages";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/blog" element={<BlogContent />} />
      </Routes>
    </div>
  );
}