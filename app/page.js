'use client';
import React, { useState } from 'react';
import Information from './components/Information';
import Preview from './components/Preview';
import Skills from './components/Skills';

const Page = () => {

  const [currentStep, setCurrentStep] = useState(1);
  
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    city: '',
   
  });
  

  const [skills, setSkills] = useState([]);
  const [skillName, setSkillName] = useState('');
  const [skillLevel, setSkillLevel] = useState('Beginner');

  
  const isInformationComplete = () => {
    return formData.fullName.trim() !== '' && 
           formData.email.trim() !== '' && 
           formData.phone.trim() !== '' &&
           formData.city.trim() !== '';
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

 
  const addSkill = () => {
    if (skillName.trim()) {
      setSkills([
        ...skills,
        {
          id: Date.now(),
          name: skillName,
          level: skillLevel
        }
      ]);
      setSkillName('');
      setSkillLevel('Beginner');
    }
  };

  const removeSkill = (id) => {
    setSkills(skills.filter(skill => skill.id !== id));
  };

  const editSkill = (id, newName) => {
    setSkills(skills.map(skill => 
      skill.id === id ? { ...skill, name: newName } : skill
    ));
  };

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleEditProfile = () => {
    setCurrentStep(1);
  };

  const handleSubmit = () => {

    console.log('Form submitted:', { ...formData, skills });
    setIsSubmitted(true);
  };

  const resetForm = () => {
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      city: ''
    });
    setSkills([]);
    setCurrentStep(1);
    setIsSubmitted(false);
  };

  const nextStep = () => {
    if (currentStep === 1 && isInformationComplete()) {
      setCurrentStep(2);
    } else if (currentStep === 2) {
      setCurrentStep(3);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10 fade-in">
        <div className="w-full max-w-2xl glass rounded-2xl p-8 sm:p-12 text-center">
          <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-500 mb-6">
            <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-4 text-slate-800">
            Profile Submitted Successfully!
          </h2>
          <p className="text-gray-600 mb-8 text-lg">Thank you for submitting your information.</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={resetForm}
              className="btn-glow px-6 py-3 bg-gray-200 text-black rounded-full font-semibold hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
            >
              Create Another Profile
            </button>
            
          </div>
        </div>
      </div>
    );
  }

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="w-full max-w-2xl fade-in">
            <div className="glass rounded-2xl p-8">
              <Information 
                form={formData} 
                handleChange={handleChange} 
                next={nextStep}
              />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="w-full max-w-2xl fade-in">
            <div className="glass rounded-2xl p-8">
              <Skills
                skillName={skillName}
                skillLevel={skillLevel}
                setSkillName={setSkillName}
                setSkillLevel={setSkillLevel}
                skills={skills}
                addSkill={addSkill}
                removeSkill={removeSkill}
                editSkill={editSkill}
                back={prevStep}
                submit={nextStep}
              />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="w-full max-w-4xl fade-in">
            <div className="glass rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-center mb-8 text-slate-800">
                Review Your Profile
              </h2>
              <Preview formData={formData} skills={skills} onEdit={handleEditProfile} />
              <div className="mt-8 flex justify-center">
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="btn-glow px-8 py-3 bg-gray-200 text-black rounded-full font-semibold text-lg hover:bg-gray-300 hover:shadow-lg transform hover:scale-105 transition-all duration-300"
                >
                  Submit Profile
                </button>
              </div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4 py-8 sm:px-6 sm:py-10">
      {renderStep()}
    </div>
  );
};

export default Page;