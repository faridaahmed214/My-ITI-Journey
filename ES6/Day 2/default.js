function course(options = {}) {
  const defaults = {
    courseName: "ES6",
    courseDuration: "3days",
    courseOwner: "JavaScript",
  };
  const defaultKeys = Object.keys(defaults);
  const optionKeys = Object.keys(options);

  for (const key of optionKeys) {
    if (!defaultKeys.includes(key)) {
      throw new Error(`El property '${key}' de msh m3ana.`);
    }
  }

  //   optionKeys.forEach((element) => {
  //     if (!defaultKeys.includes(element)) {
  //       throw new Error(`El property '${element}' de msh m3ana.`);
  //     }
  //   });

  //   for (const key in optionKeys) {
  //     if (!defaultKeys.includes(key)) {
  //       throw new Error(`El property '${key}' de msh m3ana.`);
  //     }
  //   }

  const result = { ...defaults, ...options };
  return result;
}

console.log(course({ courseDuration: "5days", courseOwner: "JS" }));
console.log(course());
console.log(course({ courseLevel: "Beginner" }));
