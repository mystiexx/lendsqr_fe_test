export type UserProfile = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  avatar: string;
  gender: string;
  bvn: string;
  address: string;
  currency: string;
};

export type UserGuarantor = {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  gender: string;
  address: string;
};

export type UserSocials = {
  facebook: string;
  instagram: string;
  twitter: string;
};

export type userEducation = {
  level: string;
  employmentStatus: string;
  sector: string;
  duration: string;
  officeEmail: string;
  monthlyIncome: string[];
  loanRepayment: string;
};

export type User = {
  createdAt: string;
  orgName: string;
  userName: string;
  email: string;
  phoneNumber: string;
  lastActiveDate: string;
  profile: UserProfile;
  guarantor: UserGuarantor;
  accountBalance: string;
  accountNumber: string;
  socials: UserSocials;
  education: userEducation;
  id: string;
  status: string;
};
