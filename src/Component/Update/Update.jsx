import React, { useState, useEffect } from 'react';

const Update = ({ editData, handleUpdate }) => {
    const [updataData, setUpdataData] = useState({
        name: '',
        email: '',
        course: '',
        message: ''
    });

    useEffect(() => {
        setUpdataData(editData);
    }, []);


    const handleForm = (e) => {
        const { name, value } = e.target;
        setUpdataData({
            ...updataData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        handleUpdate(updataData);
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-red-300">
            <div className="w-full max-w-lg bg-black shadow-lg rounded-lg p-8 my-5">
                <h2 className="text-3xl font-bold text-center text-red-800 mb-6">Update </h2>

                <form className="space-y-6" onSubmit={handleSubmit}>
                    {/* Name Field */}
                    <div>
                        <label className="block text-sm font-bold text-white">Full Name</label>
                        <input
                            type="text"
                            name="name"
                            value={updataData.name}
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            placeholder="Full Name"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Email Field */}
                    <div>
                        <label className="block text-sm font-bold  text-white">Email</label>
                        <input
                            type="email"
                            name="email"
                            value={updataData.email}
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            placeholder="Email Address"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Course Field */}
                    <div>
                        <label className="block text-sm font-bold  text-white">Course</label>
                        <input
                            type="text"
                            name="course"
                            value={updataData.course}
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            placeholder="Course Name"
                            onChange={handleForm}
                        />
                    </div>

                    {/* Message Field */}
                    <div>
                        <label className="block text-sm font-bold  text-white">Additional Information</label>
                        <textarea
                            name="message"
                            value={updataData.message}
                            className="mt-1 w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 transition duration-150"
                            rows="4"
                            placeholder="Additional Information"
                            onChange={handleForm}
                        ></textarea>
                    </div>

                    {/* Update Button */}
                    <div className="text-center">
                        <button
                            type="submit"
                            className="w-full py-3 bg-red-600 text-white font-bold rounded-lg"
                        >
                            Update
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Update;
