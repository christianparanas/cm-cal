import Nav from '../../components/Nav'



export default function chapter3() {

	return (
		<div className="chapter">

			<Nav page={3} />
			<div className="content">
			<div className="title">Chapter 3</div>
								<h1>Curriculum Vitae</h1>
	
				<h2><u>Personal Information:</u></h2>
<pre>{`
Last Name 	:	Calites
First Name 	:	Jan Kyle
Middle Name 	:	Brieva
Age		:	20
Birthday	:	August 8, 2000

Educational Attainment:

Elementary	:	Basper Elementary School
Year Graduated	:   	2013
	
Secondary	:	Leyte National High School
Year Graduated	:	2019
Tertiary	:	Eastern Visayas State University
Degree		:	Bachelor of Schience in Information Technology
Yeear Graduated	:	Undergrad
`}</pre>
			</div>
		</div>
	)
}