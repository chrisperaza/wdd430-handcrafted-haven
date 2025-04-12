'use client';
import Form from 'next/form';
import { signup } from '@/app/lib/auth';

export default function Page() {
    return (
        <>
            <div className="min-h-screen flex items-center justify-center bg-gray-100">
                <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Create an Account</h2>
                    <Form action={signup} className="space-y-5">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="name">
                                Name
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                                Email
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="you@example.com"
                                required
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="username">
                                Username
                            </label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Your Username"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                                Password
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="********"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password_confirm">
                                Confirm Password
                            </label>
                            <input
                                type="password"
                                id="password_confirm"
                                name="password_confirm"
                                className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="********"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                        >
                            Create Account
                        </button>
                    </Form>
                </div>
            </div>
        </>
    );
}