import React, { useState } from 'react';

const Information = ({ form = {}, handleChange, next }) => {
  const {
    fullName = '',
    email = '',
    phone = '',
    city = ''
  } = form;

  const [editingField, setEditingField] = useState(null);
  const [tempValue, setTempValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    next();
  };

  const startEdit = (fieldName, currentValue) => {
    setEditingField(fieldName);
    setTempValue(currentValue);
  };

  const saveEdit = (fieldName) => {
    const syntheticEvent = {
      target: {
        name: fieldName,
        value: tempValue
      }
    };
    handleChange(syntheticEvent);
    setEditingField(null);
    setTempValue('');
  };

  const cancelEdit = () => {
    setEditingField(null);
    setTempValue('');
  };

  const handleKeyDown = (e, fieldName) => {
    if (e.key === 'Enter') {
      saveEdit(fieldName);
    } else if (e.key === 'Escape') {
      cancelEdit();
    }
  };

  return (
    <div className=" px-4 sm:px-6 md:px-8 border-2 border-gray-100 rounded-2xl overflow-hidden ">
      <form onSubmit={handleSubmit} className="space-y-6 mt-10">
        <h1 className="text-3xl font-bold text-center mb-8 text-slate-800">
          Profile Information
        </h1>
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name *
          </label>
          <div className="mt-1 flex flex-col sm:flex-row gap-2">
            {editingField === 'fullName' ? (
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'fullName')}
                onBlur={() => saveEdit('fullName')}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />
            ) : (
              <input
                id="fullName"
                type="text"
                name="fullName"
                value={fullName}
                onChange={handleChange}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white/80 backdrop-blur-sm input-focus focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g. Ranjit Chaudhary"
                required
              />
            )}
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email *
          </label>
          <div className="mt-1 flex flex-col sm:flex-row  gap-2">
            {editingField === 'email' ? (
              <input
                id="email"
                type="email"
                name="email"
                value={tempValue}
                onChange={(e) => setTempValue(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, 'email')}
                onBlur={() => saveEdit('email')}
                className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                autoFocus
              />
            ) : (
              <input
                id="email"
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
                className="flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white/80 backdrop-blur-sm input-focus focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="you@example.com"
                required
              />
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone *
            </label>
            <div className="mt-1 flex flex-col sm:flex-row gap-2">
              {editingField === 'phone' ? (
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'phone')}
                  onBlur={() => saveEdit('phone')}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
              ) : (
                <input
                  id="phone"
                  type="tel"
                  name="phone"
                  value={phone}
                  onChange={handleChange}
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white/80 backdrop-blur-sm input-focus focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="+977-9800000000"
                  required
                />
              )}
            </div>
          </div>

          <div>
            <label htmlFor="city" className="block text-sm font-medium text-gray-700">
              City *
            </label>
            <div className="mt-1 flex flex-col sm:flex-row gap-2">
              {editingField === 'city' ? (
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  onKeyDown={(e) => handleKeyDown(e, 'city')}
                  onBlur={() => saveEdit('city')}
                  className="flex-1 border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-indigo-500"
                  autoFocus
                />
              ) : (
                <input
                  id="city"
                  type="text"
                  name="city"
                  value={city}
                  onChange={handleChange}
                  className="flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white/80 backdrop-blur-sm input-focus focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                  placeholder="Your full address..."
                  required
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-6">
          <button
            type="submit"
            className="btn-glow mb-6 px-8 py-3 text-black rounded-full font-semibold hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            Next: Add Skills
          </button>
        </div>
      </form>
    </div>
  );
};

export default Information;
