'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Form from 'next/form';
import { login, checkAuth } from '@/app/lib/auth';

export default function Page() {
    const router = useRouter();
    const [alreadyLoggedIn, setAlreadyLoggedIn] = useState(false);

    useEffect(() => {
        async function checkUserAuth() {
            const user = await checkAuth();
            if (user) {
                setAlreadyLoggedIn(true);

                await new Promise((resolve) => setTimeout(resolve, 5000));
                router.push('/');
            }
        }

        checkUserAuth();
    }, [router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                {alreadyLoggedIn ? (
                    <div className="text-center text-green-600 font-semibold">
                        You are already logged in! Redirecting to the homepage...
                    </div>
                ) : (
                    <>
                        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                        <Form action={login} className="space-y-5">
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
                            <div className="text-sm text-center">
                                Don't have an account?{' '}
                                <a
                                    href="/signup"
                                    className="text-blue-600 hover:underline"
                                >
                                    Sign up
                                </a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 rounded-xl hover:bg-blue-700 transition"
                            >
                                Entrar
                            </button>
                        </Form>
                    </>
                )}
            </div>
        </div>
    );
}
