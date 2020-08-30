import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import cx from 'classnames'
import styles from '../Dashboard/dashboard.module.css'
class history extends Component{
    render(){
        return(
            <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top  navbar-dark bg-dark">
				<a className="navbar-brand" href="#">Where is my Truck</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
					<li className="nav-item ">
						<Link to='/dashboard'><a className="nav-link" href="#">HOME</a></Link>
					</li>
					<li className="nav-item active">
						<Link to='/history'><a className="nav-link" href="#">HISTORY<span className="sr-only">(current)</span></a></Link>
					</li>
					
					<li>
						<button className={cx("btn  btn-secondary")}>START</button>
					</li>
					
					</ul>
				</div>
				</nav>
            </>
        )
    }
}

export default history;