import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Dashboard = () => {
    return (
        <motion.section
            className="bg-gray-50 py-8 px-4 sm:px-6 lg:px-8"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto">
                {/* Dashboard Header */}
                <div className="text-center mb-8">
                    <h2 className="text-3xl font-bold text-gray-800 sm:text-4xl">Welcome to Your Dashboard</h2>
                    <p className="mt-2 text-gray-600">
                        Manage your blog posts, settings, and other important details.
                    </p>
                </div>

                {/* Dashboard Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Card 1 - Manage Posts */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800">Manage Posts</h3>
                        <p className="mt-2 text-gray-600">Create, edit, or delete your blog posts.</p>
                        <Link to="/manage-posts" className="text-indigo-600 mt-4 inline-block">
                            Go to Posts
                        </Link>
                    </motion.div>

                    {/* Card 2 - View Analytics */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800">View Analytics</h3>
                        <p className="mt-2 text-gray-600">Check your blog's performance and user engagement.</p>
                        <Link to="/analytics" className="text-indigo-600 mt-4 inline-block">
                            View Analytics
                        </Link>
                    </motion.div>

                    {/* Card 3 - Settings */}
                    <motion.div
                        className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
                        whileHover={{ scale: 1.05 }}
                    >
                        <h3 className="text-xl font-semibold text-gray-800">Settings</h3>
                        <p className="mt-2 text-gray-600">Update your account settings and preferences.</p>
                        <Link to="/settings" className="text-indigo-600 mt-4 inline-block">
                            Go to Settings
                        </Link>
                    </motion.div>
                </div>
            </div>
        </motion.section>
    );
};

export default Dashboard;
