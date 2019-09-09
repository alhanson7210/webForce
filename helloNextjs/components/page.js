/*Method 1 - Layout as a Higher Order Component; page/i/a/header*/
/*import modules*/
import Header from './header'

/*css*/
const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

/*code functionality*/
const secondaryLayout = (Page) => {
  return () => (
    <div style={layoutStyle}>
      </Header>
      </Page>
    </div>
  )
}

/*Provide access to js module*/
export default secondaryLayout
