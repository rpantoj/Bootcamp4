import React from 'react';

class BuilingList extends React.Component {
	selectedUpdate(id, e) {
		this.props.selectedUpdate(id)
	}

	getFilterText(){
		return this.props.filterText
	}
	
	render() {

		const buildingList = this.props.data
		.filter(name => {
			return name.name.toLowerCase().indexOf(this.getFilterText().toLowerCase()) >= 0
		}).map(directory => {
			return (
				<tr key={directory.id}
				onClick={(e) => {
					this.selectedUpdate(directory.id, e)
				}}>
					<td> {directory.code} </td>
					<td> {directory.name} </td>
				</tr>
			);
		});

		return <div>{buildingList}</div>;
	}
}
export default BuilingList;
