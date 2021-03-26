import { useState, useEffect } from 'react' 
import Link from 'next/link'
import { Pivot as Hamburger } from 'hamburger-react'


export default function Nav( props ) {

	const [cr, setCr] = useState('')

	useEffect(() => {
		setCr(props.page)
		console.log(props)
	}, [props.page])
	

	return (
		<div className="nav">
			<div className="nav-menu">
				<Link href="/"><div className={`tm ${cr == 1 ? "current_page" : ""}`}>Home</div></Link>
				<Link href="/activity/chapter2"><div className={`tm ${cr == 2 ? "current_page" : ""}`}>Act 2</div></Link>
				<Link href="/activity/chapter3"><div className={`tm ${cr == 3 ? "current_page" : ""}`}>Act 3</div></Link>
				<Link href="/activity/chapter4"><div className={`tm ${cr == 4 ? "current_page" : ""}`}>Act 4</div></Link>
				<Link href="/activity/chapter5"><div className={`tm ${cr == 5 ? "current_page" : ""}`}>Act 5</div></Link>
				<Link href="/activity/chapter6"><div className={`tm ${cr == 6 ? "current_page" : ""}`}>Act 6</div></Link>
				<Link href="/activity/chapter7"><div className={`tm ${cr == 7 ? "current_page" : ""}`}>Act 7</div></Link>
				<Link href="/activity/chapter8"><div className={`tm ${cr == 8 ? "current_page" : ""}`}>Act 8</div></Link>
			</div>
		</div>
	)

}