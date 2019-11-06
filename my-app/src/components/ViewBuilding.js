import React from 'react';
import RemoveBuilding from "./RemoveBuilding";

class ViewBuilding extends React.Component {

	render() {
		const {data} = this.props;
		
		const buildingList = data
		.filter(name => {
			return name.id === this.props.selectedBuilding
		}).map(directory => {
			return (
				<div>
					<table>
						<tbody>
							<tr><td>ID: {directory.id}</td></tr>
							<tr><td>Code: {directory.code}</td></tr>
							<tr><td>Name: {directory.name}</td></tr>
							{directory.coordinates && directory.coordinates.latitude && <tr><td>Latitude: {directory.coordinates.latitude}</td></tr>}
							{directory.coordinates && directory.coordinates.longitude && <tr><td>Longitude: {directory.coordinates.longitude}</td></tr>}
							{directory.address && <tr><td>Address: {directory.address}</td></tr>}
						</tbody>
					</table>
					<RemoveBuilding
					selectedBuilding={directory.id}
					data={this.props.data}
					removeBuilding={this.props.removeBuilding}
					/>
				</div>
				
			);
		});

		if(this.props.selectedBuilding === 0)
			return (
				<i>Click on a name to view more information</i>
			)
		else{
			return (<div>{buildingList}</div>)
		}
	}
}
export default ViewBuilding;
