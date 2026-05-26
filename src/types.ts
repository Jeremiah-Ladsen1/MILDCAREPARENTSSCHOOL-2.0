/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Program {
  id: string;
  name: string;
  ageGroup: string;
  description: string;
  curriculum: string[];
  schedule: string;
  image: string;
  features: string[];
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  specialty: string;
  experience: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  category: string;
  summary: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  image: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Admissions' | 'Academics' | 'Fees' | 'Facilities' | 'General';
}

export interface SchoolEvent {
  id: string;
  title: string;
  date: string;
  time: string;
  category: 'academic' | 'sports' | 'holiday' | 'parent';
  description: string;
}

export interface Announcement {
  id: string;
  title: string;
  date: string;
  priority: 'low' | 'medium' | 'high';
  content: string;
  sender: string;
}

export interface StudentProfile {
  id: string;
  name: string;
  class: string;
  regNo: string;
  attendance: {
    present: number;
    absent: number;
    total: number;
  };
  grades: {
    subject: string;
    grade: string;
    score: number;
    remarks: string;
  }[];
  teacherRemarks: string;
  headTeacherRemarks: string;
  activities: {
    title: string;
    date: string;
    description: string;
    image: string;
  }[];
  outstandingFees: number;
  paidFees: number;
  paymentHistory: {
    id: string;
    date: string;
    amount: number;
    status: 'Paid' | 'Pending';
    invoiceNo: string;
  }[];
}

export interface TourBooking {
  parentName: string;
  childName: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  gradeOfInterest: string;
}
