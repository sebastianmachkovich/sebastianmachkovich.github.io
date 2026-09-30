export interface EducationEntry {
  degree: string;
  field: string;
  school: string;
  startDate: string;
  endDate: string;
  gpa?: string;
}

export const education: EducationEntry[] = [
  {
    degree: 'MBA',
    field: 'Information Technology Management',
    school: 'University of Wisconsin-Whitewater',
    startDate: 'Sep 2026',
    endDate: 'May 2028',
  },
  {
    degree: 'B.S. Computer Science',
    field: 'Software Engineering',
    school: 'University of Wisconsin-Green Bay',
    startDate: 'Sep 2022',
    endDate: 'May 2026',
    gpa: '3.75',
  },
];
