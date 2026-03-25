export interface Experience {
	id: string;
	company: string;
	position: string;
	location: string;
	startDate: string;
	endDate: string;
	current: boolean;
	description: string; // Bullet points will be split by newlines
}

export interface Education {
	id: string;
	institution: string;
	degree: string;
	fieldOfStudy: string;
	location: string;
	startDate: string;
	endDate: string;
	current: boolean;
	gpa: string;
}

export interface Project {
	id: string;
	name: string;
	link: string;
	description: string;
}

export interface CustomSection {
	id: string;
	title: string;
	items: string[];
}

export interface CvData {
	// Personal Info
	fullName: string;
	email: string;
	phone: string;
	location: string;
	linkedin: string;
	website: string;
	summary: string;

	// Sections
	experiences: Experience[];
	education: Education[];
	skills: string; // Comma separated for easy parsing
	projects: Project[];
	languages: string; // Comma separated
	certifications: string; // Comma separated

	// Settings
	font: 'Garamond' | 'Times New Roman' | 'Arial' | 'Helvetica';
	fontSize: 'Small' | 'Medium' | 'Large'; // Maps to text-sm, text-base, text-lg in print
}

/**
 * Helper function to generate unique IDs for array items
 */
export function generateId(): string {
	return Math.random().toString(36).substring(2, 9);
}
