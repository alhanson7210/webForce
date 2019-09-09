/*Method 2 - Page content as a prop; pageLayout/about/index/header*/

/*import js module for layout*/
import Header from './header.js'

/*css styles*/
const layoutStyle = {
	margin: 20,
	padding: 20,
	border: '1px solid #DDD'
}

/*code functionality*/
const layout = props =>  (
	<div style = {layoutStyle}>
		<Header/>
		{props.children}
	</div>
)

/*exporting js modules within the project*/
export default layout
