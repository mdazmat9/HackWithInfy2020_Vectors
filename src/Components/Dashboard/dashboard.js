import React,{Component} from 'react'
import {Link} from 'react-router-dom'
import styles from './dashboard.module.css'
import cx from 'classnames'


class Dashboard extends Component{
	render(){
		return(
			<>
			<div className={styles.backImg}>
				<div className="row">
					<div className={cx("col-sm-6",styles.trackAll)}>
						<Link to='/general'>
							<div className="card h-25 w-25" style={{width: 18 + 'rem'}}>
								<img className="card-img-top" src="/img/trackAll.png" alt="Card image cap"></img>
								<p className="card-text">Track All</p>
							</div>
						</Link>
					</div>
					<div className={cx("col-sm-6",styles.trackById)}>
						<Link to='/track_by_id'>
							<div className="card h-25 w-25" style={{width: 18 + 'rem'}}>
								<img className="card-img-top" src="/img/trackAll.png" alt="Card image cap"></img>
								<p className="card-text">Track By Id</p>		
							</div>
						</Link>
					</div>
				</div>
				<div className="row">
					<div className={cx("col-sm-6",styles.history)}>
						<Link to='/history'>
							<div className="card h-25 w-25" style={{width: 18 + 'rem'}}>
								<img className="card-img-top" src="/img/trackAll.png" alt="Card image cap"></img>
								<p className="card-text">History</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
			</>
		)
	}
}

export default Dashboard;