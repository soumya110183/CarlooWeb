"use client";

import { useState } from "react";
import BlogEditorForm from "./BlogEditorForm";

export default function BlogsAndCaseStudy({ blogs, caseStudy }) {
  const [switchData, setSwitchData] = useState(false);

  return (
    <div className="pt-30">
      <div className="flex justify-center items-center gap-5 mx-auto pb-20">
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
      </div>

      {switchData ? (
        caseStudy.length < 0 ? (
          <div>CaseStudy is Empty</div>
        ) : (
          <BlogEditorForm
            blogs={caseStudy}
            switchData={switchData}
          />
        )
      ) : (
        <BlogEditorForm
          blogs={blogs}
          switchData={switchData}
        />
      )}
      {/* <AdminBlogForm blogs={blogs} casestudy={caseStudy} /> */}
      {/* <CaseStudyForm /> */}
    </div>
  );
}
