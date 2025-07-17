const createJob = (title, description, company, location, salary,skills,url) => {
    return {
      title,
      description,
      company,
      location,
      salary,
      createdAt: new Date(),
      skills,
      url,
    };
  };
  
  module.exports = createJob;
  