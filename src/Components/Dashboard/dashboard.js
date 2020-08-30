import React,{Component} from 'react'
import {Link} from 'react-router-dom'

//import GeneralPlotMap from '../General_Plot/generalPlotMap'
import styles from './dashboard.module.css'
import cx from 'classnames'
import L from 'leaflet'
import {Map,TileLayer,Marker,Popup} from 'react-leaflet'

var myIcon = L.icon({
    iconUrl: '/img/pin.png',
    iconSize:[25,41],
    iconAnchor:[12.5,41],
    popupAnchor:[0,-41]
})


class Dashboard extends Component{
	state={
		busIdList : ["a","b","c","a","b","c","a","b","c","a","b","c"],
		selectedBus : "",
		isOpen:false,
		isStartAbled:false,
		isStop:false,
		dropDownDisplay:"SELECT TRUCK ID",
		lat: 22.57,
		lng: 88.36,
		speed:0,
		averageSpeed:0,
		time:"-",
        zoom: 14

	}
	componentDidMount() {


		var vehicleString,vehicleArray;
		fetch("http://localhost:8090/buses")
		.then(respons => respons.json())
		.then(response => {
			vehicleString = response[0].vehicles;
			vehicleString = vehicleString.substring(1, vehicleString.length-1);
			vehicleArray = vehicleString.split(',')
			console.log(vehicleArray);
			this.setState({
				busIdList:vehicleArray
			})
		});

	}

	handleOnClick(busId){

		this.setState({
			selectedBus : busId,
			isStartAbled:true,
			dropDownDisplay:busId
		},()=>{
		console.log(this.state)
		})
	}
	handle = () => {
        console.log(this.state)
	}
	
    startOnClick(){
		var busID=this.state.selectedBus
		busID = busID.replace("'","")
		busID = busID.replace("'","")
		busID=busID.substring(1)
		var url="http://localhost:8090/getBusData?id="+busID
		fetch(url)
		.then(respons => respons.json())
		.then(response => {
			console.log(response);

		/*
				us_code: ""DMR 5053""
		color: ""MERAH KUNING"↵"
		corridor: ""0""
		course: "280"
		date_time: "2019-11-26 14:00:27"
		dtd: ""0""
		id: "1807"
		latitude: "-6.16626"
		location: """"
		longitude: "106.786873"
		speed: "0"
		trip_id: ""9.102""
		*/
			var lat = this.state.lat
			var lng = this.state.lng
			
			var sum=0
			
			for(let i=0;i<response.length;i++){
				setTimeout(()=>{
					lat=response[i].latitude;
					lng=response[i].longitude;
					var speed=response[i].speed;
					sum+=parseFloat(speed);
					var time = response[i].date_time;
					var averageSpeed = (sum/(i+1));
					averageSpeed = Math.round((averageSpeed*100))/100;
				this.setState({
					lat,
					lng,
					speed,
					time,
					averageSpeed
				})
				
				},i*500);  
				
			}

		});
		// var lat = this.state.lat
		// 	var lng = this.state.lng
		// 	for(let i=0;i<100 ;i++){
		// 		console.log(this.state.isStop)
				
		// 		setTimeout(()=>{
		// 			lat+=0.001;
		// 			lng+=0.003;
		// 		this.setState({
		// 			lat,
		// 			lng
		// 		})
				
		// 		},i*500);
			  
				
		// 	}
	}

	stopOnClick = () =>{
      this.setState({
		  isStop:true
	  })
	}
	
	toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });
	
	render(){
		const position = [this.state.lat, this.state.lng]
		const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
		const ableClass = `${this.state.isStartAbled ? "" : "disabled"}`
		return(
			<>
			{/* NAV BEGINS */}
			<div className="row">
			<nav className="navbar navbar-expand-lg fixed-top navbar-light   navbar-dark bg-dark">
				<a className="navbar-brand text-light" >Where is my Truck</a>
				<div className="nav-item text-light info">
							<p>Speed:{this.state.speed}</p>
							<p>Time: {this.state.time}</p>
				</div>
				<div className="nav-item text-light info1">
							<p>Longitude:{this.state.lat}</p>
							<p>Latitude: {this.state.lng}</p>
				</div>
				<div className="nav-item text-light info2">
							<p>averageSpeed:{this.state.averageSpeed}</p>
				</div>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav ml-auto">
						
					<li className="nav-item active">
						<Link to='/dashboard'><a className="nav-link" >HOME <span className="sr-only">(current)</span></a></Link>
					</li>
					<li className="nav-item">
						<Link to='/history'><a className="nav-link" >HISTORY</a></Link>
					</li>
					<li className="nav-item dropdown" onClick={this.toggleOpen}>
						<button className="btn  btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
							{this.state.dropDownDisplay}
						</button>
						<div className={cx(menuClass,styles.menuScroll)} aria-labelledby="dropdownMenuButton">
							{ this.state.busIdList.map((busId,key)=>( <a key={key} className="dropdown-item" onClick={()=>{this.handleOnClick(busId)}} type="button">{busId}</a> )) }
						</div>
					</li>
					<li>
						<button className={cx("btn  btn-secondary",ableClass)} onClick={()=>{this.startOnClick()}}   >START</button>
					</li>
					<li>
						<button className={cx("btn  btn-secondary",ableClass)} onClick={()=>{this.stopOnClick()}}   >STOP</button>
					</li>
					
					</ul>
				</div>
				</nav>
				<br></br>
				<h1>Hello</h1>
				</div>
			{/* NAV Ends */}
			 {/* <GeneralPlotMap   selectedBus={this.state.selectedBus}/> */}
			
			 <Map className="map" center={position}  zoom={this.state.zoom}>
            <TileLayer
            attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
                <Marker position={position} icon={myIcon}>
                    <Popup>
                        
                        Traffic <br /> Waiting....
                    </Popup>
                </Marker>
            </Map>
			
			</>
		)
	}
}

export default Dashboard;