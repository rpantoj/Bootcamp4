import React, {Component} from 'react';

class AddBuilding extends Component {
    toggleForm(){
        var u = document.getElementById('*')
        var v = document.getElementById('matchedId')
        var w = document.getElementById("submitBtn")
        var x = document.getElementById("form")
        var y = document.getElementById("cancelBtn")
        var z = document.getElementById("addBtn")
        if(x.hidden)
        {
            u.hidden = true
            v.hidden = true
            w.hidden = false
            x.hidden = false
            y.hidden = false
            z.hidden = true
            
        }
        else
        {
            u.hidden = true
            v.hidden = true
            w.hidden = true
            x.hidden = true
            y.hidden = true
            z.hidden = false
            
        }
    }

    submitForm(e)
    {
        if(document.getElementById('id').value === '' ||
            document.getElementById('code').value === '' ||
            document.getElementById('name').value === '')
        {
            document.getElementById('*').hidden = false
        }
        else
        {
            var ret = this.props.addBuilding(
            document.getElementById('id').value,
            document.getElementById('code').value,
            document.getElementById('name').value,
            document.getElementById('latitude').value,
            document.getElementById('longitude').value,
            document.getElementById('address').value);
            if(ret === -1)
            {
                document.getElementById('matchedId').hidden = false;
            }
            else
            {
            this.toggleForm();
            document.getElementById('id').value = '';
            document.getElementById('code').value = '';
            document.getElementById('name').value = '';
            document.getElementById('latitude').value = '';
            document.getElementById('longitude').value = '';
            document.getElementById('address').value = '';
            }

        }
    }
    
    render() {
        return (
            <div>
                <button id='addBtn' onClick={this.toggleForm}>Add Building</button>
                <button hidden='true' id="cancelBtn" onClick={this.toggleForm}>Cancel</button>
                <form id='form' hidden='true'>
                    <p>* = required</p>
                    <p id='*' hidden='true' style={{color: 'red'}}>Missing required elements</p>
                    <p id='matchedId' hidden='true' style={{color: 'red'}}>ID must be unique</p>
                    <label style={{display: 'inline-block', width: '20%'}}>ID*: </label>
                    <input id='id'style={{display: 'inline-block', width: '70%'}} type='text'></input>
                    <label style={{display: 'inline-block', width: '20%'}}>Code*: </label>
                    <input id='code' style={{display: 'inline-block', width: '70%'}} type='text'></input>
                    <label style={{display: 'inline-block', width: '20%'}}>Name*: </label>
                    <input id='name' style={{display: 'inline-block', width: '70%'}} type='text'></input>
                    <label style={{display: 'inline-block', width: '20%'}}>Latitude: </label>
                    <input id='latitude'style={{display: 'inline-block', width: '70%'}} type='text'></input>
                    <label style={{display: 'inline-block', width: '20%'}}>Longitude: </label>
                    <input id='longitude'style={{display: 'inline-block', width: '70%'}} type='text'></input>
                    <label style={{display: 'inline-block', width: '20%'}}>Address: </label>
                    <input id='address'style={{display: 'inline-block', width: '70%'}} type='text'></input>
                </form>
                <button hidden='true' id="submitBtn" onClick={(e) => {this.submitForm(e)}}>Submit</button>
                
            </div>
        )
    }
}

export default AddBuilding