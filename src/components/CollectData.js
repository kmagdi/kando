import React,{ Component }  from 'react';
import csvToJSON from "./csvToJSON" 
import {Footer} from "./Footer"


class CollectData extends Component{
    constructor(){
        super()
        this.state = {
            contactData:{}
        }
    }
    componentDidMount(){  
        const urlContacts="https://raw.githubusercontent.com/kmagdi/KSZC-Data/master/contactDataKando.csv"    
        fetch(urlContacts)           
            .then(resp=>resp.text())
            .then(text=>{
                const contactsJSON=csvToJSON(text, ';')
                this.setState({contactData:contactsJSON[0]})
            })
   }

render(){
     return(
        <div>
            <Footer bgimage={this.props.bgimage} contactData={this.state.contactData} />
        </div>
    )}   
}
export default CollectData