import Nav from '../../components/Nav'

export default function chapter5() {


	return (
		<div className="chapter">

			<Nav page={5} />
			<div className="content">
				<div className="title">Chapter 5</div>

				<div className="list-tit">Unordered List</div>
				<ul>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ul>

				<div className="list-tit">Ordered List</div>
				<ol>
				  <li>Coffee</li>
				  <li>Tea</li>
				  <li>Milk</li>
				</ol>

				<div className="list-tit">Description List</div>
				<dl>
				  <dt>Programming Languages</dt>
				  <dd>Javascript</dd>
				  <dd>Java</dd>
				  <dd>Python</dd>

				  <dt>Libraries</dt>
				  <dd>React</dd>
				  <dd>JQuery</dd>
				  <dd>Anime.js</dd>
				</dl>
			</div>
		</div>
	)
}