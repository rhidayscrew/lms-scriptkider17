"use client";

import dynamic from "next/dynamic";
import { useMemo } from "react";

import "react-quill/dist/quill.snow.css";

interface EditorProps {
  onChange: (value: string) => void;
  value: string;
}

/* 
    The "use client" directive is not enough to disable server-side rendering. Yes,
    this is a client component but it still runs on the server once and then it runs
    again on the client side. This won't work with react-quill as we are going to get
    hydration errors. The workaround is to force this component to only be run on the
    client by importing it dynamically and setting the ssr to false
    https://nextjs.org/docs/pages/building-your-application/optimizing/lazy-loading
*/
export const Editor = ({ onChange, value }: EditorProps) => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <div className="bg-white">
      <ReactQuill theme="snow" value={value} onChange={onChange} />
    </div>
  );
};
