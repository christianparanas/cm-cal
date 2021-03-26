import Nav from '../../components/Nav'

export default function chapter8() {


	return (
		<div className="chapter">

			<Nav page={8} />
			<div className="content">
				<div className="title">Chapter 8</div>
				<div className="chap8Tit">Registration Form</div>

				<form action="">
					<input type="text" placeholder="Full name" />
					<input type="email" placeholder="Email" />
					<input type="password" placeholder="Password" />
					<input type="number" placeholder="Age" />
					<input type="text" placeholder="Address" />
					<input type="text" placeholder="Country" />
					<input type="submit" />
				</form>

			</div>
		</div>
	)
}