import { useState, useEffect } from 'react' 
import Link from 'next/link'
import { Pivot as Hamburger } from 'hamburger-react'


export default function Nav() {
	

	return (
		<div className="nav">
			<div className="nav-menu">
				<Link href="/"><div className="tm " >Home</div></Link>
				<Link href="/acts/chapter2"><div className="tm" >Act 2</div></Link>
				<Link href="/acts/chapter3"><div className="tm" >Act 3</div></Link>
				<Link href="/acts/chapter4"><div className="tm" >Act 4</div></Link>
				<Link href="/acts/chapter5"><div className="tm" >Act 5</div></Link>
				<Link href="/acts/chapter6"><div className="tm" >Act 6</div></Link>
				<Link href="/acts/chapter7"><div className="tm" >Act 7</div></Link>
				<Link href="/acts/chapter8"><div className="tm" >Act 8</div></Link>
			</div>
		</div>
	)

}