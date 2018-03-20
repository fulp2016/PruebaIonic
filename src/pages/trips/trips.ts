import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {TripService} from "../../services/trip-service";
import {TripDetailPage} from "../trip-detail/trip-detail";
import { ConnempleoProvider } from "../../providers/connempleo/connempleo";

@Component({
  selector: 'page-trips',
  templateUrl: 'trips.html'
})
export class TripsPage {
  // list of trips
  public trips: any;

  ofertas : any;
  total : number;

  constructor(public nav: NavController, public tripService: TripService, public httpDatos: ConnempleoProvider) {
    // set sample data
    this.cargarUsuarios();
  }

  // view trip detail
  viewDetail(id) {
    this.nav.push(TripDetailPage, {id: id});
  }

  cargarUsuarios(){
    this.httpDatos.obtDatos().then(
      (res) => { 
        console.log(res);
        this.ofertas = res;
        this.total = this.ofertas.length;
      },
      (error) =>{
        console.error(error);
      }
    )
  }



}
