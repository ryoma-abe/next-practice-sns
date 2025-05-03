"use client";

export default function PostModal({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg w-full max-w-md">
        <p className="text-lg font-semibold text-center">投稿フォーム</p>
        <button
          onClick={onClose}
          className="mt-6 px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
        >
          閉じる
        </button>
      </div>
    </div>
  );
}
