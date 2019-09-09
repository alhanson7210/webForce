/**/

/*libraries*/
import Link from 'next/link'

/*constants*/
const headerStyle = {
	marginRight: 15
}

/*Component Functions*/
export default function Header() {
	return (
		<div>
			<Link href = "/">
				<a style = {headerStyle}>Home</a>
			</Link>

			<Link href = "/about">
				<a style = {headerStyle}>About</a>
			</Link>
		</div>
	)
}
