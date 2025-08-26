"use client";

import { useEffect, useState } from "react";
import BlogEditorForm from "./BlogEditorForm";
import { useTheme } from "@/app/_subcomponents/ThemeContext";

export default function BlogsAndCaseStudy({ blogs, caseStudy }) {
  const [switchData, setSwitchData] = useState(false);
  const { accessGranted, setAccessGranted } = useTheme();

  const [adminAccess, setAdminAccess] = useState(false);

  useEffect(() => {
    const storedValue = sessionStorage.getItem("adminAccess");
    setAdminAccess(storedValue === "true");
  }, [accessGranted]);

  const handleSignOut = () => {
  
    sessionStorage.removeItem("adminAccess");
 
    setAdminAccess(false);
    setAccessGranted(false);
    alert("You have signed out!");
  };

  return (
    <div className="pt-30">
      {adminAccess && (
        <div className="flex justify-center items-center gap-5 mx-auto pb-20 flex-wrap">
          <button
            onClick={() => setSwitchData(false)}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            Blogs
          </button>

          <button
            onClick={() => setSwitchData(true)}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          >
            Case Study
          </button>

          <button
            onClick={handleSignOut}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
          >
            Sign Out
          </button>
        </div>
      )}

      {switchData ? (
        caseStudy.length <= 0 ? (
          <div>CaseStudy is Empty</div>
        ) : (
          <BlogEditorForm blogs={caseStudy} switchData={switchData} />
        )
      ) : (
        <BlogEditorForm blogs={blogs} switchData={switchData} />
      )}
    </div>
  );
}
