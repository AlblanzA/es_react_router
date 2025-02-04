import { useState } from "react";

const Container = ({ title, children }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="bg-white border border-red-500 p-4 rounded-lg">
      <h2 
        className="text-lg font-bold cursor-pointer mb-2" 
        onClick={() => setCollapsed(!collapsed)}
      >
        {title}
      </h2>
      {!collapsed && <div>{children}</div>}
    </div>
  );
};

export default Container;
