"use client";

import { useActionState } from "react";
import { authenticate } from "@/lib/authenticate";

export default function LoginForm() {
  const [errorMessage, formAction] = useActionState(authenticate, undefined);
  return (
    <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">
      <h2 className="text-2xl font-bold text-center mb-6">ログイン</h2>
      <form action={formAction} className="space-y-4">
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="email"
          >
            メールアドレス
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label
            className="block text-sm font-medium text-gray-700 mb-1"
            htmlFor="password"
          >
            パスワード
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="••••••••"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          ログイン
        </button>
        <div
          className="flex h-8 items-end space-x-1"
          aria-live="polite"
          aria-atomic="true"
        >
          {errorMessage && (
            <div className="text-red-500">
              <p className="text-sm text-red-500">{errorMessage}</p>
            </div>
          )}
        </div>
      </form>
    </div>
  );
}
