type Course = {
  title: string;
  description: string;
  date: Date;
};

function createCourse(title: string, description: string, date: Date): Course {
  const obj: Partial<Course> = {};
  obj.title = title;
  obj.description = description;
  obj.date = date;
  return obj as Course;
}
