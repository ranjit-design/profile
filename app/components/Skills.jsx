import React, { useState } from 'react';


const SkillTag = ({ skill, onRemove, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [tempName, setTempName] = useState(skill.name);

  const handleEdit = () => {
    setIsEditing(true);
    setTempName(skill.name);
  };

  const handleSave = () => {
    if (tempName.trim() && tempName !== skill.name) {
      onEdit(skill.id, tempName);
    }
    setIsEditing(false);
  };

  const handleCancel = () => {
    setTempName(skill.name);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave();
    } else if (e.key === 'Escape') {
      handleCancel();
    }
  };
  const getLevelColor = (level) => {
    switch(level.toLowerCase()) {
      case 'beginner': return 'bg-blue-100 text-blue-800';
      case 'intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'advanced': return 'bg-green-100 text-green-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="relative group w-full md:w-auto">
      <div className={`flex flex-col md:flex-row flex-wrap items-start md:items-center justify-between gap-2 w-full px-4 py-2 rounded-lg md:rounded-full ${getLevelColor(skill.level)}`}>
        {isEditing ? (
          <input
            type="text"
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            onKeyDown={handleKeyDown}
            onBlur={handleSave}
            className="bg-transparent border-b border-current outline-none w-full flex-1"
            autoFocus
          />
        ) : (
          <>
            <span className="font-medium break-words max-w-full text-center md:text-left">{skill.name}</span>
            <span className="text-xs px-2 py-0.5 bg-white/50 rounded-full self-start md:self-auto max-w-full break-words">
              {skill.level}
            </span>
            <button
              type="button"
              onClick={handleEdit}
              className="ml-1 text-gray-500 hover:text-indigo-600 transition-colors"
              aria-label={`Edit ${skill.name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-5-5l6-6m-3 3l-6 6" />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => onRemove(skill.id)}
              className="ml-1 text-gray-500 hover:text-red-500 transition-colors"
              aria-label={`Remove ${skill.name}`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-3 h-3">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const SkillsSection = ({
  skillName,
  skillLevel,
  setSkillName,
  setSkillLevel,
  skills = [],
  addSkill,
  removeSkill,
  editSkill,
  back,
  submit,
}) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    if (skillName.trim()) {
      addSkill();
    }
  };

  return (
    <div className="glass space-y-6 px-4 sm:px-6 md:px-8">
      <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
        Add Your Skills
      </h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="skillName" className="block text-sm font-medium text-gray-700 mb-1">
              Skill Name
            </label>
            <div className="flex flex-col sm:flex-row gap-2 w-full min-w-0">
              <input
                id="skillName"
                type="text"
                value={skillName}
                onChange={(e) => setSkillName(e.target.value)}
                className="w-full sm:flex-1 border border-gray-200 rounded-lg px-4 py-3 bg-white/80 backdrop-blur-sm input-focus focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                placeholder="e.g., React, Node.js, Design"
                required
              />
              <select
                value={skillLevel}
                onChange={(e) => setSkillLevel(e.target.value)}
                className="w-full sm:w-auto max-w-full border border-gray-200 rounded-lg px-4 py-3 bg-white/80 backdrop-blur-sm input-focus focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              >
                <option value="Beginner">Beginner</option>
                <option value="Intermediate">Intermediate</option>
                <option value="Advanced">Advanced</option>
              </select>
              <button
                type="submit"
                disabled={!skillName.trim()}
                className={`btn-glow w-full sm:w-auto px-6 py-3 rounded-full text-black font-semibold hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300 ${skillName.trim() ? '' : 'bg-gray-400 cursor-not-allowed'}`}
              >
                Add
              </button>
            </div>
          </div>
        </form>

        <div className="mt-6">
          <h3 className="text-lg font-semibold text-gray-700 mb-3">Your Skills ({skills.length})</h3>
          {skills.length === 0 ? (
            <div className="text-center py-8 border-2 border-dashed border-gray-300 rounded-xl bg-white/40 backdrop-blur-sm">
              <p className="text-gray-500">No skills added yet. Add your first skill above!</p>
            </div>
          ) : (
            <div className="flex flex-wrap gap-3 justify-start sm:justify-center">
              {skills.map((skill) => (
                <SkillTag 
                  key={skill.id} 
                  skill={skill} 
                  onRemove={removeSkill}
                  onEdit={editSkill}
                />
              ))}
            </div>
          )}
        </div>

      <div className="flex flex-col sm:flex-row justify-between gap-3 pt-8 border-t border-gray-200">
        <button
          type="button"
          onClick={back}
          className="btn-glow w-full sm:w-auto px-6 py-3 bg-gray-200 text-black rounded-full font-semibold hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
        >
          Back to Information
        </button>
        <button
          type="button"
          onClick={submit}
          className="btn-glow w-full sm:w-auto px-6 py-3 bg-gray-200 text-black rounded-full font-semibold hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
          disabled={skills.length === 0}
        >
          Review Profile
        </button>
      </div>
    </div>
  );
};

export default SkillsSection;
