export default function Page() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-md">
                <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>
                <form className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
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
                            className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="••••••••"
                            required
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <label className="flex items-center">
                            <input type="checkbox" className="mr-2" />
                            <span className="text-sm text-gray-600">Remember me</span>
                        </label>
                        <a href="#" className="text-sm text-blue-600 hover:underline">
                            Forgot password?
                        </a>
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition"
                    >
                        Sign in
                    </button>
                </form>
                <p className="text-sm text-center text-gray-500 mt-6">
                    Don't have an account?{' '}
                    <a href="#" className="text-blue-600 hover:underline">
                        Sign up
                    </a>
                </p>
            </div>
        </div>
    );
}
