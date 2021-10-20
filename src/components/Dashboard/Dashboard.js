function Dashboard() {
  return (
    <div className="max-w-2xl mx-auto overflow-hidden bg-white rounded-lg shadow-md dark:bg-gray-800">
        <img className="object-cover w-full h-64" src="https://images.unsplash.com/photo-1550439062-609e1531270e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60" alt="Article"></img>

        <div className="p-6">
            <div>
                <a href="https://github.com/DanePete" className="block mt-2 text-2xl font-semibold text-gray-800 dark:text-white hover:text-gray-600 hover:underline">To Social</a>
                <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Todo..</p>
            </div>

            <div className="mt-4">
                <div className="flex items-center">
                    <div className="flex items-center">
                        <img className="object-cover h-10 rounded-full" src="https://avatars.githubusercontent.com/u/3259683?v=4" alt="Avatar"></img>
                        <a href="https://github.com/DanePete" className="mx-2 font-semibold text-gray-700 dark:text-gray-200">Dane</a>
                    </div>
                    <span className="mx-1 text-xs text-gray-600 dark:text-gray-300">2021</span>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Dashboard;
