import { Homepage, BlogContent } from "./pages";
import { Routes, Route } from 'react-router-dom';

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Homepage /> */}
        <BlogContent />
      </Routes>
    </div>
  );
}