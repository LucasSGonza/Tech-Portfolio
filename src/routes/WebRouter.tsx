import { Route, Routes } from "react-router-dom";
import { HomePage } from "@/pages/HomePage";

const WebRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
};

export default WebRouter;
