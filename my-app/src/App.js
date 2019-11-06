import React from 'react';
import Search from './components/Search';
import ViewBuilding from './components/ViewBuilding';
import BuildingList from './components/BuildingList';
import Credit from './components/Credit';
import AddBuilding from './components/AddBuilding';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      selectedBuilding: 0,
      data: this.props.data,
      removed: 0
    };
  }

  filterUpdate(value) {
    this.setState({
      filterText: value
    })
  }

  selectedUpdate(id) {
    this.setState({
      selectedBuilding: id
    })
  }

  removeBuilding(id) {
    this.setState({
      data: this.state.data.filter(function(building) { return building.id !== id}),
      selectedBuilding: 0
    })
  }

  addBuilding(new_id, new_code, new_name, new_latitude, new_longitude, new_address)
  {

    var e = this.state.data.map(e => {
      if(e.id == new_id)
        return true
      else
        return false
    }).filter(function(e) {
      return e === true
    })

    if(e[0] === true)
      return -1

    var a =
    {
      id: new_id,
      code: new_code,
      name: new_name,
      coordinates: 
      {
        latitude: new_latitude,
        longitude: new_longitude
      },
      address: new_address
    }

    this.setState({
      data: this.state.data.concat(a)
    })
  }

  render() {
    
    return (
      <div className="bg">
        <div className="row">
          <h1>UF Directory App</h1>
        </div>

        <Search
        filterUpdate={this.filterUpdate.bind(this)}
        />
        <main>
          <div className="row">
            <div className="column1">
              <div className="tableWrapper">
                <table className="table table-striped table-hover">
                  <tr>
                    <td>
                      <b>Code Building</b>
                    </td>
                  </tr>
                  <BuildingList
                    data={this.state.data}
                    selectedUpdate={this.selectedUpdate.bind(this)}
                    filterText={this.state.filterText}
                  />
                </table>
              </div>
            </div>
            <div className="column2">
              <table>
                <tr>
                  <ViewBuilding
                  data={this.state.data}
                  selectedBuilding={this.state.selectedBuilding}
                  removeBuilding={this.removeBuilding.bind(this)}
                  />
                </tr>
                <tr>
                  <AddBuilding
                  addBuilding={this.addBuilding.bind(this)}
                  />
                </tr>
              </table>
            </div>
          </div>
          <Credit />
        </main>
      </div>
    );
  }
}

export default App;
