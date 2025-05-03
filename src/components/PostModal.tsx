import React from "react";

export default function PostModal() {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <p>これはモーダルです</p>
      </div>
    </div>
  );
}
