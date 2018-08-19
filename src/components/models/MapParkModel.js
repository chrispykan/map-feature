import axios from 'axios'
let parkPoint = 'https://data.sfgov.org/resource/94uf-amnx.geojson'

class MapParkModel {
  static all(){
  let request = axios.get(parkPoint)
  return request
  }
}
export default  MapParkModel