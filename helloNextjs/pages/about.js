					/*Code updates, error log, and initial error

/*imports*/
import Layout from '../components/pageLayout'

/*styles*/
const imgStyle = {
	width: '25em',
	height: '25em'
}

/*Easier to use and understand the function statement than a constant arrow function*/
export default function About() {
  return (
    <div>
      <Layout>
      	<h1>  This is the about page </h1>
	<img style = {imgStyle} src = "https://assets3.thrillist.com/v1/image/2823822/size/gn-gift_guide_variable_c.jpg"/>
        <h3>
                        My name is Alex Hanson and I'm an undergraduate(freshman)student who is a computer science major at the 
			University of San Francisco.
        </h3>
	
	<h2>Contact and Info</h2>
        <h3>
        	<pre>		Name: Alex L Hanson Jr</pre>
                <pre>		Email: alhanson@dons.usfca.edu </pre>
                <pre>		Github: https://github.com/alhanson7210 </pre>
                <pre>		Portfolio: https://sites.google.com/site/alhansoncodeshop/ </pre>
        </h3>
      </Layout>
    </div>
  )
}

/*using a constant(const) arrow function(void parameters) and exporting it is the same directly exporting a function returning 
const About = () => (
	<div>
		<h1>
			This is the about page
		</h1>

		<h3>
			My name is Alex Hanson and I'm an undergraduate(freshman)student who is a computer science major at the 
			University of San Francisco.
		</h3>

		<h5>
			<pre>Name: Alex L Hanson Jr</pre> 
			<pre>Emailalhanson@dons.usfca.edu </pre>
			<pre>https://github.com/alhanson7210 </pre>
			<pre>https://sites.google.com/site/alhansoncodeshop/ </pre>
		</h5>
	</div>
)

export default About
*/
