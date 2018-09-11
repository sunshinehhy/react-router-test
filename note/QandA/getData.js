
import ajax from '../../../util/ajax.js';

 function GetData() {

    ajax('http://localhost:9000/memberData').then(response => {
        console.log(response);
        return response
    }).catch(e => {
        console.log(e);
        alert(`Error: ${e}`);
    });
    return {} 
}
const GetData1 = GetData();
export default GetData1;

