				/*Notes for running the index.js file
In order to run program, you must use 
	npm run dev 

and go to 
	http://localhost:3000. 

To use another port, you can run 
	npm run dev -- -p <your port here>.
*/


				/*Code updates, error log, and initial error
update: Changing the anchor tag to a button works fine with links and the title popup as well.
	Added the popUp to the anchor(a) tag when hovering over a link.
	HomeStartUp was changed to be written as 'export default function HomeStartUp () { return (...)}' because it is more
	compact, I understand it well enough, and I am less likely to forget to add export default after the declaration.
	Note, there can only be one div in the const definition of HomeStartUp.
        Adding the (h1)header tag worked when testing if it would give an error as well.
        Adding a (p)paragraph tag works after the body text.
        Leaving only the body text(Homepage start up!) of the div works.

error log update:Adding the popUp to the link(Link) tag loads the page but the popUp does not show, so only place the title on 
	the title attribute on tags inside the link.
	Adding the (br)break tag causes an expected corresponding JSX closing tag for <div>. Its best to not use it 
	until further examples explains an alternative for using <br> with next.js.
	Having the (br)break tag without the '/' breaks the code from running properly.
	Having an extra line of html code -similar format as the index's div- after the first div, it will crash and
        give a syntax error saying that:Adjacent JSX elements must be wrapped in an enclosing tag.
 
Initial error: does not work for some reason -div structured with breaks, header,and paragraph tags crash.
*/

				/*however, this does work when ran since it is the example from :next.js
const Index = () => (
  <div>
    <p>Hello Next.js</p>
  </div>
)

export default Index
*/

				/*Api's used for the program*/
// This is the Link API
import Link from 'next/link'

				/*Function declaration for the program*/
export default function HomeStartUp() {
    return (
	<div>
		<h1>Homepage start up!</h1>
		<h2>Test example code</h2>
		<p>Hello, this is the first page and it was successful!</p>
		<p>Don't use breaks yet</p>
		<Link href = "/about">
			<button title = 'about page'>About{' '}Page</button>
		</Link>
	</div>
    )
}
