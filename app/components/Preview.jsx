import React from 'react';

const Preview = ({ formData = {}, skills = [], onEdit }) => {
  const form = formData || {};

  return (
    <div className="glass space-y-8 px-4 sm:px-6 md:px-8 border-2 border-gray-100 rounded-2xl overflow-hidden">
      <div className="flex flex-col mt-6 md:flex-row justify-between items-center mb-8">
        <h3 className="text-2xl font-bold text-slate-800">
          Profile Summary
        </h3>
        <button
          type="button"
          onClick={onEdit}
          className="btn-glow px-6 py-3 bg-gray-200 mt-6 text-black rounded-full font-semibold hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
        >
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1 flex items-center justify-center">
          <div className="w-50 h-50 bg-gray-100 rounded-full flex items-center justify-center text-gray-500 shadow-lg">
            <img src="/logo.png" alt="Profile Picture" className="w-38 h-38 rounded-full object-cover" />
          </div>
        </div>

        <div className="md:col-span-2 space-y-4">
          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Name</div>
            <div className="font-semibold text-lg text-gray-800">{form.fullName || "—"}</div>
          </div>

          <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-1">Email</div>
            <div className="text-gray-700 overflow-auto">{form.email || "—"}</div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">Phone</div>
              <div className="text-gray-700 overflow-auto">{form.phone || "—"}</div>
            </div>
            <div className="bg-white/60 backdrop-blur-sm rounded-xl p-6 shadow-sm">
              <div className="text-sm text-gray-500 mb-1">City</div>
              <div className="text-gray-700 overflow-auto">{form.city || "—"}</div>
            </div>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 mb-6 shadow-sm">
            <div className="text-sm text-gray-500 mb-3">Skills</div>
            {skills.length === 0 ? (
              <div className="text-gray-500 italic">No skills added.</div>
            ) : (
              <div className="grid grid-cols-2 gap-4">
                {skills.map((s) => (
                  <div
                    key={s.id}
                    className="bg-gray-100 text-gray-800 rounded-full px-4 py-2 shadow-sm"
                  >
                    <div className="font-medium text-gray-800">{s.name}</div>
                    <div className="text-xs text-gray-600 mt-1">{s.level}</div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preview;
