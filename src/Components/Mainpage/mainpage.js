import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './Mainpage.module.css'




class Mainpage extends Component{
	render(){
		return(
			<div className={styles.pagebody}>
				<h1 className={styles.getStarted}>Track vehicle</h1>
				<Link className={styles.butttons} to='/dashboard'>
					<button  type="button" class="btn btn-dark btn-lg">Get Started</button>
				</Link>
			</div>
		)
	}
}

export default Mainpage;